import { createContext } from "react";
import { useState } from "react";

const Context = createContext();

export default Context;

export const ContextProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [score, setScore] = useState(null);

  return (
    <Context.Provider
      value={{
        username: username,
        score: score,

        signOut: () => {
          setUsername(null);
          setScore(null);
        },
        signIn: (username, email, score) => {
          console.log("login : " + username + " - " + score)
          setUsername(username);
          setScore(score);
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};
