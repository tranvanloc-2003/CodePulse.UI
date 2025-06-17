import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogpostServices } from '../../blog-post/services/blogpost.services';
import { BlogPost } from '../../blog-post/models/blog-post-models';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-blog-details',
  imports: [CommonModule,MarkdownComponent],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css'
})
export class BlogDetails implements OnInit {
  url: string | null = null;
  blog$?: Observable<BlogPost>;
  constructor(private route: ActivatedRoute, private blogpostServices: BlogpostServices) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.url = params.get('url');
        if (this.url) {
          // Chuyển đổi url sang id nếu cần thiết
          this.blog$ = this.blogpostServices.getBlogPostById(this.url);
          this.blog$.forEach((blog) => {
            console.log(blog.dateCreate);
        })

      }
    }
    })
  }
}
