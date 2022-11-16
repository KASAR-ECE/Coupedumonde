import React, { useEffect } from "react";
import Router from "next/router";
import { serialize } from "cookie";

export default function Logout() {
  useEffect(() => {
    Router.push("/");
  });
}

Logout.getInitialProps = ({ req, res }) => {
  res.setHeader("Set-Cookie", [
    serialize("token", "", {
      maxAge: -1,
      path: "/",
    }),
  ]);
  return {};
};
