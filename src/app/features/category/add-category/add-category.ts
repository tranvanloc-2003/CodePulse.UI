import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddCategoryRequest } from '../models/add-category-request-models';

@Component({
  selector: 'app-add-category',
  imports: [FormsModule],
  templateUrl: './add-category.html',
  styleUrl: './add-category.css'
})
export class AddCategory {
  model: AddCategoryRequest;
  constructor() {
    this.model = {
      name: '',
      urlHandle: ''
    };
  }

  onFormSubmit() {
// console.log(this.model);//check form
  }
}
