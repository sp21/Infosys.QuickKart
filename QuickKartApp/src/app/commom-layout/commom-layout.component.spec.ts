import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommomLayoutComponent } from './commom-layout.component';

describe('CommomLayoutComponent', () => {
  let component: CommomLayoutComponent;
  let fixture: ComponentFixture<CommomLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommomLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommomLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
