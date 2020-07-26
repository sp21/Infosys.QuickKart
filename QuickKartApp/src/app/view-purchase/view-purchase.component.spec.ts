import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPurchaseComponent } from './view-purchase.component';

describe('ViewPurchaseComponent', () => {
  let component: ViewPurchaseComponent;
  let fixture: ComponentFixture<ViewPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
