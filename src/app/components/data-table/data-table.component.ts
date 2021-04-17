import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { CsvParserService } from 'src/app/services/csv-parser.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ChartPointService } from 'src/app/services/chart-point.service';
import { faTimes,faCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterViewInit  {
  faTimes=faTimes;
  faCheck=faCheck;
  randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  public tableData:any=[];
  isDataAvailable:boolean=false;
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'Woi', 'Microwave', 'Ore Sorter', 'Crusher Screen', 'Primary Grinding', 'Secondary Grinding'];

  constructor(private csv: CsvParserService,private papa: Papa,private chartPointService: ChartPointService) { }

  ngAfterViewInit() {
    
  }
  


  ngOnInit(): void {
    this.csv.getChartArray().subscribe(
      data => {
        var rows = this.papa.parse(data, {header: true}).data;
        this.tableData = rows.map(function(row) {
          return {
            id: row['id'],
            Woi: row['Woi'],
            Microwave: row['microwave_choice'],
            OreSorter: row['ore_sorter_choice'],
            CrusherScreen: row['screen1_choice'],
            PrimaryGrinding: row['part2_choice'],
            SecondaryGrinding: row['part3_choice']
            
          }
        }
        
        )

        
        console.log(this.tableData)
        
        this.dataSource = new MatTableDataSource<any>(this.tableData);
        setTimeout(() => this.dataSource.paginator = this.paginator);
        this.isDataAvailable=true;
        
     

      },
      error => {
          console.log(error);
          this.isDataAvailable=false;
      }
  );

   
  }
  onClick(element){
    console.log(element)
  this.chartPointService.pointSelected.emit(this.randomNum(1, 20))
  this.chartPointService.pointSelectedId.emit(element)
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
