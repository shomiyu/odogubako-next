import { NextPage, GetStaticProps } from "next";
import * as React from "react";
import axios from "axios";
import ArrayList from "../../models/ArrayList";
import HtmlHeaders from "../../models/HtmlHeaders";

interface Props {
  data: ArrayList<HtmlHeaders>;
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

  const data = (await res.data) as ArrayList<HtmlHeaders>;

  return { props: { data } };
};

export default Home;
