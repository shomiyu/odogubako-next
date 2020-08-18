import Model from "./Model";

interface News extends Model {
  date: string;
  newsContent: NewsContent[];
}

interface NewsContent {
  fieldId: string;
  title: string;
  details: string;
  linkName: string;
  url: string;
}

export default News;
