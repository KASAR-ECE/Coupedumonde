import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kasar</title>
      </Head>
      <main>
       
          <div>
            <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-violet-900 text-center">BDS X KASAR</h1>
            <h2 className="font-medium leading-tight text-5xl mt-0 mb-2 text-violet-900 text-center">WORLD CUP QATAR 2022</h2>
            <img src="Kasar.png"alt="Kasar"/>

          </div>
       
      </main>
    </div>
  );
}
