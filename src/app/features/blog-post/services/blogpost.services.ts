import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddBlogPost } from '../add-blog-post/add-blog-post';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AddBlogPostRequest } from '../models/add-blog-post-request';
import { BlogPost } from '../models/blog-post-models';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class BlogpostServices {

  constructor(private http: HttpClient, private cookiesServices: CookieService) { }
  addBlogPost(data: AddBlogPostRequest): Observable<BlogPost> {
    return this.http.post<BlogPost>(`${environment.apiBaseUrl}/api/BlogPost`, data);
  }
  getAllBlogPost():Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(`${environment.apiBaseUrl}/api/BlogPost`)
  }
  getBlogPostById(id:string):Observable<BlogPost>{
    return this.http.get<BlogPost>(`${environment.apiBaseUrl}/api/blogpost/${id}`);
  }
  updateBlogPost(id: string, data: AddBlogPostRequest): Observable<BlogPost> {
    return this.http.put<BlogPost>(`${environment.apiBaseUrl}/api/BlogPost/${id}`, data,

      {
        headers:{
          'Authorization': this.cookiesServices.get('Authorization')
        }
      }
    );
  }
  deleteBlogPost(id: string):Observable<BlogPost>{
    return this.http.delete<BlogPost>(`${environment.apiBaseUrl}/api/BlogPost/${id}`);
  }
}
