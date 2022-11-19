import { useEffect, useState } from "react";
import Router from "next/router";
import Head from "next/head";
import Link from "next/link";

const RankingPage = () => {

  const [ranks, setRanks] = useState(null);

  useEffect(() => {
    const dataFetch = async ()=>{
   

    //call api
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
    const rankingdata = await (await fetch(url + "/ranking/")).json();
     if(rankingdata.status==="success")
     {
setRanks(rankingdata.msg);
     }
  };
dataFetch();
console.log(ranks);
},[]);
return (
<div>
  <Head> <title>Ranking</title> </Head>
<h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-violet-900 text-center">Les Meilleurs Parieurs</h1>

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
                
                {
  ranks ? 
  ranks.map((rank,index)=>{
    return(
    
      <tbody key={index}>
                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <p>{rank.username}</p>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {rank.score}
                    </td>
                  </tr>
                  </tbody>
     
    )
               
  
  }):null
 
}

  </table>
</div>
</div>
</div>
</div>
</div>
);
};

export default RankingPage;
