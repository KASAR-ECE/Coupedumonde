import { useEffect, useState } from "react";
import VoteCards from "../../components/votes/VoteCards";

const username = "userTest";

const votePage = () => {
  const [dataGames, setDataGames] = useState(null);
  const [dataGamesError, setDataGamesError] = useState(null);
  const [dataVotes, setDataVotes] = useState(null);
  const [dataVotesError, setDataVotesError] = useState(null);

  useEffect(() => {
    // fetch games data
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
};

export default votePage;
