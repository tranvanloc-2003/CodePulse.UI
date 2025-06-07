import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { CategoryModels } from '../models/category.model';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  imports: [NgIf,FormsModule],
  templateUrl: './edit-category.html',
  styleUrl: './edit-category.css'
})
export class EditCategory implements OnInit, OnDestroy {
  id: string | null = null;
  paramSubscription?: Subscription;
  category?: CategoryModels;
  constructor(private router: ActivatedRoute, private categoryServices: CategoryService) {

  }

  ngOnInit(): void {
    this.paramSubscription = this.router.paramMap.subscribe({
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
  onFormSubmit(){
    console.log(this.category);
  }
}
