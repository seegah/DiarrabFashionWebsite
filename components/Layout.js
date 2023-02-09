import Header from "./Header";
import Footer from "./Footer";
import Notify from "./Notify";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Notify />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
