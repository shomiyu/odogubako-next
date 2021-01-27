import Model from "./Model";

interface NewsContent {
  fieldId: string;
  title: string;
  details: string;
  linkName: string;
  url: string;
}

interface News extends Model {
  date: string;
  newsContent: NewsContent[];
}

export default News;
