import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCategoryRequest } from '../models/add-category-request-models';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {


  }

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.http.post<void>(`https://localhost:7153/api/categories`,model);
  }
}
