import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpendiaryComponent } from './opendiary.component';

describe('OpendiaryComponent', () => {
  let component: OpendiaryComponent;
  let fixture: ComponentFixture<OpendiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpendiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpendiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
