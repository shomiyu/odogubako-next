import React from "react";
import Post from "../../models/Post";

interface Props {
  post: Post;
}

const Code = (props: Props) => {
  const { post } = props;

  return (
    <section>
      <h2>{post.title}</h2>
      <div
        contenteditable="true"
        spellcheck="false"
        dangerouslySetInnerHTML={{ __html: post.code }}
      />
    </section>
  );
};

export default Code;
