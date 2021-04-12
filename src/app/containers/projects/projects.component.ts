import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: any;
  public filterProject:any;
  public showModal:boolean = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.filterProject= this.projects;
  }
  public onSearch(value: any):void{
    const searchText = value.toUpperCase();
    this.filterProject = this.projects;

    this.filterProject = this.filterProject.filter((item) => {
        const itemText = item.title.toUpperCase();

        if (itemText.includes(searchText)) {
            return item;
        }
    });

  }
  public onCreate(created: boolean){
    this.showModal=false;
  }
  public onClick(agreed: boolean){
    this.showModal=true;
    console.log(agreed);
  }
  public onClose(agreed: boolean){
    this.showModal=false;
  }

}
