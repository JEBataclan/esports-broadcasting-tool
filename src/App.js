import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import openSocket from "socket.io-client";
import Admin from "./pages/Admin/Admin";
import Gameplay from "./pages/Gameplay/Gameplay";
import Commentator from "./pages/Commentator/Commentator";
import GlobalStyles from "./globalStyles";

const socket = openSocket("http://localhost:8000", {
  transports: ["websocket"],
});

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Switch>
        <Route path="/" exact render={() => <Admin socket={socket}/>}/>
        <Route path="/gameplay" render={() => <Gameplay socket={socket}/>}/>
        <Route path="/commentator" render={() => <Commentator socket={socket}/>}/>
      </Switch>
    </Router>
  );
}

export default App;
