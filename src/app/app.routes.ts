import { Routes } from '@angular/router';
import { CategoryList } from './features/category/category-list/category-list';

export const routes: Routes = [
//them duong dan link category list
{
    path:'admin/categories',
    component: CategoryList
}

];
