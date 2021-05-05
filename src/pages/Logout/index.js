import * as React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "features/Auth/actions";
import ReactLoading from "react-loading";

export default function Logout() {
  let history = useHistory();
  let dispatch = useDispatch();

  React.useEffect(() => {
    const logout = () => {
      dispatch(userLogout());
      setTimeout(() => {
        history.push("/");
      }, 3000);
    };
    logout();
  }, [history, dispatch]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-5 z-50">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ReactLoading
          type={"bars"}
          color={"#B7BDC9"}
          height={198}
          width={150}
        />
      </div>
    </div>
  );
}
