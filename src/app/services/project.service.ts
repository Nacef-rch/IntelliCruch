import { EventEmitter, Injectable } from '@angular/core';
import * as ProjectsMock from '../mocks/projects.mock.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectService  {
  public projectSelected = new EventEmitter<number>();
  public projectsMock: any; 
  public projects: any;
  public projectsInit: any;
  public newProject: any;



  constructor() { this.projectsMock = ProjectsMock;
    this.projects = this.projectsMock.default;
    this.projectsInit = this.projectsMock.default; }

  public getInitProjects(){
   
    return this.projectsInit.slice();
  }
  public getProjects(){
    
    return this.projects;
  }
  public setNewProject(project:any) {
    this.newProject = project;
  }
  public getNewProject(){
    return this.newProject;
  }
}
