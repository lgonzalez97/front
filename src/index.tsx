import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "./store/index.store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./areas/private/Login";
import Signup from "./areas/private/Signup";
import RoutesContainer from "./areas/routesContainer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const store = configureStore();

const login = false;

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <RoutesContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
