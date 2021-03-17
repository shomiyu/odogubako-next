import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import CategoryContentComponent from "../../components/CategoryContent";
import ArrayList from "../../models/ArrayList";
import { CategoryContent } from "../../models/CategoryContent";
import DevCMS from "../api/DevCMS";

interface Props {
  otherContents: ArrayList<CategoryContent>;
  otherContent: CategoryContent;
}

const OtherContentPage: NextPage<Props> = (props: Props) => {
  const { otherContents, otherContent } = props;

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
  }, [otherContent]);

  return (
    <div className="container">
      <CategoryContentComponent
        content={otherContent}
        contents={otherContents}
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
  const otherArray = await devCMS.getOtherArray();
  const paths = otherArray.contents.map(
    (content) => `/other/${content.id ?? ""}`
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{ props: Props }> => {
  const devCMS = new DevCMS();
  const paramsId = params?.id?.toString() ?? "";
  const otherContents = await devCMS.getOtherArray();
  const otherContent = await devCMS.getOtherContent(paramsId);

  return {
    props: {
      otherContents,
      otherContent,
    },
  };
};

export default OtherContentPage;
