import style from "./index.module.scss";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import * as React from "react";
import ArrayList from "../../models/ArrayList";
import News from "../../models/News";
import DevCMS from "./api/DevCMS";
import { formatDate, formatDateDots } from "../utils/FormatUtils";
import Layout from "../../components/shared/Layout";

interface Props {
  newsAry: ArrayList<News>;
}

const Home: NextPage<Props> = (props: Props) => {
  const { newsAry } = props;

  return (
    <Layout>
      <main>
        <section className={`${style.section} ${style.news}`}>
          <div className={style.section__wrapper}>
            <h2 className={style.titlePrimary}>
              news release
              <small className={style.titlePrimary__ja}>お知らせ</small>
            </h2>
            <div className={style.newsboad}>
              <div className={style.newsboad__inner}>
                <dl className={style.newsboad__list}>
                  {newsAry.contents.map((item, index) => (
                    <div key={index}>
                      <dt className={style.news}>
                        <time
                          className={style.news__date}
                          dateTime={formatDate(new Date(item.date))}
                        >
                          {formatDateDots(new Date(item.date))}
                        </time>
                      </dt>
                      {item.newsContent.map((news, index) => (
                        <dd key={index}>
                          <section>
                            <h3 className={style.news__title}>{news.title}</h3>
                            <p>
                              {news.details}
                              <Link
                                className={style.news__link}
                                href={{ pathname: news.url }}
                              >
                                <a>{news.linkName}</a>
                              </Link>
                            </p>
                          </section>
                        </dd>
                      ))}
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={style.footer}>
        <div className={style.footer__container}>
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
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const devCMS = new DevCMS();

  const newsAry = await devCMS.getNews();

  return {
    props: {
      newsAry,
    },
  };
};

export default Home;
