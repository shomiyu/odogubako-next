import React from "react";
import style from "./CategoryContents.module.scss";
import { CategoryContent } from "../../models/DesignContents";
import TabPanel from "./TabPanel";
import TabList from "./TabList";

interface Props {
  tabItems: tabItem[];
  content: CategoryContent;
  tabId: string;
  copyStatus: boolean;
  onChangeTabId: (tabId: string) => void;
  onChangeCopyStatus: (status: boolean) => void;
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
    copyStatus,
    onChangeTabId,
    onChangeCopyStatus,
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
            copyStatus={copyStatus}
            onChangeTabId={onChangeTabId}
            onChangeCopyStatus={onChangeCopyStatus}
          />
        </div>
      </div>
    </>
  );
};

export default CategoryContents;
