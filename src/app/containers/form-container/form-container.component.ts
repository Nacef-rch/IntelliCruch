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
  faTimes=faTimes;
  @Output() create = new EventEmitter<boolean>();
  @Output() close = new EventEmitter<boolean>();

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.projectSelected.subscribe((id:number)=>{
      console.log(id)
    })
    
  }
  public onAddProject(form: NgForm): void {
    this.create.emit(false);
    this.projectService.setNewProject(form.value);
    const value = form.value;
    this.router.navigate(['/dashboard']);

  }
  public onClose():void{
    this.close.emit(true);
  }

}
