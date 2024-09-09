import { Header } from "../components/header.jsx";
import { Footer } from "../components/footer.jsx";
import { Children } from "react";


export function Layout({ children }) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }