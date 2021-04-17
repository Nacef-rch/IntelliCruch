import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {
  public isLoading: boolean = false;
  public faTimes=faTimes;
  public projectNameEdit="";
  @Output() create = new EventEmitter<boolean>();
  @Output() close = new EventEmitter<boolean>();

  constructor(private router: Router, private projectService: ProjectService) { 
    if(this.projectService.getNewProject()){
    this.projectNameEdit = this.projectService.getNewProject().name;
    }
  }

  ngOnInit(): void {
    this.projectService.projectSelected.subscribe((id:number)=>{
      console.log(id)
    })
    
  }
  public onAddProject(form: NgForm): void {
    //this.create.emit(false);
    this.projectService.setNewProject(form.value);
    const value = form.value;
    this.isLoading=true;
    //this.router.navigate(['/dashboard']);

  }
  public onClose():void{
    this.close.emit(true);
    this.projectService.setNewProject({});
  }
  public onLoaded(loading: boolean):void{
    this.isLoading=false;
    this.create.emit(false);
    this.router.navigate(['/dashboard']);

  }

}
