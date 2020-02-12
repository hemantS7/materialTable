import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutNavDemoComponent } from './rout-nav-demo.component';

describe('RoutNavDemoComponent', () => {
  let component: RoutNavDemoComponent;
  let fixture: ComponentFixture<RoutNavDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutNavDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutNavDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
