import React from "react";
import style from "./Introduction.module.scss";

interface Props {
  contents: string;
}

const Introduction: React.FC<Props> = (props: Props) => {
  const { contents } = props;

  return (
    <>
      <section className="section">
        <div className="container">
          <p className={style.contents}>{contents}</p>
        </div>
      </section>
    </>
  );
};

export default Introduction;
