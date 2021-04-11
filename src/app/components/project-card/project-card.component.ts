import { Component, Input, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  public faEllipsisV=faEllipsisV;
  @Input() tag: string;
  @Input() title: string;
  @Input() description: string;
  @Input() graph: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
