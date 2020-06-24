import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./components/Login";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./myStore/reducer/PostReducer";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";


const initial_state = { posts : [] };

const store = createStore( reducer, initial_state );

function App() 
{
  useEffect( () => { M.AutoInit() }, [] );

  return (
    <Provider store = { store }>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={ LoginForm } />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;