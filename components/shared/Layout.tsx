import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { MENU } from "../../utils/constantUtils";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props;
  const [pageName, setPageName] = useState("home");

  const handleClickPageName = (name: string) => {
    setPageName(name);
  };

  return (
    <>
      <Header currentPage={pageName} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
