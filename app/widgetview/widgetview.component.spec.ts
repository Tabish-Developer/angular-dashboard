import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetviewComponent } from './widgetview.component';

describe('WidgetviewComponent', () => {
  let component: WidgetviewComponent;
  let fixture: ComponentFixture<WidgetviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
