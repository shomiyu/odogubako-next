import React from "react";
import style from "./CategoryContent.module.scss";
import { CategoryContent } from "../models/CategoryContent";
import CategoryContentPanel from "./CategoryContentPanel";
import CategoryContentTabList from "./CategoryContentTabList";
import ArrayList from "../models/ArrayList";
import CategoryContentPanelTagList from "./CategoryContentPanelTagList";

interface Props {
  contents: ArrayList<CategoryContent>;
  content: CategoryContent;
  tabId: string;
  categoryName: string;
  copyIndex?: number | null;
  onChangeTabId: (tabId: string) => void;
  onChangeCopyIndex?: (copyIndex: number | null) => void;
}

const CategoryContentComponent: React.FC<Props> = (props: Props) => {
  const {
    contents,
    content,
    tabId,
    categoryName,
    copyIndex,
    onChangeTabId,
    onChangeCopyIndex,
  } = props;

  return (
    <>
      <div id="contents" className={style.target}>
        <div className={style.tabWrapper}>
          <CategoryContentTabList contents={contents} />
        </div>

        <div className={style.content}>
          {content.Categories.length >= 2 && (
            <CategoryContentPanelTagList
              childTabs={content.Categories}
              tabId={tabId}
              onChangeTabId={onChangeTabId}
            />
          )}
          <CategoryContentPanel
            childTabs={content.Categories}
            tabId={tabId}
            categoryName={categoryName + "-" + content.id}
            copyIndex={copyIndex}
            onChangeTabId={onChangeTabId}
            onChangeCopyIndex={onChangeCopyIndex}
          />
        </div>
      </div>
    </>
  );
};

export default CategoryContentComponent;
