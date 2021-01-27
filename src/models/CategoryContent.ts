import Model from "./Model";
import { PageCategory } from "./PageCategory";

export interface CategoryContent extends Model {
  title: string;
  Categories: PageCategory[];
}
