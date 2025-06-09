import type { ReactNode } from 'react';

import Header from "../Header/Header";
import './Layout.css'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
    </>
  );
};

export default Layout;