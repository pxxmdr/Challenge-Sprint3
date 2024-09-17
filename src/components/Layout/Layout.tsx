import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

interface LayoutProps {
  navItems?: { title: string; link: string; target?: string }[];
  children: React.ReactNode;
  pageTitle?: string;
}

export const Layout = ({ children, navItems, pageTitle }: LayoutProps) => {
  return (
    <div>
      <Header pageTitle={pageTitle} navItems={navItems} />
      <div
        style={{
          paddingInline: "10rem",
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};
