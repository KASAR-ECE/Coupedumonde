import Head from "next/head";
import styles from "../styles/Home.module.css";
import jwt_decode from "jwt-decode";
import Context from "../context/UserContext";
import { useContext, useEffect } from "react";
import Image from "next/image"
import cookie from "cookie";
import getScore from "../context/getScore";
import BDS from '../../BDS.png';
import Kasar from '../../Kasar.png';

export default function Home({ token }) {
  const { username, signIn, admin, newadmin } = useContext(Context);

  useEffect(() => {
    let tokenUsername = null;
    if (typeof token !== "undefined" && !username) {
      //page reaload -> restore username from cookie and fetch the score from api
      var decode = jwt_decode(token);
      tokenUsername = decode.username;
      console.log(decode)
      if (decode.is_admin == true) {
        console.log("test " + decode.is_admin)
        console.log("test2 " + admin)
        newadmin();
        console.log("test2 " + admin)
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
        <div className="flex h-full">
          <div className="m-auto">
            <h2 className="text-center text-2xl">Bienvenue sur notre site</h2>
            <div className="flex">
              <Image src={BDS} className="bg-kasar1 w-32 h-32 rounded-[50%]" alt="BDS Logo" />
              <Image src={Kasar} className="bg-kasar1 w-32 h-32 rounded-[50%]" alt="Kasar-ai Logo" />
            </div>
            <h1 className="text-center text-5xl">KASAR x BDS</h1>
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
