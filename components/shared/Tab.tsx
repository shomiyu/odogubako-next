import Link from "next/link";
import React from "react";
import style from "./Tab.module.scss";
import { useRouter } from "next/router";
import { CategoryContent, DesignCategory } from "../../models/DesignContents";
import TabChild from "./TabChild";

interface Props {
  tabItems: tabItem[];
  designContent: CategoryContent;
  category: DesignCategory;
  onClickCategory: (index: number) => void;
}

interface tabItem {
  title: string;
  path: string;
}

const Tab: React.FC<Props> = (props: Props) => {
  const { tabItems, designContent, category, onClickCategory } = props;

  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <>
      <div id="tabTarget">
        <div className={style.headerWrapper}>
          <ul className={style.header}>
            {tabItems.map((item, index) => (
              <li
                className={`${String(style.header__item)} ${String(
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
        </div>

        <div className={style.body}>
          <TabChild
            childTabs={designContent.Categories}
            category={category}
            onClickCategory={onClickCategory}
          />
        </div>
      </div>
    </>
  );
};

export default Tab;
