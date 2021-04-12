import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  public faEllipsisV=faEllipsisV;
  @Input() imageUrl: string;
  @Input() title: string;
  @Input() description: string;
  @Input() graph: boolean;
  @Input() id: number;
  constructor(private projectService: ProjectService, private router:Router) { }

  ngOnInit(): void {
  }
  public onEdit():void{
    this.projectService.setNewProject({name:this.title,oreType:"Gold"})
    this.projectService.projectSelected.emit(this.id)
    this.router.navigate(['/dashboard']);

  }

}
