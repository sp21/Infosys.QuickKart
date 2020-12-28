import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerlayoutComponent } from './customerlayout.component';

describe('CustomerlayoutComponent', () => {
  let component: CustomerlayoutComponent;
  let fixture: ComponentFixture<CustomerlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
