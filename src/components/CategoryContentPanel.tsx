import React from "react";
import { PageCategory } from "../models/PageCategory";
import CategoryContentPanelCardList from "./CategoryContentPanelCardList";
import CategoryContentPanelCodeList from "./CategoryContentPanelCodeList";
import style from "./CategoryContentPanel.module.scss";

interface Props {
  childTabs: PageCategory[];
  tabId: string;
  copyIndex?: number | null;
  onChangeTabId: (tabId: string) => void;
  onChangeCopyIndex?: (copyIndex: number | null) => void;
}

const CategoryContentPanel: React.FC<Props> = (props: Props) => {
  const { childTabs, tabId, copyIndex, onChangeCopyIndex } = props;

  return (
    <>
      {childTabs.map((childTab, index) => (
        <section
          id={childTabs.length >= 2 ? `tabPanel-${index}` : ""}
          role="tabpanel"
          aria-hidden={tabId !== `tabPanel-${index}`}
          className={`${style.childTab} ${
            tabId === `tabPanel-${index}` ? style.isShow : ""
          }`}
          key={index}
        >
          <div className={style.title}>
            <h1 className={style.title__main} lang="en">
              {childTab.enTitle}
              <b className={style.title__ja} lang="ja">
                {childTab.jaTitle}
              </b>
            </h1>
            <div className={style.title__icon}>
              <img src={childTab.icon.url} alt={childTab.enTitle} />
            </div>
          </div>
          <section>
            <h2 className="visuallyHidden">リンク先一覧</h2>
            {childTab.postsType[0] === "cardList" && (
              <CategoryContentPanelCardList posts={childTab.posts} />
            )}
            {childTab.postsType[0] === "code" && (
              <CategoryContentPanelCodeList
                posts={childTab.posts}
                copyIndex={copyIndex}
                onChangeCopyIndex={onChangeCopyIndex}
              />
            )}
          </section>
        </section>
      ))}
    </>
  );
};

export default CategoryContentPanel;
