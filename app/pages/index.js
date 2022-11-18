import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import jwt_decode from "jwt-decode";
import UserContextProvider from "../context/UserContext";
import { useContext, useEffect } from "react";
import cookie from "cookie";

export default function Home({ token }) {
  const { user, signIn, signOut } = useContext(UserContextProvider);

  useEffect(() => {
    if (typeof token !== "undefined") {
      var decode = jwt_decode(token);
      signIn(decode.username);
    }
  }, [token])

  return (
    <div className={styles.container}>
      <Head>
        <title>Kasar</title>
      </Head>
      <main>
        <div className="flex h-full">
          <div className="bg-kasar2 m-auto">
            <h1 className="text-center text-6xl">Welcome on our website !</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

Home.getInitialProps = ({ req, res }) => {
  const data = cookie.parse(req ? req.headers.cookie || "" : document.cookie);

  return {
    token: data.token,
  };
};
