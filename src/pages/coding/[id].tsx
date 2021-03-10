import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import CategoryContentComponent from "../../components/CategoryContent";
import ArrayList from "../../models/ArrayList";
import { CategoryContent } from "../../models/CategoryContent";
import DevCMS from "../api/DevCMS";

interface Props {
  codingContents: ArrayList<CategoryContent>;
  codingContent: CategoryContent;
}

const CodingContentPage: NextPage<Props> = (props: Props) => {
  const { codingContents, codingContent } = props;

  const [tabId, setTabId] = useState("tabPanel-0");
  const [copyIndex, setCopyIndex] = useState<number | null>(null);

  const handleChangeTabId = useCallback((nextTabId: string) => {
    setTabId(nextTabId);
  }, []);

  const handleChangeCopyIndex = useCallback((nextCopyIndex: number | null) => {
    setCopyIndex(nextCopyIndex);
  }, []);

  useEffect(() => {
    setTabId("tabPanel-0");
  }, [codingContent]);

  return (
    <div className="container">
      <CategoryContentComponent
        content={codingContent}
        contents={codingContents}
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
  const codingContents = await devCMS.getCodingArray();
  const codingContent = await devCMS.getCodingContent(paramsId);

  return {
    props: {
      codingContents,
      codingContent,
    },
  };
};

export default CodingContentPage;
