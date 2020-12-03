import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { MENU } from "../../utils/constantUtils";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props;

  const router = useRouter();
  const currentPage = router.asPath;
  const pathArray = currentPage.split("/").filter((v) => v);
  let pageName = {
    name: "home",
  };

  if (pathArray.length >= 1) {
    const arr = pathArray.map((item) => {
      const currentPage = MENU.filter((hoge) => {
        return item === hoge.path;
      });

      return {
        name: currentPage[0]?.id,
      };
    });

    pageName = arr[0];
  }

  return (
    <>
      <Header currentPage={pageName.name} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
