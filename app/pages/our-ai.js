import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from 'react';
import Image from "next/image";
import PredictAi from "../img/8EME.png"
import PredictAi1 from "../img/8EME_1.png"
import PredictAi2 from "../img/8EME_2.png"
import PredictAi3 from "../img/8EME_3.png"
import PredictAi4 from "../img/8EME_4.png"
import PredictAi5 from "../img/8EME_5.png"
import PredictAi6 from "../img/8EME_6.png"
import PredictAi7 from "../img/8EME_7.png"
import PredictAi8 from "../img/8EME_8.png"
import PredictAiFin from "../img/fin.png"

export default function Home() {
  const predictions = [PredictAi1, PredictAi2, PredictAi3, PredictAi4, PredictAi5, PredictAi6, PredictAi7, PredictAi8]
  return (
    <div className={styles.container}>
      <Head>
        <title>Kasar</title>
      </Head>
      <main>
        <div className="flex w-full h-full">
          <div className="bg-kasar m-auto">
            <h1 className="text-center text-4xl font-font1 my-8 bg-purple-300 rounded-tr-3xl rounded-bl-3xl">Les pronostics de Kasar.AI</h1>
            <div className="flex flex-wrap md:hidden w-full h-full p-2 bg-white items-center">
              {predictions.map((predict, index) => {
                return (
                  <div key={index} className="flex-2  m-auto w-[48%] rounded-3xl">
                    <Image src={predict} className="w-full h-auto rounded-3xl" alt="Prédictions résulat des poules Coupe du monde 2022" />
                  </div>
                )
              })}
            </div>
            <Image src={PredictAi} className="w-full h-auto invisible md:visible" alt="Prédictions résulat des poules Coupe du monde 2022" />
            <Image src={PredictAiFin} className="w-full h-auto" alt="Prédictions résulat de la Coupe du monde 2022" />
          </div>
        </div>
      </main>
    </div>
  );
}
