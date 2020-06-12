import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectsViewComponent } from './admin-projects-view.component';

describe('AdminProjectsViewComponent', () => {
  let component: AdminProjectsViewComponent;
  let fixture: ComponentFixture<AdminProjectsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProjectsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
