import React, { useCallback } from "react";
import Post from "../../models/Post";
import style from "./Code.module.scss";

interface Props {
  post: Post;
  copyStatus: boolean;
  dataIndex: number | null;
  onChangeCopyIndex: (copyIndex: number | null) => void;
}

const Code = (props: Props) => {
  const { post, copyStatus, dataIndex, onChangeCopyIndex } = props;

  const handleCopy = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const element = e.currentTarget;
      const copyId = element.getAttribute("data-target") ?? "";
      const copyItem = document.getElementById(`${copyId}`)?.innerText ?? "";
      navigator.clipboard.writeText(copyItem);

      onChangeCopyIndex(dataIndex);
      setTimeout(onChangeCopyIndex, 2000, null);
    },
    []
  );

  return (
    <section>
      <h2>{post.title}</h2>
      {post.code && (
        <div>
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
        </div>
      )}
    </section>
  );
};

export default Code;
