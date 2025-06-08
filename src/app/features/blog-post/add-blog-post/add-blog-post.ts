import { Component, OnDestroy } from '@angular/core';
import { AddBlogPostModel } from '../models/add-blog-post-model';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-blog-post',
  imports: [FormsModule,DatePipe],
  templateUrl: './add-blog-post.html',
  styleUrl: './add-blog-post.css'
})
export class AddBlogPost implements OnDestroy {
  model: AddBlogPostModel;
  constructor() {
    this.model ={
      title: '',
      shortDescription:'',
      content:'',
      urlHandle:'',
      featuredImageUrl:'',
      publishedDate:new Date(),
      author:'',
      isInvisible: true
    }
   }
onFormSubmit():void{
  console.log(this.model);
}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
