import React, { useCallback } from "react";
import { PageCategory } from "../../models/DesignContents";
import CardItemList from "./CardItemList";
import style from "./TabPanel.module.scss";

interface Props {
  childTabs: PageCategory[];
  tabId: string;
  onChangeTabId: (tabId: string) => void;
}

const TabPanel: React.FC<Props> = (props: Props) => {
  const { childTabs, tabId, onChangeTabId } = props;

  const handleChangeTabId = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const element = e.currentTarget;
      const tabId = element.getAttribute("aria-controls") ?? "";

      onChangeTabId(tabId);
    },
    []
  );

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
                tabId === "tabPanel-" + titleKey ? style.isActive : ""
              }`}
              role="tab"
              aria-controls={"tabPanel-" + titleKey}
              aria-selected={tabId === "tabPanel-" + titleKey}
              onClick={handleChangeTabId}
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
          aria-hidden={tabId !== "tabPanel-" + index}
          className={`${style.childTab} ${
            tabId === "tabPanel-" + index ? style.isShow : ""
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
