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
  // eslint-disable-next-line camelcase
  code_2: string;
}

export default Post;
