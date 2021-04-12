import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardResComponent } from './dashboard-card-res.component';

describe('DashboardCardResComponent', () => {
  let component: DashboardCardResComponent;
  let fixture: ComponentFixture<DashboardCardResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCardResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCardResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
