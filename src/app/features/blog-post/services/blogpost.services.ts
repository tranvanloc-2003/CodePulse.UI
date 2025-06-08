import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddBlogPost } from '../add-blog-post/add-blog-post';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AddBlogPostRequest } from '../models/add-blog-post-request';

@Injectable({
  providedIn: 'root'
})
export class BlogpostServices {

  constructor(private http: HttpClient) { }
  addBlogPost(model: AddBlogPostRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/BlogPost`, model);
  }
}
