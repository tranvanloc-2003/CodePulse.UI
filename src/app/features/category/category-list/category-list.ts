import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { CategoryModels } from '../models/category.model';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  imports: [RouterLink,NgIf,NgFor,CommonModule],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css'
})
export class CategoryList implements OnInit {
  categories$?: Observable<CategoryModels[]>;
  constructor(private categoryService: CategoryService) {

  }
  categories?: CategoryModels[];
  ngOnInit(): void {
   this.categories$ =  this.categoryService.getAllCategory();
  }
}
