import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-table-container',
  templateUrl: './graph-table-container.component.html',
  styleUrls: ['./graph-table-container.component.scss']
})
export class GraphTableContainerComponent implements OnInit {
  public showGraph:boolean=true;
  public btnActive:boolean=true;

  constructor() { }

  ngOnInit(): void {
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
