import { Routes } from '@angular/router';
import { CategoryList } from './features/category/category-list/category-list';
import { AddCategory } from './features/category/add-category/add-category';
import { EditCategory } from './features/category/edit-category/edit-category';
import { AddBlogPost } from './features/blog-post/add-blog-post/add-blog-post';
import { BlogPostList } from './features/blog-post/blog-post-list/blog-post-list';
import { EditBlogPost } from './features/blog-post/edit-blog-post/edit-blog-post';
import { Home } from './features/public/home/home';
import { BlogDetails } from './features/public/blog-details/blog-details';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { authGuard } from './features/auth/guard/auth-guard';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },
  {
    path: 'blog/:url',
    component: BlogDetails
  },
  // Existing category list route
  {
    path: 'admin/categories',
    component: CategoryList,
    canActivate: [authGuard] // Add any guards if needed
  },
  // Corrected Add Category route to match routerLink
  {
    path: 'admin/categories/add', // Changed from 'add-category' to 'add'
    component: AddCategory,
    canActivate: [authGuard] // Add any guards if needed
  },
  {
    path: 'admin/categories/:id',
    component: EditCategory,
    canActivate: [authGuard] // Add any guards if needed
  },
  {
    path: 'admin/blogposts',
    component: BlogPostList,
    canActivate: [authGuard] // Add any guards if needed
  },
  {
    path: 'admin/blogposts/add',
    component: AddBlogPost,
    canActivate: [authGuard] // Add any guards if needed
  },
  {
    path: 'admin/blogposts/:id',
    component: EditBlogPost,
    canActivate: [authGuard] // Add any guards if needed
  },
  //auth
  {
    path: 'auth/login',
    component: Login
  },
  {
    path: 'auth/register',
    component: Register
  },

];