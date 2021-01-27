import React from "react";
import Post from "../models/Post";
import style from "./CategoryContentPanelCardList.module.scss";

interface Props {
  posts: Post[];
}

const CategoryContentPanelCardList: React.FC<Props> = (props: Props) => {
  const { posts } = props;

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
            >
              {/* テキストコンテンツ */}
              <div
                className={`${String(style.main)} ${String(
                  post.commercialUse || post.credit ? style.hasTag : ""
                )}`}
              >
                <h3 className={style.title}>{post.title}</h3>
                <p className={style.description}>{post.description}</p>
                {(post.credit || post.commercialUse) && (
                  <ul className={style.tags}>
                    {post.commercialUse && <li>商用可</li>}
                    {post.credit && <li className={style.red}>クレ要</li>}
                  </ul>
                )}
              </div>

              {/* サムネイル */}
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

export default CategoryContentPanelCardList;
