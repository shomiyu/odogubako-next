import React from "react";
import style from "./CodeList.module.scss";
import Post from "../../models/Post";
import Code from "./Code";

interface Props {
  posts: Post[];
  copyStatus: boolean;
  onChangeCopyStatus: (status: boolean) => void;
}

const CodeList: React.FC<Props> = (props: Props) => {
  const { posts, copyStatus, onChangeCopyStatus } = props;

  return (
    <ul className={style.wrapper}>
      {posts.map((post, index) => (
        <li className={style.item} key={index}>
          <Code
            post={post}
            copyStatus={copyStatus}
            onChangeCopyStatus={onChangeCopyStatus}
            dataIndex={index}
          />
        </li>
      ))}
    </ul>
  );
};

export default CodeList;
