import { useState } from "react";

export default function Footer({ fixed }) {
  return (
    <footer>
      <div className="relative flex flex-wrap items-center h-14 bg-kasar1 mb-3">
        <div className="container px-4 mx-auto items-center">
          <div className="w-full object-center text-center text-kasar5">
            By KASAR
          </div>
        </div>
      </div>
    </footer >
  );
}
