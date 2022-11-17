import React, { useState } from "react";
import ButtonQuickVote from "./ButtonQuickVote";
import { useReducer } from "react";
import { reducerVotes, initialVotes } from "./VoteCards_reducer";

const username = "userTest";

const VoteCards = ({ match, dataVote }) => {
  let initialVotesData;
  if (dataVote.length > 0) {
    const isQuickScore =
      dataVote[0].score_away == 1000 || dataVote[0].score_home == 1000;
    const isDraw =
      dataVote[0].score_away == dataVote[0].score_home &&
      dataVote[0].score_away != 0
        ? true
        : false;
    const firstTeamWin =
      !isDraw && dataVote[0].score_home > dataVote[0].score_away ? true : false;
    const secondTeamWin = isDraw ? false : !firstTeamWin;
    initialVotesData = [
      {
        id: 1,
        quickScore: isQuickScore,
        score: dataVote[0].score_home,
        win: firstTeamWin,
        draw: isDraw,
      },
      {
        id: 2,
        quickScore: isQuickScore,
        score: dataVote[0].score_away,
        win: secondTeamWin,
        draw: isDraw,
      },
    ];
  } else {
    initialVotesData = initialVotes;
  }
  const [votes, votesDispatch] = useReducer(reducerVotes, initialVotesData);
  const [showQuickVote, setShowQuickVote] = useState(
    initialVotesData[0].quickScore
  );
  const [isDraw, setIsDraw] = useState(true);
  const [isSaved, setIsSaved] = useState(dataVote.length > 0 ? true : false);
  const [isSavedError, setIsSavedError] = useState(null);

  const voteTeamHandler = (id) => {
    votesDispatch({ type: "VOTE QUICK", id });
    setIsSaved(false);
  };
  const voteScoreTeamHandler = (id, score) => {
    votesDispatch({ type: "VOTE SCORE", id, score });
    setIsSaved(false);
  };

  const matchNulHandler = () => {
    setIsDraw(!isDraw);
    if (isDraw) {
      votesDispatch({ type: "VOTE QUICK NUL" });
    } else {
      votesDispatch({ type: "UNVOTE QUICK NUL" });
    }
    setIsSaved(false);
  };

  const saveVoteHandler = async () => {
    const voteObj = {
      username: username,
      game_ID: match.match_id,
      score_home: votes[0].score,
      score_away: votes[1].score,
    };
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

    const saveMsg = await (
      await fetch(url + "/votes/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(voteObj),
        withCredntials: true,
        credentials: "include",
      })
    ).json();

    if (saveMsg.status === "success") {
      setIsSaved(true);
    } else if (saveMsg.status === "error") {
      setIsSavedError(true);
    }
  };

  const showQuickVoteButton = (
    <div className="text-center">
      <button
        onClick={() => {
          setShowQuickVote(false);
        }}
        className=" text-kasar1 font-bold bg-white border border-kasar2 rounded-lg p-2 hover:bg-kasar3 my-2"
      >
        Bet Scores
      </button>
    </div>
  );
  const hideQuickVoteButton = (
    <div className="text-center">
      <button
        onClick={() => {
          setShowQuickVote(true);
        }}
        className="text-kasar1 font-bold bg-white border border-kasar2 rounded-lg p-2 hover:bg-kasar3 my-2"
      >
        Hide Scores
      </button>
    </div>
  );

  const ControlButton = (props) => {
    const color = isSavedError
      ? "bg-error"
      : isSaved
      ? "bg-valide"
      : "bg-kasar3";
    return (
      <div className="text-center flex">
        <div className="flex-1">{props.children}</div>
        <div className="flex-1">
          <button
            onClick={saveVoteHandler}
            className={`text-kasar1 font-bold ${color} border border-kasar2 rounded-lg p-2 hover:bg-kasar3 my-2`}
          >
            {isSavedError ? "Error!" : isSaved ? "Saved" : "Save Vote"}
          </button>
        </div>
      </div>
    );
  };

  let color = "bg-kasar3";
  if (votes[0].draw || votes[0].draw === "true") {
    color = "bg-draw text-white";
  } else {
    color = "bg-white";
  }
  const matchDate = new Date(match.date);
  const monthNumber = matchDate.getMonth();
  const dayNumber = matchDate.getDate();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const jourSemaine = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const dayString = jourSemaine[matchDate.getDay()];
  const hour = matchDate.getHours();
  const minutes =
    (matchDate.getMinutes() < 10 ? "0" : "") + matchDate.getMinutes();

  return (
    <div className="place-items-center">
    <div
      key={match.match_id}
      className="p-6 rounded-lg border border-gray-200 shadow-md bg-kasar1 place-items-center max-w-md"
    >
      <div className="max-w-md text-center items-center">
        <h5 className="flex-1 mb-2 text-2xl font-bold tracking-tight text-white max-w-[100%] m-auto">
          {dayString +
            " " +
            dayNumber +
            "/" +
            monthNumber +
            " à " +
            hour +
            ":" +
            minutes}
        </h5>
        <h5 className="flex-1 mb-2 text-2xl font-bold tracking-tight text-white max-w-[100%] m-auto">
          {match.home_team}
        </h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white max-w-[100%]">
          {" "}
          - VS -{" "}
        </h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white max-w-[100%]">
          {match.away_team}
        </h5>
        <ControlButton>
          {showQuickVote ? showQuickVoteButton : hideQuickVoteButton}
        </ControlButton>
        <div className="flex justify-between my-auto">
          <ButtonQuickVote
            equipeName={match.home_team}
            quickScoreVote={showQuickVote}
            state={votes[0]}
            setQuickVote={() => voteTeamHandler(1)}
            setScoreVote={(score) => voteScoreTeamHandler(1, score)}
          />
          {showQuickVote ? (
            <button
              onClick={matchNulHandler}
              className={`text-kasar1 font-bold ${color} border border-kasar2 rounded-lg p-1 hover:validate my-auto h-8`}
            >
              Match Nul
            </button>
          ) : null}
          <ButtonQuickVote
            equipeName={match.away_team}
            quickScoreVote={showQuickVote}
            state={votes[1]}
            setQuickVote={() => voteTeamHandler(2)}
            setScoreVote={(score) => voteScoreTeamHandler(2, score)}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default VoteCards;
