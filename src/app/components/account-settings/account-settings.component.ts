import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import * as accountMock from '../../mocks/account.mock.json';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  faAngleDown=faAngleDown;
  public accountMock: any; 
  public account: any;

  constructor() { }

  ngOnInit(): void {
     this.accountMock = accountMock;
      this.account = this.accountMock.default;
  }

}
