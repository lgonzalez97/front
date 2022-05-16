import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { loginSelector } from "../store/selectors/globalSelector";
import Login from "./private/Login";

export default function RoutesContainer() {
  const login = useSelector(loginSelector);
  return (
    <div>
      <Routes>
        <Route path="/" element={login ? <App /> : <Login />}></Route>
      </Routes>
    </div>
  );
}
