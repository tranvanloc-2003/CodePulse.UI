import { Component, OnInit } from '@angular/core';
import { BlogpostServices } from '../../blog-post/services/blogpost.services';
import { BlogPost } from '../../blog-post/models/blog-post-models';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule,RouterLink,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  blog$?: Observable<BlogPost[]>;
  constructor(private blogpostServices: BlogpostServices) { }
  ngOnInit(): void {
    this.blog$ = this.blogpostServices.getAllBlogPost();
  }
}
