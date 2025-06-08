import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogPost } from './add-blog-post';

describe('AddBlogPost', () => {
  let component: AddBlogPost;
  let fixture: ComponentFixture<AddBlogPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBlogPost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBlogPost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
