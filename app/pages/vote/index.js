import { useEffect, useState } from "react"
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
    const [data, setData] = useState(null);

    useEffect(() => {
        // fetch games data
        const dataFetch = async () => {
            const games = await (
                await fetch("http://localhost:8080/games/")
            ).json();
            // set state when the data received
            setData(games);
        };

        dataFetch();
    }, []);

    console.log(data);


    return (
        <div>
            {data ? data.msg.map((match, index) => {
                return (
                    <div className="p-2" key={index}>
                        <VoteCards match={match} id={index} key={index} />
                    </div>
                )
            }) : null}
        </div>
    )
}

export default votePage