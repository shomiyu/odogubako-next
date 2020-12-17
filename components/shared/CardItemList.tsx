import React from "react";
import style from "./CardItemList.module.scss";
import Post from "../../models/Post";
import CardItem from "./CardItem";

interface Props {
  posts: Post[];
}

const CardItemList: React.FC<Props> = (props: Props) => {
  const { posts } = props;

  return (
    <ul className={style.wrapper}>
      {posts?.map((post, index) => (
        <li className={style.item} key={index}>
          <CardItem post={post} />
        </li>
      ))}
    </ul>
  );
};

export default CardItemList;
