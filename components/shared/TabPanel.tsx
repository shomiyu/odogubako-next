import React, { useCallback, useState } from "react";
import { DesignCategory } from "../../models/DesignContents";
import CardItemList from "./CardItemList";
import style from "./TabPanel.module.scss";

interface Props {
  childTabs: DesignCategory[];
  tabState: string;
  onClickTab: (tabId: string) => void;
}

const TabPanel: React.FC<Props> = (props: Props) => {
  const { childTabs, tabState, onClickTab } = props;

  const handleClickTab = useCallback((e) => {
    const element = e.currentTarget;
    const tabId = element.getAttribute("aria-controls");

    onClickTab(tabId);
  });

  return (
    <>
      {childTabs.length >= 2 && (
        <div className={style.header}>
          {childTabs.map((item, titleKey) => (
            <button
              type="button"
              key={titleKey}
              data-index={titleKey}
              className={`${style.button} ${
                tabState === "tabPanel-" + titleKey ? style.isActive : ""
              }`}
              role="tab"
              aria-controls={"tabPanel-" + titleKey}
              aria-selected={tabState === "tabPanel-" + titleKey}
              onClick={handleClickTab}
            >
              {item.categoryName}
            </button>
          ))}
        </div>
      )}

      {childTabs.map((childTab, index) => (
        <section
          id={childTabs.length >= 2 ? "tabPanel-" + index : ""}
          role="tabpanel"
          aria-hidden={tabState !== "tabPanel-" + index}
          className={`${style.childTab} ${
            tabState === "tabPanel-" + index ? style.isShow : ""
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
            <CardItemList posts={childTab.posts} />
          </section>
        </section>
      ))}
    </>
  );
};

export default TabPanel;
