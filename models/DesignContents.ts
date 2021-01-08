import Model from "./Model";
import Post from "./Post";

export interface CategoryContent extends Model {
  title: string;
  Categories: PageCategory[];
}

export interface PageCategory {
  fieldId: string;
  categoryName: string;
  enTitle: string;
  jaTitle: string;
  icon: { url: string };
  postsType: Array<string>;
  posts: Post[];
}
