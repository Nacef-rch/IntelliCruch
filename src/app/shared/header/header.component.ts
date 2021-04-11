import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router  } from '@angular/router';
import * as titleMock from '../../mocks/head-title.mock.json';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentRoute: string;
  public title: string = 'Project';
  public titleMock: any; 
  public titleData: any;

  constructor(private router: Router,private location: Location,) {
    this.titleMock = titleMock;
      this.titleData = this.titleMock.default;
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.currentRoute = location.path();
      } else {
        this.currentRoute = "Home";
      }
      if(this.currentRoute === "/projects"){this.title=this.titleData.projects}
      if(this.currentRoute === "/dashboard"){this.title=this.titleData.dashboard}
    });

    

    }

   

  ngOnInit(): void {

  }

}
