import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import * as React from "react";
import { useEffect, useState } from "react";
import CategoryContents from "../../../components/shared/CategoryContents";
import ArrayList from "../../../models/ArrayList";
import {
  DesignCategory,
  CategoryContent,
} from "../../../models/DesignContents";
import DevCMS from "../api/DevCMS";

interface Props {
  designArray: ArrayList<CategoryContent>;
  designContent: CategoryContent;
}

const DesignContentPage: NextPage<Props> = (props: Props) => {
  const { designArray, designContent } = props;

  const [tabState, setTabState] = useState("tabPanel-0");

  const handleClickTab = (tabId: string) => {
    setTabState(tabId);
  };

  const tabItems = designArray.contents.map((el) => {
    return {
      title: el.title,
      path: `/design/${el.id}`,
    };
  });

  useEffect(() => {
    setTabState("tabPanel-0");
  }, [designContent]);

  return (
    <div className="container">
      <CategoryContents
        tabItems={tabItems}
        designContent={designContent}
        tabState={tabState}
        onClickTab={handleClickTab}
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const devCMS = new DevCMS();
  const designArray = await devCMS.getDesignArray();
  const paths = designArray.contents.map(
    (content) => `/design/${content.id ?? ""}`
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{
  props: Props;
}> => {
  const devCMS = new DevCMS();

  const paramsId = params?.id?.toString() ?? "";
  const designArray = await devCMS.getDesignArray();
  const designContent = await devCMS.getDesignContent(paramsId);

  return {
    props: {
      designArray,
      designContent,
    },
  };
};

export default DesignContentPage;
