import { createContext } from "react";
import { useState } from "react";

const Context = createContext();

export default Context;

export const ContextProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [score, setScore] = useState(null);
  const [email, setEmail] = useState(null);

  return (
    <Context.Provider
      value={{
        username: username,
        email: email,
        score: score,

        signOut: () => {
          setUsername(null);
          setEmail(null);
          setScore(null);
        },
        signIn: (username, email, score) => {
          setUsername(username);
          setEmail(email);
          setScore(score);
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};
