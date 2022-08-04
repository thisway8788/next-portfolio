import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <h1>Layout</h1>
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
