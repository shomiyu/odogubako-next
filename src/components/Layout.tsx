import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import { MENU } from "../utils/ConstantUtils";
import ScrollToTop from "./ScrollToTop";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props;

  /**
   * パス情報からヘッダー見出しを取得する
   */
  const router = useRouter();
  const currentPath = router.asPath;
  const REG_MATCH_INDEX = 0 as const;
  const menuItem = MENU.find((item) => {
    // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
    const regExpMatchArray = currentPath.match(item.path);

    return regExpMatchArray && item.path === regExpMatchArray[REG_MATCH_INDEX];
  });
  const pageName = menuItem?.path ?? "home";

  /**
   * ページTOPアイコンの処理
   */
  const [isShadowFit, setShadowFit] = useState(false);
  const handleChangeIconStatus = useCallback((iconStatus: boolean) => {
    setShadowFit(iconStatus);
  }, []);

  return (
    <>
      <Header currentPage={pageName} />
      <main id="main" className="main">
        {children}
        <div className="container">
          <ScrollToTop
            isShadowFit={isShadowFit}
            onChangeIconStatus={handleChangeIconStatus}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
