import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kasar</title>
      </Head>
      <main>
        <div className="flex h-full">
          <div className="bg-kasar m-auto">
            <h1 className="text-center text-6xl">Règles du jeu</h1>
            <ul className="list-disc text-xl">
                <br></br>
  <li>Vous avez la possibilité de parier sur le résultat des matchs et de changer votre pronostic quand vous le souhaitez. Il est impossible de parier sur un match après le coup d’envoi.</li>
  <li>Le score est calculé comme suit : 10*cote annoncée et score x4 si prédiction du score exact </li>
  <li>Les adresses e-mail acceptées sont uniquement les adresses mails attribuées par l’ECE. Tout utilisateur utilisant une autre adresse mail verra son compte supprimé. </li>
  <li>Le jeu commence le dimanche 20/11 et se termine le dimanche 18/12. Le classement définitif sera donné à la fin de la compétition.</li>
  <li>Pour toute question/demande, envoyez un message sur instagram à KASAR ou au BDS. </li>

</ul>
          </div>
        </div>
      </main>
    </div>
  );
}
