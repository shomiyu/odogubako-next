import React from "react";
import { PageCategory } from "../models/PageCategory";
import CategoryContentPanelCardList from "./CategoryContentPanelCardList";
import CategoryContentPanelCodeList from "./CategoryContentPanelCodeList";
import style from "./CategoryContentPanel.module.scss";
import CategoryContentPanelMediaList from "./CategoryContentPanelMediaList";

interface Props {
  childTabs: PageCategory[];
  tabId: string;
  categoryName: string;
  copyIndex?: number | null;
  onChangeTabId: (tabId: string) => void;
  onChangeCopyIndex?: (copyIndex: number | null) => void;
}

const CategoryContentPanel: React.FC<Props> = (props: Props) => {
  const {
    childTabs,
    tabId,
    categoryName,
    copyIndex,
    onChangeCopyIndex,
  } = props;

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
              <CategoryContentPanelCardList
                categoryName={categoryName}
                posts={childTab.posts}
              />
            )}
            {childTab.postsType[0] === "code" && (
              <CategoryContentPanelCodeList
                posts={childTab.posts}
                tabId={tabId}
                copyIndex={copyIndex}
                onChangeCopyIndex={onChangeCopyIndex}
              />
            )}
            {childTab.postsType[0] === "thumbnail" && (
              <CategoryContentPanelMediaList
                categoryName={categoryName}
                posts={childTab.posts}
              />
            )}
          </section>
          {categoryName === "design-material" && (
            <div>
              <dl className={style.tagsDescription}>
                <dt className={style.tagsDescription__title}>
                  <p className={style.tags}>
                    <span>商用可</span>
                  </p>
                </dt>
                <dd className={style.tagsDescription__detail}>
                  商用利用可能なサイト
                </dd>
              </dl>
              <dl className={style.tagsDescription}>
                <dt className={style.tagsDescription__title}>
                  <p className={style.tags}>
                    <span className={style.red}>クレ要</span>
                  </p>
                </dt>
                <dd className={style.tagsDescription__detail}>
                  クレジット表記が必要なサイト
                </dd>
              </dl>
            </div>
          )}
        </section>
      ))}
    </>
  );
};

export default CategoryContentPanel;
