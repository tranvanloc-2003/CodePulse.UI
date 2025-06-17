import { Routes } from '@angular/router';
import { CategoryList } from './features/category/category-list/category-list';
import { AddCategory } from './features/category/add-category/add-category';
import { EditCategory } from './features/category/edit-category/edit-category';
import { AddBlogPost } from './features/blog-post/add-blog-post/add-blog-post';
import { BlogPostList } from './features/blog-post/blog-post-list/blog-post-list';
import { EditBlogPost } from './features/blog-post/edit-blog-post/edit-blog-post';
import { Home } from './features/public/home/home';
import { BlogDetails } from './features/public/blog-details/blog-details';

export const routes: Routes = [

  {
    path:'',
    component: Home
  },
  {path:'blog/:url',
    component: BlogDetails
  },
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
  },
  {
    path: 'admin/blogposts/:id',
    component: EditBlogPost
  }
];