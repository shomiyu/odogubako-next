import React from "react";
import Post from "../models/Post";
import * as gtag from "../lib/gtag";
import style from "./CategoryContentPanelMediaList.module.scss";

interface Props {
  categoryName: string;
  posts: Post[];
}

const CategoryContentPanelMediaList: React.FC<Props> = (props: Props) => {
  const { categoryName, posts } = props;

  const handleCountClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const anchorElement = event.currentTarget;
    const targetUrl = anchorElement.getAttribute("href");

    if (targetUrl === null) return;

    gtag.event({
      action: "click",
      category: categoryName,
      label: targetUrl,
    });
  };

  return (
    <ul className={style.wrapper}>
      {posts.map((post, index) => (
        <li className={style.item} key={index}>
          <section className={style.wrap}>
            <a
              href={post.url}
              title="外部サイトに移動する"
              target={post.externalLink ? "_target" : "_self"}
              className={`${String(style.inner)} ${String(
                post.externalLink ? style.hasExternalIcon : ""
              )}`}
              onClick={handleCountClick}
            >
              {/* サムネイル */}
              <p className={style.title}>{post.title}</p>
              <div className={style.thumbnail}>
                <img
                  src={`${
                    post.image?.url ?? ""
                  }?auto=format,compress&q=90&w=400`}
                  alt={post.alt}
                />
              </div>
            </a>
          </section>
        </li>
      ))}
    </ul>
  );
};

export default CategoryContentPanelMediaList;
