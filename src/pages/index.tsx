import style from "./index.module.scss";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import * as React from "react";
import ArrayList from "../../models/ArrayList";
import News from "../../models/News";
import Category from "../../models/Category";
import DevCMS from "./api/DevCMS";
import { formatDate, formatDateDots } from "../utils/FormatUtils";
import Footer from "../../components/shared/Footer";
import CategoryList from "../../components/shared/categoryList";

interface Props {
  newsAry: ArrayList<News>;
  categories: ArrayList<Category>;
}

const Home: NextPage<Props> = (props: Props) => {
  const { newsAry, categories } = props;

  return (
    <>
      <main className={style.main}>
        {/* News */}
        <section className="section">
          <div className="container">
            <h2 lang="en" className={style.titlePrimary}>
              news release
              <small lang="ja" className={style.titlePrimary__ja}>
                お知らせ
              </small>
            </h2>
            <div className={style.newsboad}>
              <div className={style.newsboad__inner}>
                <dl className={style.newsboad__list}>
                  {newsAry.contents.map((item, index) => (
                    <div key={index} className={style.news}>
                      <dt className={style.news__date}>
                        <time dateTime={formatDate(new Date(item.date))}>
                          {formatDateDots(new Date(item.date))}
                        </time>
                      </dt>
                      {item.newsContent.map((news, index) => (
                        <dd key={index} className={style.news__content}>
                          <section>
                            <h3 className={style.news__title}>{news.title}</h3>
                            <p>
                              {news.details}
                              {news.url && (
                                <Link href={{ pathname: news.url }}>
                                  <a className={style.news__link}>
                                    {news.linkName}
                                  </a>
                                </Link>
                              )}
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

        <CategoryList categories={categories} />
      </main>

      <Footer categories={categories} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const devCMS = new DevCMS();

  const newsAry = await devCMS.getNews();
  const categories = await devCMS.getCategories();

  return {
    props: {
      newsAry,
      categories,
    },
  };
};

export default Home;
