import Signin from "pages/Signin";
import Signup from "pages/Signup";
// import Signin from "components/UseComponent";
import Todos from "pages/Todos";

const router = [
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
  {
    path: "/todos",
    exact: false,
    component: Todos,
  },
];

export default router;
