import { Component, OnInit } from '@angular/core';
import * as ProjectsMock from '../../mocks/projects.mock.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projectsMock: any; 
  public projects: any;
  public filterProject:any;
  public showModal:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.projectsMock = ProjectsMock;
      this.projects = this.projectsMock.default;
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
  public onClick(agreed: boolean){
    this.showModal=true;
    console.log(agreed);
  }

}
