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
  const currentPath = router.asPath;
  const categoryData = MENU.find((item) => {
    const data = currentPath.match(item.path);

    if (!data) return;
    return item.path === data[0];
  });
  const pageName = categoryData ? categoryData.id : "home";

  return (
    <>
      <Header currentPage={pageName} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
