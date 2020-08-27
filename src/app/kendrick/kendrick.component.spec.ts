import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendrickComponent } from './kendrick.component';

describe('KendrickComponent', () => {
  let component: KendrickComponent;
  let fixture: ComponentFixture<KendrickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendrickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
