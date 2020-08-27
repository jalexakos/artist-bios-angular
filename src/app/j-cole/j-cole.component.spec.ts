import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JColeComponent } from './j-cole.component';

describe('JColeComponent', () => {
  let component: JColeComponent;
  let fixture: ComponentFixture<JColeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JColeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JColeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
