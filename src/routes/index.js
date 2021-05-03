import Signin from "pages/Signin";
import Signup from "pages/Signup";
// import Signin from "components/UseComponent";
import Todos from "pages/Todos";

const router = [
  {
    path: "/todos",
    exact: false,
    component: Todos,
  },
  {
    path: "/",
    exact: false,
    component: Signin,
  },
  {
    path: "/signup",
    exact: false,
    component: Signup,
  },
];

export default router;
