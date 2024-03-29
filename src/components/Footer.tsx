import React from "react";
import Link from "next/link";
import style from "./Footer.module.scss";
import { MENU } from "../utils/ConstantUtils";

const Footer: React.FC = () => {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.footer__container}>
          <p className={style.footer__logo}>
            <img src="/images/logo_w.svg" alt="お道具箱" />
          </p>
          <nav className={style.sitemap}>
            <h2 className="visuallyHidden">サイトマップ</h2>
            <div className={style.sitemap__inner}>
              {MENU.map((category) => (
                <section className={style.sitemap__item} key={category.id}>
                  <h3 className={style.sitemap__title}>{category.title}</h3>
                  <ul className={style.sitemapList}>
                    {category.children.map((item, index) => (
                      <li key={index}>
                        <Link href={`/${category.path}/${item.path}`}>
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
                <a
                  href="https://twitter.com/MykiiTech"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="visuallyHidden">
                    著作者のtwitterアカウントへ移動する
                  </span>
                  <figure className={style.sns__icon}>
                    <img src="/icons/icon-twitter.svg" alt="twitter" />
                  </figure>
                </a>
              </li>
            </ul>
          </div>
          {/* <ul className={style.secondaryNavi}>
            <li className={style.secondaryNavi__item}>
              <Link href="/">
                <a>お道具箱について</a>
              </Link>
            </li>
          </ul> */}
          <p className={style.copywrite}>
            <small>
              &copy;2019{" "}
              <a href="https://twitter.com/MykiiTech">お道具箱 for Web</a>
            </small>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
