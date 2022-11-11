import { useState } from "react"
import ButtonQuickVote from "../../components/votes/ButtonQuickVote"
import VoteCards from "../../components/votes/VoteCards"

const db = [
    {
        equipe1: "France",
        equipe2: "Allemagne",
        date: ""
    },
    {
        equipe1: "Bresil",
        equipe2: "Portugal",
    },
    {
        equipe1: "Japon",
        equipe2: "Corée du Nord",
    },
]

const votePage = () => {


    return (
        <div>
            {db.map((match, index) => {
                return (
                    <div className="p-2" key={index}>
                        <VoteCards match={match} id={index} key={index} />
                    </div>
                )
            })}
        </div>
    )
}

export default votePage