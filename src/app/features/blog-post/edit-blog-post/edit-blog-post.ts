import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogpostServices } from '../services/blogpost.services';
import { BlogPost } from '../models/blog-post-models';
import { Subscription } from 'rxjs';
import { FormsModule, NgModel } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { DatePipe, NgIf } from '@angular/common';
import { UpdateCategoryRequest } from '../models/update-blog-post-request';

@Component({
  selector: 'app-edit-blog-post',
  imports: [FormsModule, MarkdownModule, NgIf, DatePipe],
  templateUrl: './edit-blog-post.html',
  styleUrl: './edit-blog-post.css'
})
export class EditBlogPost implements OnInit, OnDestroy {
  id: string | null = null;
  model?: BlogPost;
  routeBlogPostSubcription?: Subscription;
  constructor(private route: ActivatedRoute, private blogpostServices: BlogpostServices, private router: Router) { }
  onFormSubmit(): void {
    // const updateCategoryRequest: UpdateCategoryRequest = {
    //   title: this.model?.title ?? '',
    //   shortDescription: this.model?.shortDescription ?? '',
    //   content: this.model?.content ?? '',
    //   urlHandle: this.model?.urlHandle ?? '',
    //   featuredImageUrl: this.model?.featuredImageUrl ?? '',
    //   publishedDate: this.model?.publishedDate ? new Date(this.model.publishedDate) : new Date(),
    //   author: this.model?.author ?? '',
    //   Isvisible: this.model?.isvisible ?? false,
    //   categories: this.model?.categories.map(category => category.id) ?? [],
    // };
    // if (this.id) {
    //   this.routeBlogPostSubcription = this.blogpostServices.updateBlogPost(this.id, updateCategoryRequest).subscribe({
    //     next: (response) => {
    //       this.router.navigateByUrl('/admin/blog-posts');
    //     },
    //     error: (error) => {
    //       console.error('Error updating blog post:', error);
    //     }
    //   })
    // }
  }


  ngOnInit(): void {
    this.routeBlogPostSubcription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
        if (this.id) {
          this.blogpostServices.getBlogPostById(this.id).subscribe({
            next: (response) => {
              this.model = response;
               console.log('Model loaded:', this.model);
            }
          })
        }
      }
    }
    )
  }
  ngOnDestroy(): void {
    this.routeBlogPostSubcription?.unsubscribe();
  }

}
