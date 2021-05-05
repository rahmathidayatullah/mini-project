import * as React from "react";
import { Link } from "react-router-dom";

export default function Logout() {
  return (
    <div className="h-screen text-center flex flex-col justify-center items-center">
      <br />
      <p className="text-xs sm:text-4xl xl:text-8xl">Page not found.</p>
      <Link to="/todos" className="mt-6 text-biru">
        <u>Back to todos</u>
      </Link>
    </div>
  );
}
