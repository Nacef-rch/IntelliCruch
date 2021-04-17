import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Papa } from 'ngx-papaparse';

@Injectable({
  providedIn: 'root'
})
export class CsvParserService {
  public chartArray: Chart[] = [];

  constructor(private http: HttpClient,) { 
    
  }
  public getChartArray():any{
    
    return this.http.get('assets/files/data.csv', {responseType: 'text'});
  }

}
