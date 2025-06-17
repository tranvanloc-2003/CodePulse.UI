import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogpostServices } from '../services/blogpost.services';
import { BlogPost } from '../models/blog-post-models';
import { Observable, Subscription } from 'rxjs';
import { FormsModule, NgModel } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { AsyncPipe, CommonModule, DatePipe, } from '@angular/common';
import { CategoryModels } from '../../category/models/category.model';
import { UpdateCategoryRequest } from '../../category/models/update-category-request';
import { UpdateBlogPostRequest } from '../models/update-blog-post-request';
import { CategoryService } from '../../category/services/category.service';
import { ImageSelector } from "../../../shared/components/image-selector/image-selector";
import { ImageServices } from '../../../shared/components/image-selector/services/image.services';

@Component({
  selector: 'app-edit-blog-post',
  imports: [FormsModule, MarkdownModule, DatePipe, AsyncPipe, ImageSelector, CommonModule],
  templateUrl: './edit-blog-post.html',
  styleUrl: './edit-blog-post.css'
})
export class EditBlogPost implements OnInit, OnDestroy {
  id: string | null = null;
  model?: BlogPost;
  routeBlogPostSubcription?: Subscription;
  categories$?: Observable<CategoryModels[]>;
  updateBlogPostSubscription?: Subscription;
  getBlogPostSubscription?: Subscription;
  deleteBlogPostSubscription?: Subscription;
  imageSelectSubscription?: Subscription;

  isImageSelectorVisible: boolean = false;
  selectedCategories?: string[];
  constructor(private route: ActivatedRoute, private blogpostServices: BlogpostServices, private router: Router, private categoriesServices: CategoryService, private imageServices: ImageServices) { }
  onFormSubmit(): void {
    //chuyen model thanh request object
    if (this.model && this.id) {
      var updateBlogPost: UpdateBlogPostRequest = {
        author: this.model.author,
        content: this.model.content,
        featuredImageUrl: this.model.featuredImageUrl,
        Isvisible: this.model.isvisible,
        dateCreate: this.model.dateCreate,
        shortDescription: this.model.shortDescription,
        title: this.model.title,
        urlHandle: this.model.urlHandle,
        categories: this.selectedCategories ?? []

      }
      this.updateBlogPostSubscription = this.blogpostServices.updateBlogPost(this.id, updateBlogPost).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/blogposts');
        }
      })
    }
  }

  onDelete(): void {
    // goi services va xoa blogpost
    if (this.id) {
      this.deleteBlogPostSubscription = this.blogpostServices.deleteBlogPost(this.id).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/blogposts');
        }
      })
    }
  }
  ngOnInit(): void {
    this.categories$ = this.categoriesServices.getAllCategory();
    this.routeBlogPostSubcription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
        if (this.id) {
          this.getBlogPostSubscription = this.blogpostServices.getBlogPostById(this.id).subscribe({
            next: (response) => {
              this.model = response;
              this.selectedCategories = response.categories.map(x => x.id);
            },
            error: (error) => {
              console.error('Error loading blog post:', error);
            }
          });
        }
        this.imageSelectSubscription = this.imageServices.onSelectImage().subscribe({
          next: (response) => {
            if (this.model) {
              this.model.featuredImageUrl = response.url;
              this.isImageSelectorVisible = false; // Close the image selector after selecting an image
            }
          }
        })
      }
    }
    )
  }
  ngOnDestroy(): void {
    this.routeBlogPostSubcription?.unsubscribe();
    this.updateBlogPostSubscription?.unsubscribe();
    this.getBlogPostSubscription?.unsubscribe();
    this.deleteBlogPostSubscription?.unsubscribe();
    this.imageSelectSubscription?.unsubscribe();
  }
  //mo image selector
  openImageSelector(): void {
    this.isImageSelectorVisible = true;
  }
  closeImageSelector(): void {
    this.isImageSelectorVisible = false;
  }
}
