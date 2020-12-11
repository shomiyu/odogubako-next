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
        target={post.externalLink ? "_target" : "_self"}
        className={style.inner}
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
        <figure className={style.thumbnail}>
          <img src={post.image.url} alt={post.alt} />
        </figure>

        {/* 外部リンクアイコン */}
        {post.externalLink && (
          <p className={style.externalIcon}>
            <img src="/icons/external-link.svg" alt="外部ページへ移動する" />
            <span className="visuallyHidden">外部ページへ移動する</span>
          </p>
        )}
      </a>
    </section>
  );
};

export default CardItem;
