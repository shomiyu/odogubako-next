import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import CategoryContentComponent from "../../components/CategoryContent";
import ArrayList from "../../models/ArrayList";
import { CategoryContent } from "../../models/CategoryContent";
import DevCMS from "../api/DevCMS";

interface Props {
  infraContents: ArrayList<CategoryContent>;
  infraContent: CategoryContent;
}

const InfraContentPage: NextPage<Props> = (props: Props) => {
  const { infraContents, infraContent } = props;

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
  }, [infraContent]);

  return (
    <div className="container">
      <CategoryContentComponent
        content={infraContent}
        contents={infraContents}
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
  const infraArray = await devCMS.getInfraArray();
  const paths = infraArray.contents.map(
    (content) => `/infra/${content.id ?? ""}`
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{ props: Props }> => {
  const devCMS = new DevCMS();
  const paramsId = params?.id?.toString() ?? "";
  const infraContents = await devCMS.getInfraArray();
  const infraContent = await devCMS.getInfraContent(paramsId);

  return {
    props: {
      infraContents,
      infraContent,
    },
  };
};

export default InfraContentPage;
