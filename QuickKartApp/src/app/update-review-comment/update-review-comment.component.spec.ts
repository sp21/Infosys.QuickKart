import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReviewCommentComponent } from './update-review-comment.component';

describe('UpdateReviewCommentComponent', () => {
  let component: UpdateReviewCommentComponent;
  let fixture: ComponentFixture<UpdateReviewCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateReviewCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReviewCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
