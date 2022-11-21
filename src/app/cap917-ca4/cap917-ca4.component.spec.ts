import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAP917CA4Component } from './cap917-ca4.component';

describe('CAP917CA4Component', () => {
  let component: CAP917CA4Component;
  let fixture: ComponentFixture<CAP917CA4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CAP917CA4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CAP917CA4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
