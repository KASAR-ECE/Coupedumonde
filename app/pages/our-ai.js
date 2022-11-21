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
            <h1 className="text-center text-4xl font-font1 my-8 bg-purple-300 rounded-tr-3xl rounded-bl-3xl">Les pronostics de Kasar.AI</h1>
            <br></br>
            <Image src={PredictAi} className="w-full h-auto" alt="Prédictions résulat des poules Coupe du monde 2022" />
            <Image src={PredictAiFin} className="w-full h-auto" alt="Prédictions résulat de la Coupe du monde 2022" />
          </div>
        </div>
      </main>
    </div>
  );
}
