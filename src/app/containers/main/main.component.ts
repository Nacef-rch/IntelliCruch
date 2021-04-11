import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public mini = true;

  constructor() { }

  ngOnInit(): void {
  }
  public sidebarHover(): void {
    if (this.mini) {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.getElementById("logo-mini").style.display = "none";
      document.getElementById("logo").style.display = "block";
      this.mini = false;
    } else {
      document.getElementById("mySidebar").style.width = "85px";
      document.getElementById("main").style.marginLeft = "85px";
      document.getElementById("logo-mini").style.display = "block";
      document.getElementById("logo").style.display = "none";
      this.mini = true;
    }
}

}
