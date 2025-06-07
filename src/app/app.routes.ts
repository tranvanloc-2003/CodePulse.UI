import { Routes } from '@angular/router';
import { CategoryList } from './features/category/category-list/category-list';
import { AddCategory } from './features/category/add-category/add-category';
import { EditCategory } from './features/category/edit-category/edit-category';

export const routes: Routes = [
  // Existing category list route
  {
    path:'admin/categories',
    component: CategoryList
  },
  // Corrected Add Category route to match routerLink
  {
    path:'admin/categories/add', // Changed from 'add-category' to 'add'
    component: AddCategory
  },
  {
    path: 'admin/categories/:id',
    component: EditCategory
  }
];