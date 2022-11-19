import React, { useContext, useState } from "react";
import Router from "next/router";
import cookie from "js-cookie";
import Head from "next/head";
import Link from "next/link";
import Context from "../context/UserContext"

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [signupValidation, setSignupValidation] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(Context);


  function handleSubmit(e, docker) {
    e.preventDefault();

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
    fetch(url + "/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (data && data.error) {
          setLoginError(data.message);
        }
        if (data && data.token) {
          //set cookie
          setLoginError(null);
          cookie.set("token", data.token, { expires: 10 });
          setSignupValidation("You are registered, you will be redirected");

          signIn(data.username, data.score) // Set context's data 
          setTimeout(() => {
            Router.push("/");
          }, 2000);
        }
      });
  }
  return (
    <div className="grid place-items-center mt-24">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Login</title>
      </Head>

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <p className="block text-gray-700 text-xl font-bold mb-4">Login</p>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="username"
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required="required"
        />
        <label className="mt-4 block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required="required"
        />
        {loginError && <p style={{ color: "red" }}>{loginError}</p>}
        {signupValidation && (
          <p style={{ color: "green" }}>{signupValidation}</p>
        )}
        <div className="flex justify-evenly mt-4">
          <input
            type="submit"
            value="Submit"
            className="bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300 text-white font-bold py-2 px-4 rounded "
          />
          <p className="mt-auto text-sm mb-auto text-gray-700">
            <Link href="/signup">No account ?</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
