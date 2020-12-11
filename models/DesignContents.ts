import Model from "./Model";
import Post from "./Post";

interface DesignContent extends Model {
  title: string;
  Categories: DesignCategory[];
}

interface DesignCategory {
  fieldId: string;
  categoryName: string;
  enTitle: string;
  jaTitle: string;
  icon: { url: string };
  postsType: Array<string>;
  posts: Post[];
}

export default DesignContent;
