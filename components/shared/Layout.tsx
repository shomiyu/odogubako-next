import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { MenuContext, menu } from "../../context/menu-data";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props;

  return (
    <MenuContext.Provider value={{ menu }}>
      <Header />
      {children}
      <Footer />
    </MenuContext.Provider>
  );
};

export default Layout;
