import Model from "./Model";

interface Category extends Model {
  title: string;
  path: string;
  children: children[];
}

interface children {
  title: string;
  path: string;
  icon: string;
}

export default Category;
