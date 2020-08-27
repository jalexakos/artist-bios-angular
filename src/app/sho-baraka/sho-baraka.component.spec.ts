import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoBarakaComponent } from './sho-baraka.component';

describe('ShoBarakaComponent', () => {
  let component: ShoBarakaComponent;
  let fixture: ComponentFixture<ShoBarakaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoBarakaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoBarakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
