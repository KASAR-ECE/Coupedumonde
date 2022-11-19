import { useEffect, useState } from "react";
import Router from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import UserContextProvider from "../../context/UserContext";
import cookie from "cookie";
import jwt_decode from "jwt-decode";

export default function Users({ token }){
  const [deleteerror, setdeleteerror] = useState("");
    const [users, setUsers] = useState(null);
    const { admin,signIn, newadmin } = useContext(UserContextProvider);

    function deleteserv(e,index,username){
      
    
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
    fetch(url + "/admin/deleteuser", {
      method: "POST",
      withCredntials: true,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
      }),
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (data && data.error) {
          setdeleteerror(data.message);
        }
        if (data && !data.error) {

          document.getElementById("table").deleteRow(index + 1)
        }
      });
  }


    useEffect(() => {
      console.log("onz")
      if (typeof token !== "undefined") {
        var decode = jwt_decode(token);
        signIn(decode.username);
        if(decode.is_admin==true){
          newadmin();
        }

      }

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
        const userdata = await (await fetch(url + "/admin/getusers",{
          withCredntials: true,
          credentials: "include",
        })
        
        ).json();
         if(userdata.status==="success")
         {

          setUsers(userdata.msg);
         }
      };
    dataFetch();
    console.log(users);
    },[]);
return (
<div>
  <Head> <title>Ranking</title> </Head>
<h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-violet-900 text-center">Users</h1>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full" id="table">
                <thead className="bg-white border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      RANKING
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      SCORE
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      USERNAME
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      MAIL
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    ADMIN 
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      DELETE
                    </th>
                  </tr>
                </thead>
                
                {
  users ? 
  users.map((rank,index)=>{
    return(
    
      <tbody key={index}>
                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index+1}
                      </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <p>{rank.score}</p>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {rank.username}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {rank.mail}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

                      {rank.is_admin ? (
                        <p>yes</p>
                      ):(
                        <p>no</p>
                      )}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {
                        rank.is_admin ? (
""
                        ):(
                          <button
                          onClick={e => 
                            deleteserv(e,index,rank.username)
                          }
                          type="submit"
                          className="bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300 text-white font-bold py-2 px-4 rounded focus:outline-none "
                        > Delete </button>
                        )
                      }
                      <p> {deleteerror}</p>

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

Users.getInitialProps = ({ req, res }) => {
  const data = cookie.parse(req ? req.headers.cookie || "" : document.cookie);

  return {
      token: data.token,
  };
};