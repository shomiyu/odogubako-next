import React from "react";
import { DesignCategory } from "../../models/DesignContents";
import CardItemList from "./CardItemList";
import style from "./TabPanel.module.scss";

interface Props {
  childTabs: DesignCategory[];
  category: DesignCategory;
  tabIndex: number;
  onClickCategory: (index: number) => void;
}

const TabPanel: React.FC<Props> = (props: Props) => {
  const { childTabs, category, tabIndex, onClickCategory } = props;
  console.log(category);

  const handleClickCategory = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { index } = e.currentTarget.dataset;
    if (typeof index === "undefined") return;

    onClickCategory(Number.parseInt(index, 10));
  };

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
                category.categoryName === item.categoryName
                  ? style.isActive
                  : ""
              }`}
              role="tab"
              aria-controls={"tabPanel-" + titleKey}
              aria-selected={category.categoryName === item.categoryName}
              onClick={handleClickCategory}
            >
              {item.categoryName}
            </button>
          ))}
        </div>
      )}

      <section
        id={childTabs.length >= 2 ? "tabPanel-" + tabIndex : ""}
        role="tabpanel"
      >
        <div className={style.title}>
          <h1 className={style.title__main} lang="en">
            {category.enTitle}
            <b className={style.title__ja} lang="ja">
              {category.jaTitle}
            </b>
          </h1>
          <div className={style.title__icon}>
            <img src={category.icon.url} alt={category.enTitle} />
          </div>
        </div>

        <section>
          <h2 className="visuallyHidden">リンク先一覧</h2>
          <CardItemList posts={category.posts} />
        </section>
      </section>
    </>
  );
};

export default TabPanel;
