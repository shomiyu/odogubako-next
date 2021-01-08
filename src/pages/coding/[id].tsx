import { GetStaticPaths, GetStaticProps } from "next";
import * as React from "react";
import ArrayList from "../../../models/ArrayList";
import { CategoryContent } from "../../../models/DesignContents";
import DevCMS from "../api/DevCMS";

interface Props {
  codingArray: ArrayList<CategoryContent>;
  codingContent: CategoryContent;
}

const CodingContentPage = (props: Props) => {
  const { codingArray, codingContent } = props;

  return (
    <>
      <div>コーディング</div>
    </>
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
