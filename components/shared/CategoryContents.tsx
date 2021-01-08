import React from "react";
import style from "./CategoryContents.module.scss";
import { CategoryContent } from "../../models/DesignContents";
import TabPanel from "./TabPanel";
import TabList from "./TabList";

interface Props {
  tabItems: tabItem[];
  designContent: CategoryContent;
  tabId: string;
  onChangeTabId: (tabId: string) => void;
}

interface tabItem {
  title: string;
  path: string;
}

const CategoryContents: React.FC<Props> = (props: Props) => {
  const { tabItems, designContent, tabId, onChangeTabId } = props;

  return (
    <>
      <div id="tabTarget">
        <div className={style.tabWrapper}>
          <TabList tabItems={tabItems} />
        </div>

        <div className={style.content}>
          <TabPanel
            childTabs={designContent.Categories}
            tabId={tabId}
            onChangeTabId={onChangeTabId}
          />
        </div>
      </div>
    </>
  );
};

export default CategoryContents;
