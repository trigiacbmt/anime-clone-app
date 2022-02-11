import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AnimeSearch from "./pages/AnimeSearch";
import AninmeDetail from "./pages/AninmeDetail";
import HomePage from "./pages/HomePage";
import MyCollections from "./pages/MyCollections";
import ResetPassword from "./pages/ResetPassword";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import User from "./pages/User";

function App() {
  return (
    <div className="bg-anime_gray">
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />

        <Route path="/anime/:id" element={<AninmeDetail />} />

        <Route path="/search" element={<AnimeSearch />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/mycollection" element={<MyCollections />} />
      </Routes>
    </div>
  );
}

export default App;
