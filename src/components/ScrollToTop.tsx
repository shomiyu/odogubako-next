import React, { useCallback } from "react";
import { animateScroll as scroll } from "react-scroll";
import style from "./ScrollToTop.module.scss";

interface Props {
  isShadowFit: boolean;
  onChangeIconStatus: (iconStatus: boolean) => void;
}

const ScrollToTop: React.FC<Props> = (props: Props) => {
  const { isShadowFit, onChangeIconStatus } = props;

  const handleHoverFit = useCallback(() => {
    onChangeIconStatus(true);
  }, [onChangeIconStatus]);

  const handleHoverShift = useCallback(() => {
    onChangeIconStatus(false);
  }, [onChangeIconStatus]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div
        className={`${style.wrapper} ${isShadowFit ? style.isShadowFit : ""}`}
      >
        <button
          type="button"
          className={style.button}
          onClick={scrollToTop}
          onMouseEnter={handleHoverFit}
          onMouseLeave={handleHoverShift}
        >
          <span className={style.iconArrow}>
            <span className="visuallyHidden">ページトップへ戻る</span>
          </span>
        </button>
        <div className={style.buttonShadow} />
      </div>
    </>
  );
};

export default ScrollToTop;
