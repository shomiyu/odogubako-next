import Post from "./Post";

export interface PageCategory {
  fieldId: string;
  categoryName: string;
  enTitle: string;
  jaTitle: string;
  icon: { url: string };
  postsType: Array<string>;
  posts: Post[];
}
