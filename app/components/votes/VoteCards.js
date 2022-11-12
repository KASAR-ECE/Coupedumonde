import React, { useState } from 'react'
import ButtonQuickVote from './ButtonQuickVote';
import { useReducer } from "react";
import { reducerVotes, initialVotes } from "./VoteCards_reducer";


const VoteCards = ({ match, id }) => {
    const [showQuickVote, setShowQuickVote] = useState(false);
    const [isDraw, setIsDraw] = useState(false);
    const [votes, votesDispatch] = useReducer(reducerVotes, initialVotes);

    const voteTeamHandler = (id) => {
        votesDispatch({ type: "VOTE QUICK", id })
    }
    const voteScoreTeamHandler = (id, score) => {
        votesDispatch({ type: "VOTE SCORE", id, score })
    }

    const matchNulHandler = () => {
        setIsDraw(!isDraw);
        if (isDraw) { votesDispatch({ type: "VOTE QUICK NUL" }) }
        else { votesDispatch({ type: "UNVOTE QUICK NUL" }) }
    }

    const saveVoteHandler = () => {

    }

    const showQuickVoteButton = (
        <div className="text-center">
            < button onClick={() => { setShowQuickVote(true) }}
                className=" text-kasar1 font-bold bg-white border border-kasar2 rounded-lg p-2 hover:bg-kasar3 my-2">Bet Scores</button>
        </div>
    )
    const hideQuickVoteButton = (
        <div className="text-center">
            < button onClick={() => { setShowQuickVote(false) }}
                className="text-kasar1 font-bold bg-white border border-kasar2 rounded-lg p-2 hover:bg-kasar3 my-2">Hide Scores</button>
        </div>
    )

    const ControlButton = (props) => {
        return (
            <div className="text-center flex">
                <div className="flex-1">
                    {props.children}
                </div>
                <div className="flex-1">
                    < button onClick={saveVoteHandler}
                        className="text-kasar1 font-bold bg-white border border-kasar2 rounded-lg p-2 hover:bg-kasar3 my-2">Save Vote</button>
                </div>
            </div >
        )
    }


    let color = "bg-kasar3";
    if (votes[0].draw || votes[0].draw === 'true') { color = 'bg-draw text-white' }
    else { color = 'bg-white' }
    const matchDate = new Date(match.date);
    const monthNumber = matchDate.getMonth();
    const dayNumber = matchDate.getDate();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const jourSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const dayString = jourSemaine[matchDate.getDay()];
    const hour = matchDate.getHours();
    const minutes = (matchDate.getMinutes() < 10 ? '0' : '') + matchDate.getMinutes();


    return (
        <div key={id} className="p-6 rounded-lg border border-gray-200 shadow-md bg-kasar1">
            <div className="max-w-md text-center items-center">
                <h5 className="flex-1 mb-2 text-2xl font-bold tracking-tight text-white max-w-[100%] m-auto">{dayString + " " + dayNumber + "/" + monthNumber + " à " + hour + ":" + minutes}</h5>
                <h5 className="flex-1 mb-2 text-2xl font-bold tracking-tight text-white max-w-[100%] m-auto">{match.home_team}</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white max-w-[100%]"> - VS - </h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white max-w-[100%]">{match.away_team}</h5>

                <ControlButton>
                    {showQuickVote ? hideQuickVoteButton : showQuickVoteButton}
                </ControlButton>
                <div className="flex justify-between my-auto">
                    <ButtonQuickVote
                        equipeName={match.home_team}
                        quickScoreVote={showQuickVote}
                        state={votes[0]}
                        setQuickVote={() => voteTeamHandler(1)}
                        setScoreVote={(score) => voteScoreTeamHandler(1, score)} />
                    {showQuickVote ? null : <button
                        onClick={matchNulHandler}
                        className={`text-kasar1 font-bold ${color} border border-kasar2 rounded-lg p-1 hover:validate my-auto h-8`}>
                        Match Nul
                    </button>}
                    <ButtonQuickVote
                        equipeName={match.away_team}
                        quickScoreVote={showQuickVote}
                        state={votes[1]}
                        setQuickVote={() => voteTeamHandler(2)}
                        setScoreVote={(score) => voteScoreTeamHandler(2, score)} />
                </div>
            </div>
        </div>
    )
}

export default VoteCards