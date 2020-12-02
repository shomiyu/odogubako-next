import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { MENU } from "../../utils/constantUtils";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props;

  /**
   * カレントページを特定
   */
  const router = useRouter();
  const currentPath = router.pathname;
  const pathArray = currentPath.split("/").filter((v) => v);
  let pageData = {
    name: "home",
  };
  // MEMO: TOPのときは空配列なので1つ以上の要素がある場合に下層と見なす
  if (pathArray.length >= 1) {
    const arr = pathArray.map((item) => {
      const currentPage = MENU.filter((hoge) => {
        return item === hoge.path;
      });

      return {
        name: currentPage[0]?.id,
      };
    });
    pageData = arr[0];
  }

  return (
    <>
      <Header currentPage={pageData.name} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
