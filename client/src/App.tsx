import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Vote from "./pages/Vote"
import Profile from "./pages/Profile";

function App() {

  return (
    <div className="font-Poppins">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Vote" element={<Vote/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
