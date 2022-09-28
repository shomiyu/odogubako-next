import * as React from "react";
import Head from "next/head";
import generateHeadParams from "../utils/HeadUtils";

interface Props {
  currentPath: string;
}

const MainHead: React.FC<Props> = (props: Props) => {
  const { currentPath } = props;
  const headParams = generateHeadParams(currentPath);
  const { title, type, description } = headParams;

  const defaultTitle = "お道具箱 for Web";
  const defaultDescription =
    "Webデザインやコーディングなどの作業で使える便利なツールやチートシートなどをカテゴリーに分けて集めました。お道具箱を開けばWeb制作に必要なものが全部揃っている、そんなコンセプトで作ったブックマーク集です。";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";

  return (
    <Head>
      <title>{`${String(
        currentPath === "/" ? defaultTitle : title + " | " + defaultTitle
      )}`}</title>
      <meta
        name="description"
        content={`${String(
          currentPath === "/" ? defaultDescription : description
        )}`}
      />
      <meta
        property="og:title"
        content={`${String(
          currentPath === "/" ? defaultTitle : title + " | " + defaultTitle
        )}`}
      />
      <meta
        property="og:description"
        content={`${String(
          currentPath === "/" ? defaultDescription : description
        )}`}
      />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:url" content={baseUrl + currentPath} />
      <meta property="og:image" content={`${baseUrl}/image_hero_ogp.png`} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@MykiiTech" />
      <meta
        name="twitter:title"
        content={`${String(
          currentPath === "/" ? defaultTitle : title + " | " + defaultTitle
        )}`}
      />
      <meta
        name="twitter:description"
        content={`${String(
          currentPath === "/" ? defaultDescription : description
        )}`}
      />
      <meta name="twitter:image" content={`${baseUrl}/image_hero_ogp.png`} />
    </Head>
  );
};

export default MainHead;
