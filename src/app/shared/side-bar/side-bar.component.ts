import { Component, OnInit } from '@angular/core';
import { faFolderOpen,faChartLine,faSlidersH,faPaste } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  faProjectDiagram = faFolderOpen;
  faChartLine = faChartLine;
  faSlidersH = faSlidersH;
  faPaste = faPaste;

  constructor() { }

  ngOnInit(): void {
  }


}
