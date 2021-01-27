import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import CategoryContents from "../../components/CategoryContents";
import ArrayList from "../../../models/ArrayList";
import { CategoryContent } from "../../../models/DesignContents";
import DevCMS from "../api/DevCMS";

interface Props {
  designArray: ArrayList<CategoryContent>;
  designContent: CategoryContent;
}

const DesignContentPage: NextPage<Props> = (props: Props) => {
  const { designArray, designContent } = props;

  const [tabId, setTabId] = useState("tabPanel-0");

  const handleChangeTabId = useCallback((nextTabId: string) => {
    setTabId(nextTabId);
  }, []);

  const tabItems = designArray.contents.map((el) => {
    return {
      title: el.title,
      path: `/design/${el.id}`,
    };
  });

  useEffect(() => {
    setTabId("tabPanel-0");
  }, [designContent]);

  return (
    <div className="container">
      <CategoryContents
        tabItems={tabItems}
        content={designContent}
        tabId={tabId}
        onChangeTabId={handleChangeTabId}
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
