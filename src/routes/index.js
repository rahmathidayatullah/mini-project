import Signin from "pages/Signin";
import Signup from "pages/Signup";
import Component from "components/UseComponent";
import Todos from "pages/Todos";
import Logout from "pages/Logout";
import GuardRoute from "components/GuardRoute";
import GuardRouteOnly from "components/GuardRouteOnly";
import NotFound from "pages/NotFound";
import Move from "pages/Move";

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
    component: Move,
  },
  {
    path: "/v1/todos",
    exact: false,
    component: TodosPage,
  },
  {
    path: "/v1",
    exact: false,
    component: Signin,
  },
  {
    path: "/v1/signup",
    exact: true,
    component: SignupPage,
  },
  {
    path: "/v1/component",
    exact: true,
    component: Component,
  },
  {
    path: "/v1/logout",
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
