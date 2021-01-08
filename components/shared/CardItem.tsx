import React from "react";
import style from "./CardItem.module.scss";
import Post from "../../models/Post";

interface Props {
  post: Post;
}

const CardItem: React.FC<Props> = (props: Props) => {
  const { post } = props;

  return (
    <section className={style.wrapper}>
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
            src={`${post.image?.url}?auto=format,compress&q=90&w=400`}
            alt={post.alt}
          />
        </div>
      </a>
    </section>
  );
};

export default CardItem;
