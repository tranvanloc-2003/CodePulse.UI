import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AsyncPipe, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { BlogpostServices } from '../services/blogpost.services';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AddBlogPostRequest } from '../models/add-blog-post-request';
import { MarkdownModule } from 'ngx-markdown';
import { CategoryService } from '../../category/services/category.service';
import { CategoryModels } from '../../category/models/category.model';
import { ImageSelector } from "../../../shared/components/image-selector/image-selector";
import { ImageServices } from '../../../shared/components/image-selector/services/image.services';

@Component({
  selector: 'app-add-blog-post',
  imports: [FormsModule, DatePipe, MarkdownModule, NgIf, AsyncPipe, NgFor, ImageSelector, NgClass],
  templateUrl: './add-blog-post.html',
  styleUrl: './add-blog-post.css'
})
export class AddBlogPost implements OnInit, OnDestroy {
  model: AddBlogPostRequest;
  categories$?: Observable<CategoryModels[]>;
  isImageSelectorVisible: boolean = false;
  imageSelectSubscription?: Subscription;
  constructor(private blogpostServices: BlogpostServices, private router: Router, private categoryServices: CategoryService, private imageServices: ImageServices) {
    this.model = {
      title: '',
      shortDescription: '',
      content: '',
      urlHandle: '',
      featuredImageUrl: '',
      dateCreate: new Date(),
      author: '',
      Isvisible: true,
      categories: []
    }
  }

  onFormSubmit(): void {
    console.log(this.model);
    this.blogpostServices.addBlogPost(this.model).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/blogposts');
      }
    })
  }
  //mo image selector
  openImageSelector(): void {
    this.isImageSelectorVisible = true;
  }
  closeImageSelector(): void {
    this.isImageSelectorVisible = false;
  }
  ngOnInit(): void {
    this.categories$ = this.categoryServices.getAllCategory();
    this.imageSelectSubscription = this.imageServices.onSelectImage().subscribe({
      next: (image) => {
        this.model.featuredImageUrl = image.url;
        this.isImageSelectorVisible = false;
      }
    });
  }
  ngOnDestroy(): void {
    this.imageSelectSubscription?.unsubscribe();
  }

}
