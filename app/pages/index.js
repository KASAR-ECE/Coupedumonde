import Head from "next/head";
import styles from "../styles/Home.module.css";
import jwt_decode from "jwt-decode";
import Context from "../context/UserContext";
import { useContext, useEffect } from "react";
import Image from "next/image"
import Link from "next/link";
import cookie from "cookie";
import getScore from "../context/getScore";
import BDS from './../img/BDS.png';
import Kasar from './../img/Kasar.png';
import RulesImg from "./../img/rules.jpg"
import VoteImg from "./../img/vote.jpg"
import RankingImg from "./../img/ranking.webp"
import OurAiImg from "./../img/our-ai.jpg"

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

  const pages = [
    { link: "/rules", title: "Rules", img: RulesImg },
    { link: "/vote", title: "Vote", img: VoteImg },
    { link: "/ranking", title: "Ranking", img: RankingImg },
    { link: "/our-ai", title: "Kasar's AI", img: OurAiImg },
  ]


  return (
    <div className={styles.container}>
      <Head>
        <title>Kasar</title>
      </Head>
      <main>
        <div className="flex w-full h-full">
          <div className="m-auto w-full">
            <h1 className="text-center text-4xl font-font1 my-8 bg-purple-300 rounded-tr-3xl rounded-bl-3xl">KASAR x BDS</h1>
            <div className="flex flex-wrap items-center w-full ">
              <div className="flex-1">
                <Image src={Kasar} className="flex-1 w-32 h-32 rounded-[50%] mx-auto" alt="Kasar-ai Logo" />
              </div>
              <div className="flex-1">
                <Image src={BDS} className=" bg-kasar1 w-32 h-32 rounded-[50%] p-1 mx-auto" alt="BDS Logo" />
              </div>
            </div>
            <h2 className="text-center text-2xl font-font1 p-4">Qatar World Cup 2022</h2>
          </div>
        </div>
        <div className="my-4 w-auto h-auto grid grid-cols-2 gap-4">
          {pages.map((page, index) => {
            return (
              <div key={index} className="rounded-2xl text-center ">
                <Link href={page.link}>
                  <Image src={page.img} className="rounded-t-2xl  w-full" alt={page.title} />
                  <h1 className="bg-kasar2 rounded-b-2xl font-font1 font-bold text-white text-xl">{page.title}</h1>
                </Link>
              </div>
            )
          })}
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
