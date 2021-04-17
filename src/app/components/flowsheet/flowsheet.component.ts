import { Component, Input, OnInit } from '@angular/core';
import { ChartPointService } from 'src/app/services/chart-point.service';

@Component({
  selector: 'app-flowsheet',
  templateUrl: './flowsheet.component.html',
  styleUrls: ['./flowsheet.component.scss']
})
export class FlowsheetComponent implements OnInit {
  @Input() srcNumId: number;
  public showFlow:boolean = false;
  public srcNum:number =0;
  public srcUrl:string =`./assets/img/Graph/${this.srcNum}.png`

  onClick(){

 
  this.doScrolling(300,500)
      
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
  constructor(private chartPointService: ChartPointService ) {
 
    this.chartPointService.pointSelected.subscribe(
      (data:number)=>{
        this.srcNum=data;
        this.showFlow=true;
        this.srcUrl=`./assets/img/Graph/${this.srcNum}.png`
       
      }
    )
   
     
    
   }

  ngOnInit(): void {
   
  }

}
