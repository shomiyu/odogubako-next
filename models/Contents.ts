import Model from "./Model";

interface DesignContent extends Model {
  title: string;
  Categories: DesignCategory[];
}

interface DesignCategory {
  fieldId: string;
  categoryName: string;
  enTitle: string;
  jaTitle: string;
  icon: { url: string },
  postsType: Array<string>;
  posts: DesignPosts[];
}

interface DesignPosts {
  fieldId: string;
  title: string;
  url: string;
  externalLink: boolean;
  image: { url: string };
  alt: string;
  description: string;
  commercialUse: boolean;
  credit: boolean;
}

export default DesignContent;
