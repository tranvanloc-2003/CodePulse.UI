import { Routes } from '@angular/router';
import { CategoryList } from './features/category/category-list/category-list';
import { AddCategory } from './features/category/add-category/add-category';

export const routes: Routes = [
//them duong dan link category list
{
    path:'admin/categories',
    component: CategoryList


},
// them categories
{
    path:'admin/categories/add-categories',
    component: AddCategory
}


];
