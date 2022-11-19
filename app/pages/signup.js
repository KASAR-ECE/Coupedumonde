import React, { useState } from "react";
import Router from "next/router";
import cookie from "js-cookie";

const Signup = () => {
  const [signupError, setSignupError] = useState("");
  const [signupValidation, setSignupValidation] = useState("");
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    if (
      passwordConfirmation == password &&
      mail != "" &&
      username != "" &&
      passwordConfirmation != "" &&
      password != ""
    ) {
      setSignupError("");
      e.preventDefault();
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
      fetch(url + "/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail,
          password,
          username,
          passwordConfirmation,
        }),
      })
        .then((r) => r.json())
        .then((data) => {
          if (data && data.error) {
            setSignupError(data.message);
          }
          if (data && data.token) {
            //set cookie
            setSignupError(null);
            cookie.set("token", data.token, { expires: 10 });
            setSignupValidation("You are registered, you will be redirected");
            setTimeout(() => {
              Router.push("/");
            }, 2000);
          }
        });
    } else {
      e.preventDefault();
      setSignupError("Passwords are differents");
    }
  }
  return (
    <div className="grid place-items-center mt-24">
      <title>Sign up</title>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <p className="block text-gray-700 text-xl font-bold mb-4">Sign Up</p>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            type="username"
            required="required"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            value={mail}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            required="required"
          />
        </div>

        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>

          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            required="required"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirm your Password
          </label>

          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            name="password_confirmation"
            type="password"
            required="required"
          />
        </div>

        <input
          type="submit"
          value="Submit"
          className="mb-6 bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300 text-white font-bold py-2 px-4 rounded focus:outline-none ml-auto mr-auto"
        />
        {signupError && <p style={{ color: "red" }}>{signupError}</p>}
        {signupValidation && (
          <p style={{ color: "green" }}>{signupValidation}</p>
        )}
      </form>
    </div>
  );
};

export default Signup;
