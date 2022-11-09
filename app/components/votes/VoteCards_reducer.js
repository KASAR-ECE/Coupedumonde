export const initialVotes = [
    {
        id: 1,
        quickScore: true,
        score: -1,
        win: false,
        draw: false,
    },
    {
        id: 2,
        quickScore: true,
        score: -1,
        win: false,
        draw: false,
    }
];

export const reducerVotes = (state, action) => {
    switch (action.type) {
        case "VOTE QUICK": {
            if (action.id != null) {
                let newState = state.map((vote) => { //update the state for the winner team
                    if (vote.id === action.id) {
                        return { ...vote, quickScore: true, win: !vote.win, score: 1000 };
                    } else {
                        if (vote.quickScore) { return vote; } //quickVote already set
                        else { return { ...vote, quickScore: true, win: false, score: -1 } } // reintialized to quickScore setup
                    }
                });
                if (newState[0].win && newState[1].win) {
                    newState = newState.map((vote) => { //update the state for the winner team
                        return { ...vote, draw: true };
                    });
                }
                else {
                    newState = newState.map((vote) => { //check if both team win => it's a draw
                        return { ...vote, draw: false };
                    });
                }
                return newState;
            } else return state;
        }
        case "VOTE QUICK NUL": {
            return state.map((vote) => { //update the state for the winner team
                return { ...vote, draw: true, score: 1000 };
            });;
        }
        case "UNVOTE QUICK NUL": {
            return state.map((vote) => { //update the state for the winner team
                return { ...vote, draw: false, score: 0, win: false };
            });;
        }
        case "VOTE SCORE": {
            if (action.id != null) {
                let newState = state.map((vote) => { //update the score 
                    if (vote.id === action.id) {
                        return { ...vote, quickScore: false, score: action.score, win: 'true' };
                    } else {
                        if (vote.quickScore) { //initialize the other one to score with 0
                            return { ...vote, quickScore: false, win: false, score: 0 };
                        } else {
                            return vote
                        }
                    }
                });
                if (newState[0].score == newState[1].score) {
                    newState = newState.map((vote) => { //update the state for the winner team
                        return { ...vote, draw: true };
                    });
                } else {
                    newState[0].draw = false;
                    newState[1].draw = false;
                    if (newState[0].score > newState[1].score) { //team 1 should win
                        newState[0].win = true;
                        newState[1].win = false;
                    }
                    else if (newState[0].score < newState[1].score) { //team 2 should win
                        newState[0].win = false;
                        newState[1].win = true;
                    } else { //default
                        newState[0].win = false;
                        newState[1].win = false;
                    }
                }
                return newState;
            } else return state;
        }
        default: {
            // console.log("Erreur dispatch for part summary");
            return state;
        }
    }
};
