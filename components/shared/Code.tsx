import React from "react";
import Post from "../../models/Post";
import style from "./Code.module.scss";

interface Props {
  post: Post;
  copyStatus: boolean;
  dataIndex: number;
  onChangeCopyStatus: (status: boolean) => void;
}

const Code = (props: Props) => {
  const { post, copyStatus, dataIndex, onChangeCopyStatus } = props;

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const element = e.currentTarget;
    const copyId = element.getAttribute("data-target") ?? "";
    const copyItem = document.getElementById(`${copyId}`)?.innerText ?? "";
    navigator.clipboard.writeText(copyItem);

    onChangeCopyStatus(true);
    setTimeout(onChangeCopyStatus, 1500, false);
  };

  return (
    <section>
      <h2>{post.title}</h2>
      <div
        id={`code-${dataIndex}`}
        contentEditable
        spellCheck={false}
        dangerouslySetInnerHTML={{ __html: post.code }}
      />
      <span
        id={`message-${dataIndex}`}
        className={`${style.copyMessage} ${copyStatus ? style.isShow : ""}`}
      >
        Copied!
      </span>
      <button
        type="button"
        data-target={`code-${dataIndex}`}
        onClick={handleCopy}
        title="クリップボードにコピーする"
      >
        クリップボードにコピーする
      </button>
    </section>
  );
};

export default Code;
