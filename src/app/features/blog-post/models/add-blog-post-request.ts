export interface AddBlogPostRequest {
    title: string;
    shortDescription: string;
    content: string;
    urlHandle: string;
    featuredImageUrl: string;
    dateCreate: Date;
    author: string;
    Isvisible: boolean;
    categories?: string[];
}