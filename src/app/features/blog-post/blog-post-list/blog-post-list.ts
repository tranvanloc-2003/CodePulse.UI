import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-post-list',
  imports: [RouterLink,FormsModule],
  templateUrl: './blog-post-list.html',
  styleUrl: './blog-post-list.css'
})
export class BlogPostList {

}
