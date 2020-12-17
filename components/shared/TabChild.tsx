import React from "react";
import { DesignContent, DesignCategory } from "../../models/DesignContents";
import CardItemList from "./CardItemList";
import style from "./TabChild.module.scss";

interface Props {
  childTabs: DesignContent;
  category: DesignCategory;
  onClickCategory: (index: number) => void;
}

const TabChild: React.FC<Props> = (props: Props) => {
  const { childTabs, category, onClickCategory } = props;

  const handleClickCategory = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { index } = e.currentTarget.dataset;
    if (typeof index === "undefined") return;

    onClickCategory(Number.parseInt(index, 10));
  };

  return (
    <>
      {childTabs.Categories.length >= 2 && (
        <div className={style.header}>
          {childTabs.Categories.map((item, titleKey) => (
            <button
              type="button"
              key={titleKey}
              data-index={titleKey}
              className={`${String(style.button)} ${String(
                category.categoryName === item.categoryName
                  ? style.isActive
                  : ""
              )}`}
              onClick={handleClickCategory}
            >
              {item.categoryName}
            </button>
          ))}
        </div>
      )}

      <section>
        <div className={style.title}>
          <h2 className={style.title__main} lang="en">
            {category.enTitle}
            <small className={style.title__ja} lang="ja">
              {category.jaTitle}
            </small>
          </h2>
          <figure className={style.title__icon}>
            <img src={category.icon.url} alt={category.enTitle} />
          </figure>
        </div>

        <CardItemList posts={category.posts} />
      </section>
    </>
  );
};

export default TabChild;
