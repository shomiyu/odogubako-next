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
        <p className={style.footer__logo}>
          <img src="/logo_w.svg" alt="お道具箱" />
          <span className={style.footer__subTitle}>for shomiyu</span>
        </p>
        <nav className={style.sitemap}>
          <h2 className={style.visuallyHidden}>サイトマップ</h2>
          <div className={style.sitemap__inner}>
            {footerProps.contents.map((category, index) => (
              <section className={style.sitemap__item} key={index}>
                <h3 className={style.sitemap__title}>{category.title}</h3>
                <ul className={style.sitemapList}>
                  {category.children.map((item, childIndex) => (
                    <li key={childIndex}>
                      <Link href={{ pathname: item.path }}>
                        <a>{item.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
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
