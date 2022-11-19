import { createContext } from "react";
import { useState } from "react";

const Context = createContext();

export default Context;

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  return (
    <Context.Provider
      value={{
        user: user,
        admin: admin,
        newadmin: () =>{
          setAdmin(true)
        },
        signOut: () => {
          setUser(null);
        },
        signIn: (user) => {
          setUser(user);
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};
