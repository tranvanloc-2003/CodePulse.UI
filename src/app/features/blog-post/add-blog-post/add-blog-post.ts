import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { BlogpostServices } from '../services/blogpost.services';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AddBlogPostRequest } from '../models/add-blog-post-request';

@Component({
  selector: 'app-add-blog-post',
  imports: [FormsModule, DatePipe],
  templateUrl: './add-blog-post.html',
  styleUrl: './add-blog-post.css'
})
export class AddBlogPost implements OnDestroy {
  model: AddBlogPostRequest;
  private addBlogPostSubscrition?: Subscription;
  constructor(private blogpostServices: BlogpostServices,private router: Router) {
    this.model = {
      title: '',
      shortDescription: '',
      content: '',
      urlHandle: '',
      featuredImageUrl: '',
      publishedDate: new Date(),
      author: '',
      Isvisible: true
    }
  }
  onFormSubmit(): void {
    console.log(this.model);
    this.addBlogPostSubscrition = this.blogpostServices.addBlogPost(this.model).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/blogposts');
      }
    })
  }

  ngOnDestroy(): void {
    this.addBlogPostSubscrition?.unsubscribe();
  }
}
