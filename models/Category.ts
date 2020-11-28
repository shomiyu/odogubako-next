interface Category {
  id: string;
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
