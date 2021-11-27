import React, { useCallback } from "react";
import { monokaiSublime } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import style from "./CategoryContentPanelCodeList.module.scss";
import Post from "../models/Post";

interface Props {
  posts: Post[];
  tabId: string;
  copyIndex?: number | null;
  onChangeCopyIndex?: (copyIndex: number | null) => void;
}

const CategoryContentPanelCodeList: React.FC<Props> = (props: Props) => {
  const { posts, tabId, copyIndex, onChangeCopyIndex } = props;

  const handleClickCopyIndex = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const { index: stringIndex } = e.currentTarget.dataset;
      if (!onChangeCopyIndex || !stringIndex) return;

      const index = Number.parseInt(stringIndex, 10);
      const copyItem = posts[index].code;
      if (!copyItem) return;

      void navigator.clipboard.writeText(copyItem);
      onChangeCopyIndex(index);
      setTimeout(onChangeCopyIndex, 2000, null);
    },
    [onChangeCopyIndex, posts]
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
                  id={`code-${tabId}-${index ?? ""}`}
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
                  data-target={`code-${tabId}-${index}`}
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
