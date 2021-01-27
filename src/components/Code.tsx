import React, { useCallback } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Post from "../../models/Post";
import style from "./Code.module.scss";

interface Props {
  post: Post;
  copyStatus: boolean;
  dataIndex: number | null;
  onChangeCopyIndex?: (copyIndex: number | null) => void;
}

const Code = (props: Props) => {
  const { post, copyStatus, dataIndex, onChangeCopyIndex } = props;

  const handleCopy = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const element = e.currentTarget;
      const copyId = element.getAttribute("data-target") ?? "";
      const copyItem = document.getElementById(`${copyId}`)?.innerText ?? "";
      void navigator.clipboard.writeText(copyItem);

      if (onChangeCopyIndex) {
        onChangeCopyIndex(dataIndex);
        setTimeout(onChangeCopyIndex, 2000, null);
      }
    },
    [dataIndex, onChangeCopyIndex]
  );

  return (
    <section>
      <h2>{post.title}</h2>
      {post.code && (
        <div>
          <div
            id={`code-${dataIndex ?? ""}`}
            contentEditable
            spellCheck={false}
            suppressContentEditableWarning
          >
            <SyntaxHighlighter language="htmlbars" style={monokaiSublime}>
              {post.code_2}
            </SyntaxHighlighter>
          </div>
          <span
            id={`message-${dataIndex ?? ""}`}
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
