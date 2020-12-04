import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import * as React from "react";
import Tab from "../../../components/shared/Tab";
import ArrayList from "../../../models/ArrayList";
import DesignContents from "../../../models/Contents";
import DevCMS from "../api/DevCMS";

interface Props {
  designArray: ArrayList<DesignContents>;
  designContent: DesignContents;
}

const DesignContentPage: NextPage<Props> = (props: Props) => {
  const { designArray, designContent } = props;

  return (
    <>
      {console.log(designContent)}
      {console.log(designArray)}
      <div className="container">
        <Tab />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const devCMS = new DevCMS();
  const designArray = await devCMS.getDesignArray();
  const paths = designArray.contents.map((content) => `/design/${content.id ?? ''}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }): Promise<{
  props: Props;
}> => {
  const devCMS = new DevCMS();

  const paramsId = params?.id?.toString() ?? '';
  const designArray = await devCMS.getDesignArray();
  const designContent = await devCMS.getDesignContent(paramsId);

  return {
    props: {
      designArray,
      designContent,
    },
  }
}

export default DesignContentPage;
