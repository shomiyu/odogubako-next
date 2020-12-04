import Link from "next/link";
import React from "react";
import style from "./Tab.module.scss"

const Tab = () => {
  return (
    <>
      <div id="tabTarget">
        <div className={style.headerWrapper}>
          <ul className={style.header}>
            <li className={`${style.isActive} ${style.header__item}`}>
              <Link href="/design/color/#tabTarget">
                <a>配色</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.body}>
          <div className="p-tab__inner is-active-tabBody">
            <section>
              <h2 className={style.title} lang="en">
                color
                <small className={style.title__ja} lang="ja">カラーツール</small>
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
}

export default Tab;
