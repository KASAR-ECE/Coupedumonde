import { useState } from "react";
import UserContextProvider from "../../context/UserContext";
import { useContext } from "react";

export default function Navbar({ token }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { user, signOut } = useContext(UserContextProvider);
  var phrase = "";
  if (user != null) {
    phrase = "Welcome, " + user;
  }

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-kasar1 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between sm:w-auto sm:static sm:block sm:justify-start w-full">
          <a
            className="text-xl font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap uppercase text-kasar3"
            href="/"
          >
            Home
          </a>
          <p className="text-kasar3 leading-snug  inline-block mr-4 py-1 whitespace-nowrap hidden md:block">
            {phrase}
          </p>
          <div className="sm:hidden">
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={
            "sm:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col sm:flex-row list-none sm:ml-auto">
            <li className="nav-item">
              <div
                className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-kasar3 hover:opacity-75"
                href="#pablo"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-kasar3 opacity-80 ">
                  <a href={user != null ? "/vote" : "/matches"}>{user != null ? "Vote" : "Maches"}</a>
                </i>
              </div>
            </li>
            <li className="nav-item">
              <div
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-kasar3 hover:opacity-80"
                href="#pablo"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-kasar3 opacity-80">
                  <a href={user != null ? "/logout" : "/login"}>
                    {user != null ? "Logout" : "Login"}
                  </a>
                </i>
              </div>
            </li>
            <li className="nav-item">
              <div
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-kasar3 hover:opacity-75"
                href="#pablo"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-kasar3 opacity-75">
                  <a href="/">About us</a>
                </i>
              </div>
            </li>
            <p className="text-kasar3 leading-snug  inline-block mr-4 py-1 whitespace-nowrap sm:hidden">
            {phrase}
          </p>
          </ul>
        </div>
      </div>
    </nav>
  );
}
