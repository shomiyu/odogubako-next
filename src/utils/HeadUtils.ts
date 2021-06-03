import { NextRouter } from "next/router";

const generateHeadParams = (currentPage: string) => {
  switch (currentPage) {
    case "home":
      return {
        title: "お道具箱",
        type: "website",
      };

    case "design":
      return {
        title: "デザインツール",
        type: "article",
      };

    case "coding":
      return {
        title: "コーディングツール",
        type: "article",
      };

    case "infra":
      return {
        title: "インフラツール",
        type: "article",
      };

    case "other":
      return {
        title: "その他のツール",
        type: "article",
      };

    default: {
      return {
        title: "お道具箱",
        type: "article",
      };
    }
  }
};

export default generateHeadParams;
