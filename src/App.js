import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { EditTodo } from "./EditTodo";
import { TodoList } from "./TodoList";
import { CreateTodo } from "./CreateTodo";
function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="navlink">
              Todos
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="navlink">
              Create Todo 
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/edit/:id " component={EditTodo} />
        <Route exact path="/create" component={CreateTodo} />
      </Switch>
    </div>
  );
}

export default App;
