import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogpostServices } from '../services/blogpost.services';
import { BlogPost } from '../models/blog-post-models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-blog-post',
  imports: [],
  templateUrl: './edit-blog-post.html',
  styleUrl: './edit-blog-post.css'
})
export class EditBlogPost implements OnInit,OnDestroy {
  id: string | null = null;
  blogPost?: BlogPost;
  routeBlogPostSubcription?: Subscription;
  constructor(private router: ActivatedRoute, private blogpostServices: BlogpostServices) { }



  ngOnInit(): void {
    this.router.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
        if (this.id) {
          this.blogpostServices.getBlogPostById(this.id).subscribe({
            next: (response) => {
              this.blogPost = response;
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
