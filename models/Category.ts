import Model from "./Model";

interface Category extends Model {
  date: string;
  title: string;
  path: string;
  children: children[];
}

interface children {
  fieldId: string;
  title: string;
  path: string;
  icon: { url: string };
}

export default Category;
