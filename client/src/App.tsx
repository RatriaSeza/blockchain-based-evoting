import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Vote from "./pages/Vote"
import Profile from "./pages/Profile";
import { NotFound } from "./pages/NotFound";

function App() {

  return (
    <div className="font-Poppins">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Vote" element={<Vote/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
