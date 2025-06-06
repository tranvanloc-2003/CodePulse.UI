import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddCategoryRequest } from '../models/add-category-request-models';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './add-category.html',
  styleUrl: './add-category.css'
})
export class AddCategory implements OnDestroy {

  model: AddCategoryRequest;
  private addCategorySubscribtion?: Subscription
  constructor(private categoryService: CategoryService) {
    this.model = {
      name: '',
      urlHandle: ''
    };
  }


  onFormSubmit() {
    // console.log(this.model);//check form
    this.addCategorySubscribtion = this.categoryService.addCategory(this.model).subscribe({
      next: (response) => {
        console.log('Ket noi thanh cong');
      },
      error: (error) => {
        console.log('Ket noi that bai');
      }
    })

  }
  ngOnDestroy(): void {
    this.addCategorySubscribtion?.unsubscribe();
  }
}
