interface children {
  title: string;
  path: string;
  icon: string;
}

interface Category {
  id: string;
  title: string;
  path: string;
  children: children[];
}

export default Category;
