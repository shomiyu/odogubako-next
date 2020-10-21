import style from "./index.module.scss";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import * as React from "react";
import ArrayList from "../../models/ArrayList";
import News from "../../models/News";
import Categories from "../../models/Categories";
import DevCMS from "./api/DevCMS";
import { formatDate, formatDateDots } from "../utils/FormatUtils";
import Layout from "../../components/shared/Layout";

interface Props {
  newsAry: ArrayList<News>;
  categoriesAry: ArrayList<Categories>;
}

const Home: NextPage<Props> = (props: Props) => {
  const { newsAry, categoriesAry } = props;

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
                              <Link href={{ pathname: news.url }}>
                                <a className={style.news__link}>
                                  {news.linkName}
                                </a>
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

        {/* design */}
        <section>
          <div className={style.section__wrapper}>
            {categoriesAry.contents.map((item, index) => (
              <div key={index}>
                <h2 className={style.titlePrimary}>
                  {item.path}
                  <small className={style.titlePrimary__ja}>{item.title}</small>
                </h2>
                <ul className={style.menu}>
                  {item.children.map((child, index) => (
                    <li key={index}>
                      <Link href={{ pathname: child.path }}>
                        <a>
                          <section className={style.menu__item}>
                            <h3 className={style.menu__title}>
                              {child.path}
                              <span className={style.menu__titleSub}>
                                {child.title}
                              </span>
                            </h3>
                            <figure className={style.menu__icon}>
                              <img src={child.icon.url} alt={child.title} />
                            </figure>
                          </section>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const devCMS = new DevCMS();

  const newsAry = await devCMS.getNews();
  const categoriesAry = await devCMS.getCategories();

  return {
    props: {
      newsAry,
      categoriesAry,
    },
  };
};

export default Home;
