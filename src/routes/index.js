import Signin from "pages/Signin";
import Signup from "pages/Signup";
import Component from "components/UseComponent";
import Todos from "pages/Todos";

const router = [
  {
    path: "/todos",
    exact: false,
    component: Todos,
  },
  {
    path: "/",
    exact: true,
    component: Signin,
  },
  {
    path: "/signup",
    exact: true,
    component: Signup,
  },
  {
    path: "/component",
    exact: true,
    component: Component,
  },
];

export default router;
