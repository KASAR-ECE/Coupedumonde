import Head from "next/head";
import styles from "../../styles/Home.module.css";
import jwt_decode from "jwt-decode";
import UserContextProvider from "../../context/UserContext";
import { useContext } from "react";
import cookie from "cookie";
import Link from 'next/link';
import { useEffect } from "react";

export default function Admin({ token }) {
    const { newadmin, signIn, admin } = useContext(UserContextProvider);
  useEffect(() => {
    if (typeof token !== "undefined") {
        var decode = jwt_decode(token);
        signIn(decode.username);
        console.log(admin)
        if(decode.is_admin==true){
          console.log("test " + decode.is_admin)
          newadmin();
        }
        console.log("admin" + admin)
      }
  });

    return (
        <div className={styles.container}>
            <Head>
                <title>Kasar</title>
            </Head>
            <main>
                <div className="flex h-full">
                    <div className="bg-kasar2 m-auto">
                        <h1 className="text-center text-6xl">Administration</h1>
                    </div>

                </div>
                <button

                    className="mb-6 bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300 text-white font-bold py-2 px-4 rounded focus:outline-none ml-auto mr-20"
                ><Link href="/admin/matchs">Gérer les matchs</Link></button>
                <button

className="mb-6 bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300 text-white font-bold py-2 px-4 rounded focus:outline-none ml-auto mr-auto"
><Link href="/admin/users">Gérer les utilisateurs</Link></button>
            </main>
        </div>
    );
}

Admin.getInitialProps = ({ req, res }) => {
    const data = cookie.parse(req ? req.headers.cookie || "" : document.cookie);

    return {
        token: data.token,
    };
};
