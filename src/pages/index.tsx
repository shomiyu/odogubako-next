import { NextPage, GetStaticProps } from "next";
import * as React from "react";
import ArrayList from "../models/ArrayList";
import News from "../models/News";
import DevCMS from "./api/DevCMS";
import Introduction from "../components/Introduction";
import NewsList from "../components/NewsList";
import CategoryList from "../components/CategoryList";

interface Props {
  newsAry: ArrayList<News>;
}

const Home: NextPage<Props> = (props: Props) => {
  const { newsAry } = props;
  const introductionText =
    "Webデザインやコーディングなどの作業で使える便利なツールやチートシートなどをカテゴリーに分けて集めました。\nお道具箱を開けばWeb制作に必要なものが全部揃っている、そんなコンセプトで作ったブックマーク集です。";

  return (
    <>
      <Introduction contents={introductionText} />
      <NewsList newsAry={newsAry} />
      <CategoryList />
    </>
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
