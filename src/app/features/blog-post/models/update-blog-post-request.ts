export  interface UpdateCategoryRequest {
    title: string;
    shortDescription: string;
    content: string;
    urlHandle: string;
    featuredImageUrl: string;
    publishedDate: Date;
    author: string;
    Isvisible: boolean;
    categories?: string[];

}