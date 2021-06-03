interface Post {
  fieldId: string;
  title: string;
  url?: string;
  externalLink: boolean;
  image?: { url: string };
  alt?: string;
  description?: string;
  commercialUse: boolean;
  credit: boolean;
  code?: string;
  lang?: string;
}

export default Post;
