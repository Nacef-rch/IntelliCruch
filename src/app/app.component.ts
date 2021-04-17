import { Component } from '@angular/core';
import { CsvParserService } from './services/csv-parser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IntelliCruch';
  constructor(private csv: CsvParserService){

  }
}
