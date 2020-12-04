import Link from "next/link";
import React from "react";
import style from "./Tab.module.scss";
import { useRouter } from "next/router";
import DesignContents from "../../models/DesignContents";

interface Props {
  header: tabItem[];
  body: DesignContents;
}

interface tabItem {
  title: string;
  path: string;
}

const Tab = (props: Props) => {
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
          <div className="p-tab__inner is-active-tabBody">
            <section>
              <h2 className={style.title} lang="en">
                color
                <small className={style.title__ja} lang="ja">
                  カラーツール
                </small>
              </h2>
              <div className={style.hogeWrap}>
                <p className={style.hoge}>コンテンツ</p>
                <p className={style.hoge}>コンテンツ</p>
                <p className={style.hoge}>コンテンツ</p>
                <p className={style.hoge}>コンテンツ</p>
                <p className={style.hoge}>コンテンツ</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab;
