import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Router, RouterLinkActive } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { MarkdownComponent, MarkdownModule } from 'ngx-markdown';
import { authInterceptor } from './core/interceptors/auth-interceptor';
import { App } from './app';
import { Navbar } from './core/components/navbar/navbar';
import { CategoryList } from './features/category/category-list/category-list';
import { AddCategory } from './features/category/add-category/add-category';
import { EditCategory } from './features/category/edit-category/edit-category';
import { BlogDetails } from './features/public/blog-details/blog-details';
import { BlogPostList } from './features/blog-post/blog-post-list/blog-post-list';
import { AddBlogPost } from './features/blog-post/add-blog-post/add-blog-post';
import { EditBlogPost } from './features/blog-post/edit-blog-post/edit-blog-post';
import { ImageSelector } from './shared/components/image-selector/image-selector';
import { Home } from './features/public/home/home';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

export const appConfig: ApplicationConfig = {

  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])), // Sử dụng withInterceptors cho functional interceptor
    provideZoneChangeDetection({ eventCoalescing: true }),
    {
      provide: HTTP_INTERCEPTORS,
      useValue: authInterceptor,
      multi: true
    },
    HttpClient,
    App,
    Navbar,
    CategoryList,
    AddCategory,
    EditCategory,
    BlogDetails,
    BlogPostList,
    AddBlogPost,
    EditBlogPost,
    ImageSelector,
    Home,
    Login,
    Register,
    FormsModule,
    BrowserModule,
    Router,
    CommonModule
  ]
};
