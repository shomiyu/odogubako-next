import style from "./index.module.scss";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import * as React from "react";
import ArrayList from "../../models/ArrayList";
import News from "../../models/News";
import DevCMS from "./api/DevCMS";

interface Props {
  newsAry: ArrayList<News>;
}

const Home: NextPage<Props> = (props: Props) => {
  const { newsAry } = props;

  return (
    <div>
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

      <h1>お知らせ</h1>
      <dl>
        {newsAry.contents.map((item, index) => (
          <div className={style.news__wrapper} key={index}>
            <dt>
              <time dateTime={item.date}>{item.date}</time>
            </dt>
            {item.newsContent.map((news, index) => (
              <dd key={index}>
                <h2>{news.title}</h2>
                <p>
                  {news.details}
                  <Link href={{ pathname: news.url }}>
                    <a>{news.linkName}</a>
                  </Link>
                </p>
              </dd>
            ))}
          </div>
        ))}
      </dl>
    </div>
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
