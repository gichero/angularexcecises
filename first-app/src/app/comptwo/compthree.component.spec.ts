/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompthreeComponent } from './compthree.component';

describe('CompthreeComponent', () => {
  let component: CompthreeComponent;
  let fixture: ComponentFixture<CompthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
