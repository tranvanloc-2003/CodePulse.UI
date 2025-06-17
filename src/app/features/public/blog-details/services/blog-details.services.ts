import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../../../blog-post/models/blog-post-models';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogDetailsServices {

  constructor(private http: HttpClient) { }

  getBlogPostByUrlHandle(urlHandle:string):Observable<BlogPost>{
    return this.http.get<BlogPost>(`${environment.apiBaseUrl}/api/blogposts/${urlHandle}`);
  }
}
