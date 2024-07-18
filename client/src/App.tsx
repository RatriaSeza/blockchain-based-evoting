import { Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Login from "./views/Login"
import Vote from "./views/Vote"
import Profile from "./views/Profile";

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
