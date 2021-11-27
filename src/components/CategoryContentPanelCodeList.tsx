import React, { useCallback } from "react";
import { monokaiSublime } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import style from "./CategoryContentPanelCodeList.module.scss";
import Post from "../models/Post";

interface Props {
  posts: Post[];
  copyIndex?: number | null;
  onChangeCopyIndex?: (copyIndex: number | null) => void;
}

const CategoryContentPanelCodeList: React.FC<Props> = (props: Props) => {
  const { posts, copyIndex, onChangeCopyIndex } = props;

  const handleClickCopyIndex = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const { index } = e.currentTarget.dataset;
      if (!onChangeCopyIndex || !index) return;

      const copyId = e.currentTarget.getAttribute("data-target") ?? "";
      const copyItem = document.getElementById(`${copyId}`)?.innerText ?? "";
      void navigator.clipboard.writeText(copyItem);

      onChangeCopyIndex(Number.parseInt(index, 10));
      setTimeout(onChangeCopyIndex, 2000, null);
    },
    [onChangeCopyIndex]
  );

  return (
    <ul className={style.list}>
      {posts.map((post, index) => (
        <li className={style.item} key={index}>
          <section>
            <h2 className={style.title}>{post.title}</h2>
            {post.code && (
              <div className={style.wrapper}>
                <div
                  id={`code-${index ?? ""}`}
                  spellCheck={false}
                  suppressContentEditableWarning
                >
                  <SyntaxHighlighter
                    language={post.lang}
                    style={monokaiSublime}
                  >
                    {post.code}
                  </SyntaxHighlighter>
                </div>
                <span
                  id={`message-${index ?? ""}`}
                  className={`${style.copyMessage} ${
                    index === copyIndex ? style.isShow : ""
                  }`}
                >
                  Copied!
                </span>
                <button
                  type="button"
                  data-index={index}
                  data-target={`code-${index}`}
                  onClick={handleClickCopyIndex}
                  className={style.copyButton}
                  title="クリップボードにコピーする"
                >
                  <img src="/icons/copy.svg" alt="copy" />
                </button>
              </div>
            )}
          </section>
        </li>
      ))}
    </ul>
  );
};

export default CategoryContentPanelCodeList;
