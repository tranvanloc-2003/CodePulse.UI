export interface AddBlogPostModel {
    title: string;
    shortDescription: string;
    content: string;
    urlHandle: string;
    featuredImageUrl: string;
    publishedDate: Date;
    author: string;
    isInvisible: boolean;
}