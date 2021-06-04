import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import CategoryContentComponent from "../../components/CategoryContent";
import ArrayList from "../../models/ArrayList";
import { CategoryContent } from "../../models/CategoryContent";
import DevCMS from "../api/DevCMS";

interface Props {
  designContents: ArrayList<CategoryContent>;
  designContent: CategoryContent;
}

const DesignContentPage: NextPage<Props> = (props: Props) => {
  const { designContents, designContent } = props;

  const [tabId, setTabId] = useState("tabPanel-0");

  const handleChangeTabId = useCallback((nextTabId: string) => {
    setTabId(nextTabId);
  }, []);

  useEffect(() => {
    setTabId("tabPanel-0");
  }, [designContent]);

  return (
    <div className="container">
      <CategoryContentComponent
        content={designContent}
        contents={designContents}
        tabId={tabId}
        categoryName="design"
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
  const designContents = await devCMS.getDesignArray();
  const designContent = await devCMS.getDesignContent(paramsId);

  return {
    props: {
      designContents,
      designContent,
    },
  };
};

export default DesignContentPage;
