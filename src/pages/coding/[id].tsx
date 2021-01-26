import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import CategoryContents from "../../../components/shared/CategoryContents";
import ArrayList from "../../../models/ArrayList";
import { CategoryContent } from "../../../models/DesignContents";
import DevCMS from "../api/DevCMS";

interface Props {
  codingArray: ArrayList<CategoryContent>;
  codingContent: CategoryContent;
}

const CodingContentPage: NextPage<Props> = (props: Props) => {
  const { codingArray, codingContent } = props;

  const [tabId, setTabId] = useState("tabPanel-0");
  const [copyIndex, setCopyIndex] = useState<number | null>(null);

  const handleChangeTabId = useCallback((tabId: string) => {
    setTabId(tabId);
  }, []);

  const handleChangeCopyIndex = useCallback((copyIndex: number | null) => {
    setCopyIndex(copyIndex);
  }, []);

  useEffect(() => {
    setTabId("tabPanel-0");
  }, [codingContent]);

  const tabItems = codingArray.contents.map((el) => {
    return {
      title: el.title,
      path: `/coding/${el.id}`,
    };
  });

  return (
    <div className="container">
      <CategoryContents
        tabItems={tabItems}
        content={codingContent}
        tabId={tabId}
        copyIndex={copyIndex}
        onChangeTabId={handleChangeTabId}
        onChangeCopyIndex={handleChangeCopyIndex}
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const devCMS = new DevCMS();
  const codingArray = await devCMS.getCodingArray();
  const paths = codingArray.contents.map(
    (content) => `/coding/${content.id ?? ""}`
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{ props: Props }> => {
  const devCMS = new DevCMS();
  const paramsId = params?.id?.toString() ?? "";
  const codingArray = await devCMS.getCodingArray();
  const codingContent = await devCMS.getCodingContent(paramsId);

  return {
    props: {
      codingArray,
      codingContent,
    },
  };
};

export default CodingContentPage;
