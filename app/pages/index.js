import Head from "next/head";
import styles from "../styles/Home.module.css";
import jwt_decode from "jwt-decode";
import UserContextProvider from "../context/UserContext";
import { useContext, useEffect } from "react";
import cookie from "cookie";
import getScore from "../context/getScore";
import logo from './/../../BDS.png';

export default function Home({ token }) {
  const { username, signIn, admin, newadmin } = useContext(UserContextProvider);

  useEffect(() => {
    let tokenUsername = null;
    if (typeof token !== "undefined" && !username) {
      //page reaload -> restore username from cookie and fetch the score from api
      var decode = jwt_decode(token);
      tokenUsername = decode.username;
      if (decode.is_admin == true) {
        console.log("test " + decode.is_admin)
        newadmin();
      }
    }

    const dataFetch = async () => {
      let url = "";
      if (
        !window.location.origin.includes("3000") &&
        window.location.hostname == "localhost"
      ) {
        url = "http://localhost/api";
      } else if (
        window.location.hostname == "localhost" &&
        window.location.origin.includes("3000")
      ) {
        url = "http://localhost:8080";
      } else {
        url = window.location.origin + "/api";
      }

      if (tokenUsername) {
        //user has been restored from cookie, now restore the score
        const scoreUser = await getScore(url, tokenUsername);
        signIn(decode.username, scoreUser);
      }
    };

    dataFetch();
  }, [token])


  return (
    <div className={styles.container}>
      <Head>
        <title>Kasar</title>
      </Head>
      <main>
       
          <div>
            <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-violet-900 text-center">BDS X KASAR</h1>
            <h2 className="font-medium leading-tight text-5xl mt-0 mb-2 text-violet-900 text-center">WORLD CUP QATAR 2022</h2>
            <img src= {logo} alt="image"/>
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
