import React from "react";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={style.hero}>
        <h1 className={style.hero__inner}>
          <em className={style.hero__copy}>
            デザインとコーディングを効率化する
          </em>
          <span className={style.hero__title}>
            <img src="/logo_b.svg" alt="お道具箱" />
            <span className={style.visuallyHidden}>お道具箱</span>
          </span>
          <span className={style.hero__subTitle}>for shomiyu</span>
        </h1>
      </div>

      <nav className={style.globalNav}>
        <h2 className={style.visuallyHidden}>グローバルナビゲーション</h2>
        <p className={style.globalNav__title}>
          <a href="/">
            <img src="/logo_w.svg" alt="お道具箱" />
            <span className={style.globalNav__subTitle}>for shomiyu</span>
          </a>
        </p>
        <div className={style.menu}>
          <ul className={style.menu__inner}>
            <li className={style.menu__list}>
              <a href="#">デザイン</a>
            </li>
            <li className={style.menu__list}>
              <a href="#">コーディング</a>
            </li>
            <li className={style.menu__list}>
              <a href="#">インフラ</a>
            </li>
            <li className={style.menu__list}>
              <a href="#">その他</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
