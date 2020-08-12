import { NextPage } from "next";
import * as React from "react";
import Link from "next/link";
import axios from "axios";

interface Props {
  title: String;
  code: String;
}

const Home: NextPage<Props> = (data: Props) => {
  return (
    <div>
      <h1>最新の記事</h1>
      <div>
        {data.map((data) => (
          <React.Fragment key={data.id}>
            <Link href="/blogs/[id]" as={`blogs/${data.id}`}>
              <a>
                <h2>{data.title}</h2>
                <p>{data.code}</p>
              </a>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };

  const res = await axios.get(
    `https://odogubako.microcms.io/api/v1/coding_html_head`,
    key
  );

  const data = await res.data.contents;

  return { data: data };
};

export default Home;
