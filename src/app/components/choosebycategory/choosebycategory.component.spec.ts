import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosebycategoryComponent } from './choosebycategory.component';

describe('ChoosebycategoryComponent', () => {
  let component: ChoosebycategoryComponent;
  let fixture: ComponentFixture<ChoosebycategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosebycategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosebycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
