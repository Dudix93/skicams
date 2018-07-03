import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkicamsComponent } from './skicams.component';

describe('SkicamsComponent', () => {
  let component: SkicamsComponent;
  let fixture: ComponentFixture<SkicamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkicamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkicamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
