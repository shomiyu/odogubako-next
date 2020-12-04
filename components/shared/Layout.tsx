import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { MENU } from "../../utils/constantUtils";
import Link from "next/link";

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
    const regExpMatchArray = currentPath.match(item.path);
    return regExpMatchArray && item.path === regExpMatchArray[REG_MATCH_INDEX];
  });
  const pageName = menuItem?.path ?? "home";

  return (
    <>
      {/* ToDo: tabTargetからのページ遷移でWarning出てるので対応する
      <Link href={`${currentPath}#main`}>
        <a className="visuallyHidden">本文までスキップする</a>
      </Link> */}
      <Header currentPage={pageName} />
      <main id="main" className="main">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
