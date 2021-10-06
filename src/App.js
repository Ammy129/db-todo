import Greeting from "./Greeting";
import Name from "./Name";
import Todo from "./Todo";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
  const getUser = () => {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : "";
  };
  const [user, setUser] = useState(getUser());

  return (
    <BrowserRouter>
      <Switch>
        {user ? (
          <Route path="/" exact>
            <Todo user={user} setUser={setUser} />
          </Route>
        ) : (
          <Route path="/login" exact>
            <Name setUser={setUser} />
          </Route>
        )}

        <Route path="/" exact>
          {user ? (
            <Todo user={user} setUser={setUser} />
          ) : (
            <Name setUser={setUser} />
          )}
        </Route>
        <Route path="/greeting" component={Greeting} exact />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
