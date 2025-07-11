import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCategoryRequest } from '../models/add-category-request-models';
import { HttpClient } from '@angular/common/http';
import { CategoryModels } from '../models/category.model';
import { environment } from '../../../../environments/environment';
import { UpdateCategoryRequest } from '../models/update-category-request';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private cookieServices: CookieService) {


  }

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/categories?AddAuth=true`, model,);
  }
  //categoryModels[] lay theo mang
  getAllCategory(): Observable<CategoryModels[]> {
    return this.http.get<CategoryModels[]>(`${environment.apiBaseUrl}/api/Categories`);
  }

  //lay danh muc theo id
  getCategoryById(id: string): Observable<CategoryModels> {
    return this.http.get<CategoryModels>(`${environment.apiBaseUrl}/api/Categories/${id}`);
  }
  updateCategory(id: string, updateCategoryRequest: UpdateCategoryRequest): Observable<CategoryModels> {
    return this.http.put<CategoryModels>(`${environment.apiBaseUrl}/api/categories/${id}?AddAuth=true`, updateCategoryRequest

      
    );
  }
  deleteCategory(id: string): Observable<CategoryModels> {
    return this.http.delete<CategoryModels>(`${environment.apiBaseUrl}/api/categories/${id}?AddAuth=true`,

      
    );
  }
}
