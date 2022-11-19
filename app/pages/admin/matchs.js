import { useEffect, useState } from "react";
import VoteCards from "../../components/votes/Matchesadmin";
import cookie from "cookie";
import jwt_decode from "jwt-decode";
import UserContextProvider from "../../context/UserContext";
import { useContext } from "react";
import Head from "next/head";
import Router from "next/router";


export default function votePage({ token }) {
    const [dataGames, setDataGames] = useState(null);
    const [dataGamesError, setDataGamesError] = useState(null);
    const [dataVotes, setDataVotes] = useState(null);
    const [dataVotesError, setDataVotesError] = useState(null);
    const [dataHeure, setdataHeure] = useState(null);
    const [dataHome_team, setdataHome_team] = useState(null);
    const [dataAway_team, setdataAway_team] = useState(null);

    if (typeof token !== "undefined") {
        var decode = jwt_decode(token);
        const { user, signIn, signOut } = useContext(UserContextProvider);
        signIn(decode.username);
    }
    function handleSubmit(e, docker) {
        e.preventDefault();
    
        //call api
        let url = "";
    
        if (
          !window.location.origin.includes("3000") &&
          window.location.hostname == "localhost"
        ) {
          url = "http://localhost/api";
          console.log("oui");
        } else if (
          window.location.hostname == "localhost" &&
          window.location.origin.includes("3000")
        ) {
          url = "http://localhost:8080";
          console.log("oui");
        } else {
          url = window.location.origin + "/api";
        }
        fetch(url + "/admin/addmatch", {
          method: "POST",
          withCredntials: true,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dataHeure,
            dataHome_team,
            dataAway_team,
          }),
        })
          .then((r) => {
            return r.json();
          })
          .then((data) => {
            if (data && data.error) {
              setLoginError(data.message);
            }
            if (data && !data.error) {
              console.log("oui");
              //set cookie
              Router.push("/admin/matchs");

              
            }
          });
      }
    useEffect(() => {
        // fetch games data
        let url = "";
        if (
            !window.location.origin.includes("3000") &&
            window.location.hostname == "localhost"
        ) {
            url = "http://localhost/api";
            console.log("oui");
        } else if (
            window.location.hostname == "localhost" &&
            window.location.origin.includes("3000")
        ) {
            url = "http://localhost:8080";
            console.log("oui");
        } else {
            url = window.location.origin + "/api";
        }
        const dataFetch = async () => {
            const games = await (
                await fetch(url + "/games/", {
                    withCredntials: true,
                    credentials: "include",
                })
            ).json();
            const votes = await (
                await fetch(url + "/votes/", {
                    withCredntials: true,
                    credentials: "include",
                })
            ).json();
            // set state when the data received
            if (games.status === "success") {
                setDataGames(games.msg);
            } else {
                setDataGamesError("Cannot load the data for the games... Try later.");
            }
            if (votes.status === "success") {
                setDataVotes(votes.msg);
            } else {
                setDataVotesError(
                    "Cannot load the votes for the user... Save your votes first or try later."
                );
            }
        };

        dataFetch();
    }, []);

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 content-start">
            <Head>
                <title>Vote</title>
            </Head>
            {dataGames ? (
                dataGames.map((match, index) => {
                    return (
                        <div className="p-2 inline" key={index}>
                            <VoteCards
                                match={match}
                                key={index}
                                dataVote={
                                    dataVotes
                                        ? dataVotes.filter((vote) => vote.game_ID == index + 1)
                                        : []
                                }
                            />

                        </div>
                    );
                })
            ) : dataGamesError ? (
                <p>{dataGamesError}</p>
            ) : null}
            <div
                className="p-6 rounded-lg border border-gray-200 shadow-md bg-kasar1 place-items-center max-w-md">
                <form
                    className=""
                    onSubmit={handleSubmit}
                >
                    
                    <div className="max-w-md text-center items-center">
                        <p className="flex-1 mb-4 text-2xl font-bold tracking-tight text-white max-w-[100%] m-auto bg-kasar1"> Add a match</p>
                    <input className="flex-1 mb-4 text-2xl font-bold tracking-tight text-white max-w-[100%] m-auto bg-kasar1 outline outline-2  outline-offset-2 "
                       name="dataHeure"
                       value={dataHeure}
                       onChange={(e) => setdataHeure(e.target.value)}
                       required="required" 
                        
                        
                        >
                            
                        </input>
                        <input className="flex-1 mb-2 text-2xl font-bold tracking-tight text-white max-w-[100%] m-auto bg-kasar1 outline outline-2  outline-offset-2 text-center"
                       name="dataHome_team"
                       value={dataHome_team}
                       onChange={(e) => setdataHome_team(e.target.value)}
                       required="required" 
                        
                        
                        >
                            
                        </input>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white max-w-[100%] m-auto">
                            
                            - VS -
                        </h5>
                        <input className="flex-1 mb-2 text-2xl font-bold tracking-tight text-white max-w-[100%] m-auto bg-kasar1 outline outline-2  outline-offset-2 text-center"
                        name="dataAway_team"
                        value={dataAway_team}
                        onChange={(e) => setdataAway_team(e.target.value)}
                        required="required"
                        
                        >
                            
                        </input>

                        <input
            type="submit"
            value="Submit"
            className="bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300 text-white font-bold py-2 px-4 rounded focus:outline-none "
          />
                    </div>
                    </form>
            </div>
            
        </div>
    );
}

votePage.getInitialProps = ({ req, res }) => {
    const data = cookie.parse(req ? req.headers.cookie || "" : document.cookie);

    return {
        token: data.token,
    };
};
