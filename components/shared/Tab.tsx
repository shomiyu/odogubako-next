import Link from "next/link";
import React from "react";
import style from "./Tab.module.scss";
import { useRouter } from "next/router";
import DesignContents from "../../models/DesignContents";
import CardItem from "./CardItem";
import CardItemList from "./CardItemList";

interface Props {
  header: tabItem[];
  body: DesignContents;
}

interface tabItem {
  title: string;
  path: string;
}

const Tab: React.FC<Props> = (props: Props) => {
  const { header, body } = props;

  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <>
      <div id="tabTarget">
        <div className={style.headerWrapper}>
          <ul className={style.header}>
            {header.map((item, index) => (
              <li
                className={`${String(style.header__item)} ${String(
                  currentPath.includes(item.path) ? style.isActive : ""
                )}`}
                key={index}
              >
                <Link href={`${item.path}#tabTarget`}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={style.body}>
          {body.Categories.map((childCategory, index) => (
            <div className="" key={index}>
              <section>
                <div className={style.title}>
                  <h2 className={style.title__main} lang="en">
                    {childCategory.enTitle}
                    <small className={style.title__ja} lang="ja">
                      {childCategory.jaTitle}
                    </small>
                  </h2>
                  <figure className={style.title__icon}>
                    <img
                      src={childCategory.icon.url}
                      alt={childCategory.enTitle}
                    />
                  </figure>
                </div>

                <CardItemList posts={childCategory.posts} />
              </section>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tab;
