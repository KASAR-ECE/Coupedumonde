import Footer from "./Footer";
import Navbar from "./Header";

function Layout(props) {
  return (
    <div className="flex flex-col h-screen ">
      <Navbar />
      <div className="mb-auto">{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;