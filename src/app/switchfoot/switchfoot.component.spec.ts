import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchfootComponent } from './switchfoot.component';

describe('SwitchfootComponent', () => {
  let component: SwitchfootComponent;
  let fixture: ComponentFixture<SwitchfootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchfootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
