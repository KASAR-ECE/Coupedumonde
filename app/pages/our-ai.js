import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from 'react';
import Image from "next/image";
import PredictAi from "./../img/8EME.png"
import PredictAiFin from "./../img/fin.png"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kasar</title>
      </Head>
      <main>
        <div className="flex h-full">
          <div className="bg-kasar m-auto">
            <h1 className="text-center text-6xl">Les pronostics de Kasar.AI</h1>
            <br></br>
            {/* <img style={{width: 50, height: 50}} resizeMode={'cover'} src={require('.//../../app/public/android-chrome-512x512.png')} /> */}
            <Image src={PredictAi} className="w-full h-auto" />
            <Image src={PredictAiFin} className="w-full h-auto" />
          </div>
        </div>
      </main>
    </div>
  );
}
