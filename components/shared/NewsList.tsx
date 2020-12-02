import React from "react";
import ArrayList from "../../models/ArrayList";
import News from "../../models/News";
import style from "./NewsList.module.scss";
import { formatDate, formatDateDots } from "../../src/utils/FormatUtils";
import Link from "next/link";

interface Props {
  newsAry: ArrayList<News>;
}
const NewsList: React.FC<Props> = (props: Props) => {
  const { newsAry } = props;

  return (
    <>
      <section className="section">
        <div className="container">
          <h2 lang="en" className="titlePrimary">
            news release
            <small lang="ja" className="titlePrimary__ja">
              お知らせ
            </small>
          </h2>
          <div className={style.newsboad}>
            <div className={style.newsboad__inner}>
              <dl className={style.newsboad__list}>
                {newsAry.contents.map((item) => (
                  <div key={item.id} className={style.news}>
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
                              <Link href={news.url}>
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
    </>
  );
};

export default NewsList;
