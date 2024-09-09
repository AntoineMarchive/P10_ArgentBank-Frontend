import { Header } from "../components/Header.jsx";
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