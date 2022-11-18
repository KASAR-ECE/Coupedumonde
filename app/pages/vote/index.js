import { useEffect, useState } from "react";
import VoteCards from "../../components/votes/VoteCards";
import cookie from "cookie";
import jwt_decode from "jwt-decode";
import UserContextProvider from "../../context/UserContext";
import { useContext } from "react";
const username = "userTest";
import countryFlagEmoji from "country-flag-emoji";

export default function votePage({ token }) {
  const [dataGames, setDataGames] = useState(null);
  const [dataGamesError, setDataGamesError] = useState(null);
  const [dataVotes, setDataVotes] = useState(null);
  const [dataVotesError, setDataVotesError] = useState(null);
  const { user, signIn, signOut } = useContext(UserContextProvider);

  useEffect(() => {
    console.log(countryFlagEmoji.data)
    if (typeof token !== "undefined") {
      var decode = jwt_decode(token);
      signIn(decode.username);
    }
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
      const games = await (await fetch(url + "/games/")).json();
      const votes = await (await fetch(url + "/votes/" + username)).json();
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
    <div>
      {dataGames ? (
        dataGames.map((match, index) => {
          return (
            <div className="p-2" key={index}>
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
    </div>
  );
}

votePage.getInitialProps = ({ req, res }) => {
  const data = cookie.parse(req ? req.headers.cookie || "" : document.cookie);

  return {
    token: data.token,
  };
};
