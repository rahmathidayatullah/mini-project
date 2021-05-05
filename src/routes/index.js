import Signin from "pages/Signin";
import Signup from "pages/Signup";
import Component from "components/UseComponent";
import Todos from "pages/Todos";
import Logout from "pages/Logout";
import GuardRoute from "components/GuardRoute";
import GuardRouteOnly from "components/GuardRouteOnly";
import NotFound from "pages/NotFound";

const TodosPage = () => {
  return (
    <GuardRoute>
      <Todos />
    </GuardRoute>
  );
};
const SigninPage = () => {
  return (
    <GuardRouteOnly>
      <Signin />
    </GuardRouteOnly>
  );
};
const SignupPage = () => {
  return (
    <GuardRouteOnly>
      <Signup />
    </GuardRouteOnly>
  );
};

const router = [
  {
    path: "/",
    exact: true,
    component: SigninPage,
  },
  {
    path: "/todos",
    exact: false,
    component: TodosPage,
  },
  {
    path: "/signup",
    exact: true,
    component: SignupPage,
  },
  {
    path: "/component",
    exact: true,
    component: Component,
  },
  {
    path: "/logout",
    exact: false,
    component: Logout,
  },
  {
    path: "*",
    exact: true,
    component: NotFound,
  },
];

export default router;
