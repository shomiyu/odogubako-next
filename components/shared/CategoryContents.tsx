import React from "react";
import style from "./CategoryContents.module.scss";
import { CategoryContent, DesignCategory } from "../../models/DesignContents";
import TabPanel from "./TabPanel";
import TabList from "./TabList";

interface Props {
  tabItems: tabItem[];
  designContent: CategoryContent;
  tabState: string;
  onClickTab: (tabId: string) => void;
}

interface tabItem {
  title: string;
  path: string;
}

const CategoryContents: React.FC<Props> = (props: Props) => {
  const { tabItems, designContent, tabState, onClickTab } = props;

  return (
    <>
      <div id="tabTarget">
        <div className={style.tabWrapper}>
          <TabList tabItems={tabItems} />
        </div>

        <div className={style.content}>
          <TabPanel
            childTabs={designContent.Categories}
            tabState={tabState}
            onClickTab={onClickTab}
          />
        </div>
      </div>
    </>
  );
};

export default CategoryContents;
