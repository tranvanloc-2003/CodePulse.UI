import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BlogpostServices } from '../services/blogpost.services';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post-models';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-blog-post-list',
  imports: [RouterLink, FormsModule,NgIf,CommonModule,NgFor],
  templateUrl: './blog-post-list.html',
  styleUrl: './blog-post-list.css'
})
export class BlogPostList implements OnInit {
  blogPost$?: Observable<BlogPost[]>;
  constructor(private blogpostServices: BlogpostServices) { }
  ngOnInit(): void {
    this.blogPost$ = this.blogpostServices.getAllBlogPost();
    this.blogPost$.subscribe(data => console.log(data)); // <- Log ra dữ liệu
  }

}
