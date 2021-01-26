import React from "react";
import style from "./CategoryContents.module.scss";
import { CategoryContent } from "../../models/DesignContents";
import TabPanel from "./TabPanel";
import TabList from "./TabList";

interface Props {
  tabItems: tabItem[];
  content: CategoryContent;
  tabId: string;
  copyIndex?: number | null;
  onChangeTabId: (tabId: string) => void;
  onChangeCopyIndex?: (copyIndex: number | null) => void;
}

interface tabItem {
  title: string;
  path: string;
}

const CategoryContents: React.FC<Props> = (props: Props) => {
  const {
    tabItems,
    content,
    tabId,
    copyIndex,
    onChangeTabId,
    onChangeCopyIndex,
  } = props;

  return (
    <>
      <div id="contents" className={style.target}>
        <div className={style.tabWrapper}>
          <TabList tabItems={tabItems} />
        </div>

        <div className={style.content}>
          <TabPanel
            childTabs={content.Categories}
            tabId={tabId}
            copyIndex={copyIndex}
            onChangeTabId={onChangeTabId}
            onChangeCopyIndex={onChangeCopyIndex}
          />
        </div>
      </div>
    </>
  );
};

export default CategoryContents;
