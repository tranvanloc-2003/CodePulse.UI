import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCategoryRequest } from '../models/add-category-request-models';
import { HttpClient } from '@angular/common/http';
import { CategoryModels } from '../models/category.model';
import { environment } from '../../../../environments/environment';
import { UpdateCategoryRequest } from '../models/update-category-request';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {


  }

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/categories`, model);
  }
  //categoryModels[] lay theo mang
  getAllCategory(): Observable<CategoryModels[]> {
   return this.http.get<CategoryModels[]>(`${environment.apiBaseUrl}/api/Categories`);
  }

  //lay danh muc theo id
  getCategoryById(id: string):Observable<CategoryModels>{
    return this.http.get<CategoryModels>(`${environment.apiBaseUrl}/api/Categories/${id}`);
  }
  updateCategory(id:string, updateCategoryRequest: UpdateCategoryRequest):Observable<CategoryModels>{
    return this.http.put<CategoryModels>(`${environment.apiBaseUrl}/api/categories/${id}`,updateCategoryRequest);
  }
}
