import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public onAddProject(form: NgForm): void {
    const value = form.value;
    console.log(value);

  }

}
