import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import * as React from "react";
import axios from "axios";
import ArrayList from "../../models/ArrayList";
import News from "../../models/News";

interface Props {
  data: ArrayList<News>;
}

const Home: NextPage<Props> = (props: Props) => {
  const { data } = props;

  return (
    <div>
      <h1>お知らせ</h1>
      <dl>
        {data.contents.map((item, index) => (
          <div key={index}>
            <dt>
              <time dateTime={item.date}>{item.date}</time>
            </dt>
            {item.newsContent.map((news, index) => (
              <dd key={index}>
                <h2>{news.title}</h2>
                <p>
                  {news.details}
                  <Link href="/">
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
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };

  const res = await axios.get(`https://odogubako.microcms.io/api/v1/news`, key);

  const data = (await res.data) as ArrayList<News>;

  return { props: { data } };
};

export default Home;
