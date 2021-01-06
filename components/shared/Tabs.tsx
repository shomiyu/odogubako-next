import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import style from "./Tabs.module.scss";

interface Props {
  tabItems: tabItem[];
}

interface tabItem {
  title: string;
  path: string;
}

const Tabs: React.FC<Props> = (props: Props) => {
  const { tabItems } = props;

  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <ul className={style.tab}>
      {tabItems.map((item, index) => (
        <li
          className={`${String(style.tab__item)} ${String(
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

export default Tabs;
