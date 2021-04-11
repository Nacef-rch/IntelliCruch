import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  faSearch=faSearch;
  @Output() search = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  public onSearch(event: any):void{
    this.search.emit(event.target.value)
    
  }

}
