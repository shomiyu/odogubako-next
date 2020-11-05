import React from "react";
import Link from "next/link";
import style from "./Footer.module.scss";
import Categories from "../../models/Categories";
import ArrayList from "../../models/ArrayList";

interface Props {
  footerProps: ArrayList<Categories>;
}

const Footer: React.FC<Props> = (props: Props) => {
  const { footerProps } = props;

  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <p>{footerProps}</p>
        <p className={style.footer__logo}>
          <img src="/logo_w.svg" alt="お道具箱" />
          <span className={style.footer__subTitle}>for shomiyu</span>
        </p>
        <nav className={style.sitemap}>
          <h2 className={style.visuallyHidden}>サイトマップ</h2>
          <div className={style.sitemap__inner}>
            <section className={style.sitemap__item}>
              <h3 className={style.sitemap__title}>デザイン</h3>
              <ul className={style.sitemapList}>
                <li>
                  <Link href="/">
                    <a>カラー</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>素材</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>フォント</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>ツール</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>参考</a>
                  </Link>
                </li>
              </ul>
            </section>
            <section className={style.sitemap__item}>
              <h3 className={style.sitemap__title}>コーディング</h3>
              <ul className={style.sitemapList}>
                <li>
                  <Link href="/">
                    <a>HTML</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>CSS</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Sass</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>CDN</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>ツール</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>参考</a>
                  </Link>
                </li>
              </ul>
            </section>
            <section className={style.sitemap__item}>
              <h3 className={style.sitemap__title}>デザイン</h3>
              <ul className={style.sitemapList}>
                <li>
                  <Link href="/">
                    <a>インフラ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>ツール</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>環境構築</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>管理</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>参考</a>
                  </Link>
                </li>
              </ul>
            </section>
            <section className={style.sitemap__item}>
              <h3 className={style.sitemap__title}>デザイン</h3>
              <ul className={style.sitemapList}>
                <li>
                  <Link href="/">
                    <a>その他</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>ブックマーク</a>
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </nav>
        <div className={style.sns}>
          <ul className={style.sns__list}>
            <li>
              <a href="https://twitter.com/MykiiTech" target="_blank">
                <span className={style.visuallyHidden}>
                  著作者のtwitterアカウントへ移動する
                </span>
                <figure className={style.sns__icon}>
                  <img src="/icon-twitter.svg" alt="twitter" />
                </figure>
              </a>
            </li>
          </ul>
        </div>

        <ul className={style.secondaryNavi}>
          <li className={style.secondaryNavi__item}>
            <Link href="/">
              <a>お道具箱について</a>
            </Link>
          </li>
        </ul>
        <p className={style.copywrite}>
          <small>
            &copy;2019{" "}
            <a href="https://twitter.com/MykiiTech">お道具箱 for shomiyu</a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
