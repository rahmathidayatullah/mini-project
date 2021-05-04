import Signin from "pages/Signin";
import Signup from "pages/Signup";
// import Signin from "components/UseComponent";
import Todos from "pages/Todos";

const router = [
  {
    path: "/",
    exact: true,
    component: Signin,
  },
  {
    path: "/todos",
    exact: false,
    component: Todos,
  },
  {
    path: "/signup",
    exact: false,
    component: Signup,
  },
];

export default router;
