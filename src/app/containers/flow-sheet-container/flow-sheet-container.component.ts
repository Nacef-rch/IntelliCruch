import { Component, OnInit } from '@angular/core';
import { ChartPointService } from 'src/app/services/chart-point.service';

@Component({
  selector: 'app-flow-sheet-container',
  templateUrl: './flow-sheet-container.component.html',
  styleUrls: ['./flow-sheet-container.component.scss']
})
export class FlowSheetContainerComponent implements OnInit {
  public flowSheetNum:number;
  public srcNum:number;
  public showGraph:boolean=true;
  public btnActive:boolean=true;

  constructor(private chartPointService: ChartPointService) {
    this.chartPointService.pointSelectedId.subscribe(
      (data:number)=>{
        this.flowSheetNum= data;
      }
    )
    this.chartPointService.pointSelected.subscribe(
      (data:number)=>{
        this.srcNum= data;
        console.log(this.srcNum)
      }
    )
   }

  public ngOnInit(): void {
  }
  public onClick(rep:boolean):boolean {
    if(rep){
      this.btnActive=true;
      return this.showGraph=true;
    
    }
    this.btnActive=false;
    return this.showGraph=false;

  }

}
