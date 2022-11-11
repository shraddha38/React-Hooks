import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import './App.css';
import { UseStateAndUseEffect } from "./components/UseStateAndUseEffect";
import { UseRefHook } from "./components/UseRefHook";


const Approutes = () => {
  let routes = useRoutes([
    { path: "/side", element: <UseStateAndUseEffect /> },
    { path: "/ref", element: <UseRefHook /> },
  ]);
  return routes;
};


export default App;
function App() {
  return (
    <div className="App">
      <Router>
        <Approutes />
      </Router>
    </div>
  );
}