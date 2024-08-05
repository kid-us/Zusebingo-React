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
import Game from "./components/Pages/Game";
import Protected from "./components/Protected/Protected";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Protected>
            <Home />
          </Protected>
        }
      />
      <Route
        path="/card-picker"
        element={
          <Protected>
            <CardPicker />
          </Protected>
        }
      />

      <Route
        path="/create-group"
        element={
          <Protected>
            <CreateGroup />
          </Protected>
        }
      />
      <Route
        path="/setting"
        element={
          <Protected>
            <Setting />
          </Protected>
        }
      />
      <Route
        path="/history"
        element={
          <Protected>
            <History />
          </Protected>
        }
      />
      <Route
        path="/balance"
        element={
          <Protected>
            <Balance />
          </Protected>
        }
      />
      <Route
        path="/leaderboard"
        element={
          <Protected>
            <LeaderBoard />
          </Protected>
        }
      />
      <Route
        path="/groups"
        element={
          <Protected>
            <Groups />
          </Protected>
        }
      />
      <Route
        path="/license"
        element={
          <Protected>
            <License />
          </Protected>
        }
      />

      <Route
        path="/play"
        element={
          <Protected>
            <Game />
          </Protected>
        }
      ></Route>
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
