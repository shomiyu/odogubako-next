import React from "react";
import style from "./CodeList.module.scss";
import Post from "../../models/Post";
import Code from "./Code";

interface Props {
  posts: Post[];
  copyIndex?: number | null;
  onChangeCopyIndex?: (copyIndex: number | null) => void;
}

const CodeList: React.FC<Props> = (props: Props) => {
  const { posts, copyIndex, onChangeCopyIndex } = props;

  return (
    <ul className={style.wrapper}>
      {posts.map((post, index) => (
        <li className={style.item} key={index}>
          <Code
            post={post}
            copyStatus={copyIndex === index}
            onChangeCopyIndex={onChangeCopyIndex}
            dataIndex={index}
          />
        </li>
      ))}
    </ul>
  );
};

export default CodeList;
