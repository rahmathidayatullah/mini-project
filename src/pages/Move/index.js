import * as React from "react";
import { useHistory } from "react-router-dom";

export default function Logout() {
  let history = useHistory();

  React.useEffect(() => {
    const move = () => {
      history.push("/v1");
    };
    move();
  }, [history]);

  return (
    <div className="text-center flex flex-col justify-center items-center"></div>
  );
}
