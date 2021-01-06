import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import style from "./TabList.module.scss";

interface Props {
  tabItems: tabItem[];
}

interface tabItem {
  title: string;
  path: string;
}

const TabList: React.FC<Props> = (props: Props) => {
  const { tabItems } = props;

  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <ul className={style.list}>
      {tabItems.map((item, index) => (
        <li
          className={`${String(style.list__item)} ${String(
            currentPath.includes(item.path) ? style.isActive : ""
          )}`}
          key={index}
        >
          <Link href={`${item.path}#tabTarget`}>
            <a>{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TabList;
