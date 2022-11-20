import Head from "next/head";
import styles from "../styles/Home.module.css";
import jwt_decode from "jwt-decode";
import UserContextProvider from "../context/UserContext";
import { useContext } from "react";
import cookie from "cookie";

export default function Home({ token }) {
  if (typeof token !== "undefined") {
    var decode = jwt_decode(token);
    const { user, signIn, signOut } = useContext(UserContextProvider);
    signIn(decode.username);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Kasar</title>
      </Head>
      <main>
       
          <div>
            <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-violet-900 text-center">BDS X KASAR</h1>
            <h2 className="font-medium leading-tight text-5xl mt-0 mb-2 text-violet-900 text-center">WORLD CUP QATAR 2022</h2>
            <img src=".. /..Kasar.png" className="max-w-full h-auto" alt="..." />

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
