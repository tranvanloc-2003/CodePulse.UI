import { CategoryModels } from "../../category/models/category.model";

export interface BlogPost {
    id: string;
    title: string;
    shortDescription: string;
    content: string;
    urlHandle: string;
    featuredImageUrl: string;
    publishedDate: Date;
    author: string;
    isvisible: boolean;
    categories: CategoryModels[];
}