import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "routes";
import { listen } from "./app/listener";
import store from "app/store";
import { Provider } from "react-redux";

function App() {
  React.useEffect(() => {
    listen();
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Route {...route} key={i} />
          ))}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
