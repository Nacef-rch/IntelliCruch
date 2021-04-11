import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNewCardComponent } from './project-new-card.component';

describe('ProjectNewCardComponent', () => {
  let component: ProjectNewCardComponent;
  let fixture: ComponentFixture<ProjectNewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectNewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectNewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
