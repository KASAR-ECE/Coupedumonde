import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Context from "../context/UserContext";

import cookie from "cookie";
import jwt_decode from "jwt-decode";
import getScore from "../context/getScore";

const RankingPage = ({ token }) => {
  const [ranks, setRanks] = useState(null);
  const { username, signIn } = useContext(Context);

  useEffect(() => {
    let tokenUsername = null;
    if (typeof token !== "undefined" && !username) {
      //page reaload -> restore username from cookie and fetch the score from api
      var decode = jwt_decode(token);
      tokenUsername = decode.username;
    }

    const dataFetch = async () => {
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

      //fetch ranking from api
      const rankingdata = await (await fetch(url + "/ranking/")).json();
      if (rankingdata.status === "success") {
        setRanks(rankingdata.msg);
      }

      if (tokenUsername) {
        //user has been restored from cookie, now restore the score
        const scoreUser = await getScore(url, tokenUsername);
        signIn(decode.username, scoreUser);
      }
    };

    dataFetch();
  }, []);

  return (
    <div>
      <Head> <title>Ranking</title> </Head>
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-violet-900 text-center">
        Les Meilleurs Parieurs
      </h1>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      RANKING
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      USERNAME
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      SCORE
                    </th>
                  </tr>
                </thead>
                {ranks
                  ? ranks.map((rank, index) => {
                    return (
                      <tbody key={index}>
                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <p>{rank.username}</p>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {rank.score}
                          </td>
                        </tr>
                      </tbody>
                    );
                  })
                  : null}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RankingPage.getInitialProps = ({ req, res }) => {
  const data = cookie.parse(req ? req.headers.cookie || "" : document.cookie);

  return {
    token: data.token,
  };
};

export default RankingPage;