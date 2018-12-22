import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatPage } from './format.page';

describe('FormatPage', () => {
  let component: FormatPage;
  let fixture: ComponentFixture<FormatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
