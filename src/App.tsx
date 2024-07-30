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
import Groups from "./components/Pages/Groups";
import CreateGroup from "./components/Pages/CreateGroup";
import Yakobe from "./components/Pages/Yakobe";
import Game from "./components/Pages/Game";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card-picker" element={<CardPicker />} />
      <Route path="/create-group" element={<CreateGroup />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/history" element={<History />} />
      <Route path="/balance" element={<Balance />} />
      <Route path="/leaderboard" element={<LeaderBoard />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/license" element={<License />} />
      <Route path="/yakobe" element={<Yakobe />} />
      <Route path="/play" element={<Game />}></Route>

      {/* Not Protected */}

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/request" element={<ForgotPassword />} />

      {/* 404 Page */}

      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" />}></Route>
    </Routes>
  );
}

export default App;
