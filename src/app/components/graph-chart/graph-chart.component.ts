import { ChartPointService } from './../../services/chart-point.service';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import { Papa } from 'ngx-papaparse';
import { CsvParserService } from 'src/app/services/csv-parser.service';
@Component({
  selector: 'app-graph-chart',
  templateUrl: './graph-chart.component.html',
  styleUrls: ['./graph-chart.component.scss']
})

export class GraphChartComponent implements OnInit {

  randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  graphData:any;
  isDataAvailable:boolean=false;
  
  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Optimization results',
      fontSize: 14,
    },
    legend: {
      display: false,
    },
    elements: 
    { 
        point: 
        {
            radius: 5,
            hoverRadius: 0
        }
        
    },
    scales: {
      xAxes: [
        
        {
          scaleLabel: {
            display: true,
            labelString: 'Operating Work Index [kwh/t]'
          },
          gridLines: {
            display: true,
            color: 'rgba(120, 120, 120,0.17)'
          },
        ticks: {
          min: 6,
          max: 20,
        }
      }
    ],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Capital Cost [$M]'
        },
        gridLines: {
          display: true,
          color: 'rgba(120, 120, 120,0.17)'
        },
        ticks: {
          min: 40,
          max: 160,
        }
      }]
    },
    tooltips: {
      displayColors: false,
      callbacks: {
        // title: function(tooltipItem, all) {
        //   return [
        //     all.datasets[tooltipItem[0].datasetIndex].data[tooltipItem[0].index].name,
        //   ]
        // },
        
        label: function(tooltipItem, all) {
          return [
            'Operating Work Index [kwh/t]' + ': ' + '' + tooltipItem.xLabel.toLocaleString() + 'kwh/t',
           'Capital Cost [$M]' + ': ' + '' + tooltipItem.yLabel.toLocaleString() + '$M'
          ]
        }
      }
    }
    
  };
  
  public bubbleChartData = [];
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;


  public bubbleChartColors: Color[] = [
    {
      borderColor: 'rgba(229, 229, 229, 0,44)',
      backgroundColor: 'rgba(229, 229, 229, 0,44)',
      // hoverBackgroundColor: 'rgba(30, 114, 251, 1)',
      // hoverBorderColor: 'rgba(30, 114, 251, 1)'
      hoverBackgroundColor: 'rgba(229, 229, 229, 0,44)',
      hoverBorderColor: 'rgba(229, 229, 229, 0,44)'
    },
  ];
 
constructor(private csv: CsvParserService,private papa: Papa,private chartPointService: ChartPointService) { 
    console.log("componrnt inside")
  }


  ngOnInit(): void {

    this.csv.getChartArray().subscribe(
      data => {
        var rows = this.papa.parse(data, {header: true}).data;
        this.graphData = rows.map(function(row) {
          return {
            x: row['Woi'],
            y: row['CAPEX'],
            name: row['id']
          }
        }
        
        )

        this.bubbleChartData = [
          {
            data: this.graphData,
            label: 'Optimization results',
          },
        ];
        console.log(this.bubbleChartData)
        this.isDataAvailable=true;
     

      },
      error => {
          console.log(error);
          this.isDataAvailable=false;
      }
  );
   
   

}

chartClicked(){
  this.chartPointService.pointSelected.emit(this.randomNum(1, 20))
  this.chartPointService.pointSelectedId.emit(this.randomNum(50, 960))
  this.doScrolling(1000,700)

}

doScrolling(elementY, duration) { 
  var startingY = window.pageYOffset;
  var diff = elementY - startingY;
  var start;

  
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;

    var time = timestamp - start;
   
    var percent = Math.min(time / duration, 1);

    window.scrollTo(0, startingY + diff * percent);

   
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  })
}
}
