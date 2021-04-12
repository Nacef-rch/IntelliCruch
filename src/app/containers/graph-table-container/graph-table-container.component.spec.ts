import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTableContainerComponent } from './graph-table-container.component';

describe('GraphTableContainerComponent', () => {
  let component: GraphTableContainerComponent;
  let fixture: ComponentFixture<GraphTableContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphTableContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
