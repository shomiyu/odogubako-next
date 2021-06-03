import * as React from "react";
import Head from "next/head";
import generateHeadParams from "../utils/HeadUtils";

interface Props {
  currentPage: string;
}

const MainHead: React.FC<Props> = (props: Props) => {
  const { currentPage } = props;
  const headParams = generateHeadParams(currentPage);
  const { title, type } = headParams;

  const defaultTitle = "お道具箱 for Shomiyu";
  const defaultDescription =
    "しょうみゆのためのwebデザインとコーディングの効率化ツール。ブックマークやよく使うソースコードをまとめました。";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";

  return (
    <Head>
      <title>{`${String(
        currentPage === "home" ? defaultTitle : title + " | " + defaultTitle
      )}`}</title>
      <meta name="description" content={defaultDescription} />
      <meta property="og:title" content={`${title} | ${defaultTitle}`} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:image" content={`${baseUrl}/image_hero_ogp.png.png`} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@MykiiTech" />
      <meta name="twitter:domain" content={baseUrl} />
      <meta
        name="twitter:title"
        content={`${String(
          currentPage === "home" ? defaultTitle : title + " | " + defaultTitle
        )}`}
      />
      <meta name="twitter:description" content={defaultDescription} />
      <meta
        name="twitter:image"
        content={`${baseUrl}/image_hero_ogp.png.png`}
      />
    </Head>
  );
};

export default MainHead;
