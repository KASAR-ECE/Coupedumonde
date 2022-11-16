import Layout from "../components/layout/Layout";
import { ContextProvider } from "../context/UserContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ContextProvider>
  );
}

export default MyApp;
