import React from "react";
import style from "./CardItem.module.scss";

const CardItem = () => {
  return (
    <>
      <section>
        <a href="#!" target="_blank" className={style.inner}>
          <div className={style.main}>
            <h3 className={style.title}>color-sample.com</h3>
            <p className={style.description}>
              豊富なカラーサンプルをランダムに表示。選択したカラーの彩度・明度も表示する。
            </p>
          </div>
          <figure className={style.thumbnail}>
            <img
              src="https://お道具箱.com/images/content/image-color-sample-com.png"
              alt=""
            />
          </figure>
          <p className={style.externalIcon}>
            <img src="/icons/external-link.svg" alt="外部ページへ移動する" />
            <span className="visuallyHidden">外部ページへ移動する</span>
          </p>
        </a>
      </section>
    </>
  );
};

export default CardItem;
