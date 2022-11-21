import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import './App.css';
import { UseStateAndUseEffect } from "./components/UseStateAndUseEffect";
import { UseRefHook } from "./components/UseRefHook";
import { UseCallbackHook } from "./components/UseCallbackHook";
import { UseReducerHook } from "./components/UseReducerHook";
import { CustomHook } from "./components/CustomHook";
import UseDebounce from "./components/custom-hooks/use-debounce";


const Approutes = () => {
  let routes = useRoutes([
    { path: "/side", element: <UseDebounce /> },
    { path: "/ref", element: <UseRefHook /> },
    { path: "/call", element: <UseCallbackHook /> },
    { path: "/red", element: <UseReducerHook /> },
    { path: "/", element: <CustomHook /> },
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