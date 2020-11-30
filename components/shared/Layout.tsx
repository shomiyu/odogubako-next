import Header from "./Header";
import Footer from "./Footer";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props;
  const [pageName, setPageName] = useState("home");

  const handleClickPageName = (name: string) => {
    setPageName(name);
  }

  return (
    <>
      <Header currentPage={pageName} onClickPageName={handleClickPageName} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
