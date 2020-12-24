import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Liste1Component } from './liste1.component';

describe('Liste1Component', () => {
  let component: Liste1Component;
  let fixture: ComponentFixture<Liste1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Liste1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Liste1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
