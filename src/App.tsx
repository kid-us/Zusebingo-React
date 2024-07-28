import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Page404 from "./components/Pages/Page404";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Verify from "./components/Pages/Verify";
import ForgotPassword from "./components/Pages/ForgotPassword";
import CardPicker from "./components/Pages/CardPicker";
import Setting from "./components/Pages/Setting";
import History from "./components/Pages/History";
import Balance from "./components/Pages/Balance";
import LeaderBoard from "./components/Pages/LeaderBoard";
import License from "./components/Pages/License";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/request" element={<ForgotPassword />} />
      <Route path="/card-picker" element={<CardPicker />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/history" element={<History />} />
      <Route path="/balance" element={<Balance />} />
      <Route path="/leaderboard" element={<LeaderBoard />} />
      <Route path="/license" element={<License />} />

      {/* <Route
        path="/create"
        element={
          <Protected>
            <Create />
          </Protected>
        }
      /> */}

      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" />}></Route>
    </Routes>
  );
}

export default App;
