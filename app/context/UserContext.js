import { createContext } from "react";
import { useState } from "react";

const Context = createContext();

export default Context;

export const ContextProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [score, setScore] = useState(null);
  const [admin, setAdmin] = useState(null);

  return (
    <Context.Provider
      value={{
        username: username,
        score: score,
        admin: admin,
        newadmin: () => {
          setAdmin(true)
        },
        signOut: () => {
          setUsername(null);
          setScore(null);
        },
        signIn: (username, score) => {
          setUsername(username);
          setScore(score);
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};
