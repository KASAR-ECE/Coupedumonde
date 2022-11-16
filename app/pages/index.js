import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import jwt_decode from "jwt-decode";

export default function Home({token}) {
  var decoded=jwt_decode(token);
  console.log(decoded)

  var username = decoded["username"]

  

  return (
    <div className={styles.container}>
      <Head>
        <title>Kasar</title>
      </Head>
      <main>
        <div className="flex h-full">
          <div className="bg-kasar2 m-auto">
            <h1 className="text-center text-6xl">Welcome on our website !</h1>
            <p>Bienvenue, {username}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export function getServerSideProps({req,ress}){

  return{props : {token: req.cookies.token}};
}
