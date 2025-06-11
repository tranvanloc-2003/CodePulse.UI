import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddBlogPost } from '../add-blog-post/add-blog-post';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AddBlogPostRequest } from '../models/add-blog-post-request';
import { BlogPost } from '../models/blog-post-models';

@Injectable({
  providedIn: 'root'
})
export class BlogpostServices {

  constructor(private http: HttpClient) { }
  addBlogPost(data: AddBlogPostRequest): Observable<BlogPost> {
    return this.http.post<BlogPost>(`${environment.apiBaseUrl}/api/BlogPost`, data);
  }
  getAllBlogPost():Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(`${environment.apiBaseUrl}/api/BlogPost`)
  }
  getBlogPostById(id:string):Observable<BlogPost>{
    return this.http.get<BlogPost>(`${environment.apiBaseUrl}/pi/blogpost/${id}`);
  }
}
