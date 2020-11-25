import style from "./index.module.scss";
import { NextPage, GetStaticProps } from "next";
import * as React from "react";
import ArrayList from "../../models/ArrayList";
import News from "../../models/News";
import Category from "../../models/Category";
import DevCMS from "./api/DevCMS";
import Footer from "../../components/shared/Footer";
import NewsList from "../../components/shared/NewsList";
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
        <NewsList newsAry={newsAry} />
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
