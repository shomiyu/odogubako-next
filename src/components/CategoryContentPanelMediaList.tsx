import React from "react";
import Post from "../models/Post";
import style from "./CategoryContentPanelMediaList.module.scss";

interface Props {
  posts: Post[];
}

const CategoryContentPanelMediaList: React.FC<Props> = (props: Props) => {
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
