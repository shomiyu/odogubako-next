import { NextPage, GetStaticProps } from "next";
import * as React from "react";
import axios from "axios";

interface ArrayList<T> {
  contents: T[];
  offset: number;
  limit: number;
}

interface htmlHeader {
  id: string;
  createdAt: string;
  limit: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  code: string;
}

interface Props {
  data: ArrayList<htmlHeader>;
}

const Home: NextPage<Props> = (props: Props) => {
  const { data } = props;

  return (
    <div>
      <h1>最新の記事</h1>
      <div>
        {data.contents.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };

  const res = await axios.get(
    `https://odogubako.microcms.io/api/v1/coding_html_head`,
    key
  );

  const data = (await res.data) as ArrayList<htmlHeader>;

  return { props: { data } };
};

export default Home;
