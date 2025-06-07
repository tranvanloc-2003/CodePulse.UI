import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { CategoryModels } from '../models/category.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-category-list',
  imports: [RouterLink,NgIf,NgFor],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css'
})
export class CategoryList implements OnInit {
  constructor(private categoryService: CategoryService) {

  }
  categories?: CategoryModels[];
  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe({
      next: (response) => {
        this.categories = response;
      },
      error: (err) => {

      },
    });
  }
}
