import React from "react";
import MetaTags from "@components/MetaTags/MetaTags";
import { LayoutWrapper } from "./Layout.styled";

type IProps = {
  children: React.ReactNode;
  meta?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
};

const Layout: React.FC<IProps> = ({ children, meta }) => {
  return (
    <LayoutWrapper>
      <MetaTags meta={meta} />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
