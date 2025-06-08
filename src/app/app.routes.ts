import { Routes } from '@angular/router';
import { CategoryList } from './features/category/category-list/category-list';
import { AddCategory } from './features/category/add-category/add-category';
import { EditCategory } from './features/category/edit-category/edit-category';
import { AddBlogPost } from './features/blog-post/add-blog-post/add-blog-post';
import { BlogPostList } from './features/blog-post/blog-post-list/blog-post-list';

export const routes: Routes = [
  // Existing category list route
  {
    path: 'admin/categories',
    component: CategoryList
  },
  // Corrected Add Category route to match routerLink
  {
    path: 'admin/categories/add', // Changed from 'add-category' to 'add'
    component: AddCategory
  },
  {
    path: 'admin/categories/:id',
    component: EditCategory
  },
  {
    path: 'admin/blogposts',
    component: BlogPostList
  },
  {
    path: 'admin/blogposts/add',
    component: AddBlogPost
  }
];