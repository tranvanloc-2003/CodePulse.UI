import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { BlogpostServices } from '../services/blogpost.services';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AddBlogPostRequest } from '../models/add-blog-post-request';
import { MarkdownModule } from 'ngx-markdown';
import { CategoryService } from '../../category/services/category.service';
import { CategoryModels } from '../../category/models/category.model';

@Component({
  selector: 'app-add-blog-post',
  imports: [FormsModule, DatePipe, MarkdownModule, NgIf, AsyncPipe,NgFor],
  templateUrl: './add-blog-post.html',
  styleUrl: './add-blog-post.css'
})
export class AddBlogPost implements OnInit {
  model: AddBlogPostRequest;
  categories$?: Observable<CategoryModels[]>;
  
  constructor(private blogpostServices: BlogpostServices, private router: Router, private categoryServices: CategoryService) {
    this.model = {
      title: '',
      shortDescription: '',
      content: '',
      urlHandle: '',
      featuredImageUrl: '',
      publishedDate: new Date(),
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

  ngOnInit(): void {
    this.categories$ = this.categoryServices.getAllCategory();
  }
}
