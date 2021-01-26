import React from "react";
import Post from "../../models/Post";

interface Props {
  post: Post;
  dataIndex: number;
}

const Code = (props: Props) => {
  const { post, dataIndex } = props;

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const element = e.currentTarget;
    const copyId = element.getAttribute("data-target") ?? "";
    const copyItem = document.getElementById(`${copyId}`)?.innerText ?? "";
    navigator.clipboard.writeText(copyItem);
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
      <button
        type="button"
        data-target={`code-${dataIndex}`}
        onClick={handleCopy}
      >
        クリップボードにコピーする
      </button>
    </section>
  );
};

export default Code;
