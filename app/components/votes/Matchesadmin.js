import React, { useState } from "react";
import Script from 'next/script'

const Matchesonly = ({ match, dataVote }) => {
    const [isDraw, setIsDraw] = useState(true);
    const [dataHeure, setdataHeure] = useState(null);
    const [dataHome_team, setdataHome_team] = useState(null);
    const [dataAway_team, setdataAway_team] = useState(null);
    const [dataScore_home, setdataScore_home] = useState(null);
    const [dataScore_away, setdataScore_away] = useState(null);
    let color = "bg-kasar3";
    const [startDate, setStartDate] = useState(new Date());

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
    function handleSubmit(e, docker) {
        e.preventDefault();

        //call api
        let url = "";
        const match_id = match.match_id
        var team_away = dataAway_team
        var team_home = dataHome_team
        var hour = dataHeure
        if (dataAway_team == null) {
            team_away = match.away_team
        }
        if (dataHome_team == null) {
            team_home = match.home_team
        }
        if (dataHeure == null) {
            hour = match.date
        }
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
        fetch(url + "/admin/modify", {
            method: "POST",
            withCredntials: true,
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                hour,
                team_home,
                team_away,
                match_id,

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
    return (
        <div className="place-items-center">
            <div
                key={match.match_id}
                className="p-6 rounded-lg border border-gray-200 shadow-md bg-kasar1 place-items-center max-w-md">
                <form
                    className=""
                    onSubmit={handleSubmit}
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
                        <input className="flex-1 mb-2 text-2xl font-bold tracking-tight text-white max-w-[100%] m-auto bg-kasar1 outline outline-2  outline-offset-2 text-center"
                            value={dataHome_team}
                            defaultValue={match.home_team}
                            onChange={(e) => setdataHome_team(e.target.value)}
                        />
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white max-w-[100%]">
                            {" "}
                            - VS -{" "}
                        </h5>
                        <input className="flex-1 mb-2 text-2xl font-bold tracking-tight text-white max-w-[100%] m-auto bg-kasar1 outline outline-2  outline-offset-2 text-center"
                            value={dataAway_team}
                            defaultValue={match.away_team}
                            onChange={(e) => setdataAway_team(e.target.value)}
                        />
                        <input className="flex-1 mb-2 text-2xl font-bold tracking-tight text-white max-w-[100%] m-auto bg-kasar1 outline outline-2  outline-offset-2 text-center"
                            value={dataScore_home}
                            defaultValue="Score home"
                            onChange={(e) => setdataAway_team(e.target.value)}
                        />
                        <input className="flex-1 mb-2 text-2xl font-bold tracking-tight text-white max-w-[100%] m-auto bg-kasar1 outline outline-2  outline-offset-2 text-center"
                        value={dataScore_home}
                        defaultValue="Score away"
                        onChange={(e) => setdataAway_team(e.target.value)}
                    />

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
};

export default Matchesonly;
