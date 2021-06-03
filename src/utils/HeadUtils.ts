import { NextRouter } from "next/router";

const generateHeadParams = (currentPage: string) => {
  switch (currentPage) {
    case "/design/color":
      return {
        title: "配色 - デザインツール",
        type: "article",
        description:
          "webデザインをするときに参考になるカラーツールをまとめています。",
      };

    case "/design/material":
      return {
        title: "素材 - デザインツール",
        type: "article",
        description: "webデザインで使える素材サイトをまとめています。",
      };

    case "/design/font":
      return {
        title: "フォント - デザインツール",
        type: "article",
        description:
          "webデザインをするときに使えるwebフォントをまとめています。",
      };

    case "/design/tool":
      return {
        title: "ツール - デザインツール",
        type: "article",
        description: "webデザインで使えるツールをまとめています。",
      };

    case "/design/references":
      return {
        title: "参考 - デザインツール",
        type: "article",
        description: "webデザインで参考になるページをまとめています。",
      };

    case "/coding/html":
      return {
        title: "HTML - コーディングツール",
        type: "article",
        description: "HTMLでよく使う設定をまとめています。",
      };

    case "/coding/css":
      return {
        title: "CSS - コーディングツール",
        type: "article",
        description:
          "CSSでよく使用するリセットCSSやベース設定をまとめています。",
      };

    case "/coding/sass":
      return {
        title: "Sass - コーディングツール",
        type: "article",
        description: "Sassでよく使用する設定をまとめています。",
      };

    case "/coding/cdn":
      return {
        title: "CDN - コーディングツール",
        type: "article",
        description: "jQueryやVue.jsなどのよく使用するCDNをまとめています。",
      };

    case "/coding/tool":
      return {
        title: "ツール - コーディングツール",
        type: "article",
        description: "コーディングのときに便利なツールをまとめています。",
      };

    case "/coding/references":
      return {
        title: "参考 - コーディングツール",
        type: "article",
        description: "コーディングで参考になるページをまとめています。",
      };

    case "/infra/tool":
      return {
        title: "ツール - インフラツール",
        type: "article",
        description: "インフラ設定で使えるツールをまとめています。",
      };

    case "/infra/manage":
      return {
        title: "管理 - インフラツール",
        type: "article",
        description:
          "WEBサイトを運営する際に必要なツールや管理画面のブックマーク集です。",
      };

    case "/infra/references":
      return {
        title: "参考 - インフラツール",
        type: "article",
        description: "ITインフラ整備で参考になるサイトをまとめています。",
      };

    case "/other/bookmark":
      return {
        title: "ブックマーク - その他",
        type: "article",
        description: "使える学習教材のまとめです。",
      };

    default: {
      return {
        title: "お道具箱",
        type: "article",
        description:
          "しょうみゆのためのwebデザインとコーディングの効率化ツール。ブックマークやよく使うソースコードをまとめました。",
      };
    }
  }
};

export default generateHeadParams;
