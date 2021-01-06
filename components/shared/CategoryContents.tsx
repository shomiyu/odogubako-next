import React from "react";
import style from "./CategoryContents.module.scss";
import { CategoryContent, DesignCategory } from "../../models/DesignContents";
import TabChild from "./TabChild";
import Tabs from "./Tabs";

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

const CategoryContents: React.FC<Props> = (props: Props) => {
  const { tabItems, designContent, category, onClickCategory } = props;

  return (
    <>
      <div id="tabTarget">
        <div className={style.tabWrapper}>
          <Tabs tabItems={tabItems} />
        </div>

        <div className={style.content}>
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

export default CategoryContents;
