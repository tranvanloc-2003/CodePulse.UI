import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { CategoryModels } from '../models/category.model';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdateCategoryRequest } from '../models/update-category-request';

@Component({
  selector: 'app-edit-category',
  imports: [NgIf, FormsModule],
  templateUrl: './edit-category.html',
  styleUrl: './edit-category.css'
})
export class EditCategory implements OnInit, OnDestroy {
  id: string | null = null;
  paramSubscription?: Subscription;
  category?: CategoryModels;
  constructor(private route: ActivatedRoute, private categoryServices: CategoryService, private router: Router) {

  }

  ngOnInit(): void {
    this.paramSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get("id");

        if (this.id) {//neu id khong null
          //lay data nhu name ,... tu api cho id danh muc
          this.categoryServices.getCategoryById(this.id).subscribe({
            next: (response) => {
              this.category = response;
            }
          });
        }

      }

    });
  }
  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
  }
  onFormSubmit(): void {
    // console.log(this.category);
    const updateCategoryRequest: UpdateCategoryRequest = {
      name: this.category?.name ?? '',
      urlHandle: this.category?.urlHandle ?? ''
    };
    // chuyển object này cho service
    if (this.id) {
      this.categoryServices.updateCategory(this.id, updateCategoryRequest).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/categories');
        }
      });
    }

  }
}
