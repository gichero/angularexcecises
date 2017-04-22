/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompfourComponent } from './compfour.component';

describe('CompfourComponent', () => {
  let component: CompfourComponent;
  let fixture: ComponentFixture<CompfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
