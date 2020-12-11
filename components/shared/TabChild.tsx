import React from "react";
import DesignContents from "../../models/DesignContents";
import CardItemList from "./CardItemList";
import style from "./TabChild.module.scss";

interface Props {
  childTabs: DesignContents;
}

const TabChild: React.FC<Props> = (props: Props) => {
  const { childTabs } = props;

  return (
    <>
      {childTabs.Categories.length >= 2 && (
        <div className={style.header}>
          {childTabs.Categories.map((item, titleKey) => (
            <button
              type="button"
              key={titleKey}
              className={`${String(style.button)} ${String(style.isActive)}`}
              data-target={`${childTabs.id}-${titleKey}`}
            >
              {item.categoryName}
            </button>
          ))}
        </div>
      )}

      {childTabs.Categories.map((content, index) => (
        <div id={`${childTabs.id}-${index}`} key={index}>
          <section>
            <div className={style.title}>
              <h2 className={style.title__main} lang="en">
                {content.enTitle}
                <small className={style.title__ja} lang="ja">
                  {content.jaTitle}
                </small>
              </h2>
              <figure className={style.title__icon}>
                <img src={content.icon.url} alt={content.enTitle} />
              </figure>
            </div>

            <CardItemList posts={content.posts} />
          </section>
        </div>
      ))}
    </>
  );
};

export default TabChild;
