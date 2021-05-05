import Signin from "pages/Signin";
import Signup from "pages/Signup";
import Component from "components/UseComponent";
import Todos from "pages/Todos";
import GuardRoute from "components/GuardRoute";
import GuardRouteOnly from "components/GuardRouteOnly";

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
    path: "/todos",
    exact: false,
    component: TodosPage,
  },
  {
    path: "/",
    exact: true,
    component: SigninPage,
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
];

export default router;
