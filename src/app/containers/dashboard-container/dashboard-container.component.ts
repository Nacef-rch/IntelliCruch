import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {
  titleCard1="Project";
  titleCard2="Ore Type";
  textCard1="Quebec ABC2";
  textCard2="Gold";

  constructor(private projectService: ProjectService) {
    if(this.projectService.getNewProject()){
      this.textCard1=this.projectService.getNewProject().name;
    this.textCard2=this.projectService.getNewProject().oreType;
    }
   }

  ngOnInit(): void {
  }


}
