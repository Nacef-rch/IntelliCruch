import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartPointService {
  public pointSelected = new EventEmitter<number>();
  public pointSelectedId = new EventEmitter<number>();

  constructor() { }
}
