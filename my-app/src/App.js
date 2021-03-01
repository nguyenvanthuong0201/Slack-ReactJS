import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <HeaderComponent />
          <AppBody>
            <Sidebar/>
            <Switch>
              <Route path="/" exact>
                {/* Chat */}
                <Chat/>
              </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display:flex;
  height: 100vh;
`;