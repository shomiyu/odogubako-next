import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrayList from "../models/ArrayList";
import { CategoryContent } from "../models/CategoryContent";
import style from "./CategoryContentTabList.module.scss";

interface Props {
  contents: ArrayList<CategoryContent>;
}

const CategoryContentTabList: React.FC<Props> = (props: Props) => {
  const { contents } = props;

  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <ul className={style.list}>
      {contents.contents.map((content) => (
        <li
          className={`${String(style.list__item)} ${String(
            currentPath.includes(content.id) ? style.isActive : ""
          )}`}
          key={content.id}
        >
          <Link href={`${content.id}#contents`}>
            <a>{content.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryContentTabList;
