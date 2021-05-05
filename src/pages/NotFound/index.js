import * as React from "react";
import { Link } from "react-router-dom";

export default function Logout() {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <br />
      Url Notfound
      <Link to="/todos">Back to todos</Link>
    </div>
  );
}
