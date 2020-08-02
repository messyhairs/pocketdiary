import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteitComponent } from './noteit.component';

describe('NoteitComponent', () => {
  let component: NoteitComponent;
  let fixture: ComponentFixture<NoteitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
