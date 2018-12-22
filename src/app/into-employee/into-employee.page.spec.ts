import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoEmployeePage } from './into-employee.page';

describe('IntoEmployeePage', () => {
  let component: IntoEmployeePage;
  let fixture: ComponentFixture<IntoEmployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntoEmployeePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntoEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
