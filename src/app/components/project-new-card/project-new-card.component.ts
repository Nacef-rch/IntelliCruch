import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-project-new-card',
  templateUrl: './project-new-card.component.html',
  styleUrls: ['./project-new-card.component.scss']
})
export class ProjectNewCardComponent implements OnInit {
  faPlus=faPlus;
  @Output() clickAdd = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(agreed: boolean) {
    this.clickAdd.emit(agreed);
  
  }

}
