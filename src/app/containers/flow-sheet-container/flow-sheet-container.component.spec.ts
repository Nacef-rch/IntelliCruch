import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowSheetContainerComponent } from './flow-sheet-container.component';

describe('FlowSheetContainerComponent', () => {
  let component: FlowSheetContainerComponent;
  let fixture: ComponentFixture<FlowSheetContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowSheetContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowSheetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
