
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
    const voteHandler = (equipe) => {
        console.log("Vote pour l'équipe " + equipe)
    }

    return (
        <div>
            {db.map((match, index) => {
                return (
                    <div key={index} className="p-6 max-w-s rounded-lg border border-gray-200 shadow-md bg-kasar1">
                        <div className="max-w-md">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">{match.equipe1} - VS - {match.equipe2}</h5>
                            <div className="flex justify-between ">
                                <div>
                                    <button onClick={() => { voteHandler(match.equipe1) }}
                                        className="text-kasar1 font-bold bg-white border border-kasar2 rounded-lg p-2
                                        hover:bg-kasar3">{match.equipe1}</button>
                                    <input type="number" />
                                </div>
                                <div>
                                    <button onClick={() => { voteHandler(match.equipe2) }}
                                        className="text-kasar1 font-bold bg-white border border-kasar2 rounded-lg p-2
                                    hover:bg-kasar3">{match.equipe2}</button>
                                    <input type="number" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default votePage