import React from "react";
import Link from "next/link";
import style from "./Header.module.scss";
import { MENU } from "../utils/ConstantUtils";

interface Props {
  currentPage: string;
}

const Header: React.FC<Props> = (props: Props) => {
  const { currentPage } = props;

  return (
    <header>
      {currentPage === "home" ? (
        // TOP
        <div className={style.hero}>
          <h1 className={style.hero__inner}>
            <em className={style.hero__copy}>
              デザインとコーディングを効率化する
            </em>
            <span className={style.hero__title}>
              <img src="/images/logo_b.svg" alt="お道具箱" />
              <span className="visuallyHidden">お道具箱</span>
            </span>
            <span className={style.hero__subTitle}>for shomiyu</span>
          </h1>
        </div>
      ) : (
        // /* 下層 */
        <div className={style.heroChild}>
          <p className={style.heroChild__inner}>
            <span className={style.heroChild__title}>{currentPage}</span>
          </p>
        </div>
      )}

      {/* グローバルナビ */}
      <nav className={style.globalNav}>
        <h2 className="visuallyHidden">グローバルナビゲーション</h2>
        <p className={style.globalNav__title}>
          <Link href="/">
            <a>
              <img src="/images/logo_w.svg" alt="お道具箱" />
              <span className={style.globalNav__subTitle}>for shomiyu</span>
            </a>
          </Link>
        </p>
        <div className={style.menu}>
          <ul className={style.menu__inner}>
            {MENU.map((category) => (
              <li className={style.menu__list} key={category.id}>
                <Link href={`/${category.path}/${category.children[0]?.path}`}>
                  <a>{category.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
