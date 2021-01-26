import React from "react";
import style from "./CodeList.module.scss";
import Post from "../../models/Post";
import Code from "./Code";

interface Props {
  posts: Post[];
}

const CodeList: React.FC<Props> = (props: Props) => {
  const { posts } = props;

  return (
    <ul className={style.wrapper}>
      {posts.map((post, index) => (
        <li className={style.item} key={index}>
          <Code post={post} dataIndex={index} />
        </li>
      ))}
    </ul>
  );
};

export default CodeList;
