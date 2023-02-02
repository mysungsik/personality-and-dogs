import LayoutHeader from "./layout-header";
import LayoutFooter from "./layout-footer";
import React from "react";
import LayoutAside from "./layout-aside";

const Layout = (props: { children: React.ReactElement }) => {
  return (
    <>
      <LayoutHeader />
      <LayoutAside />
      {props.children}
      <LayoutFooter />
    </>
  );
};

export default Layout;
