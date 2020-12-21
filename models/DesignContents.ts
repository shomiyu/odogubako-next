import Model from "./Model";
import Post from "./Post";

export interface CategoryContent extends Model {
  title: string;
  Categories: DesignCategory[];
}

export interface DesignCategory {
  fieldId: string;
  categoryName: string;
  enTitle: string;
  jaTitle: string;
  icon: { url: string };
  postsType: Array<string>;
  posts: Post[];
}
