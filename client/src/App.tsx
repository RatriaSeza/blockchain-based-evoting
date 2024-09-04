import { Routes, Route } from "react-router-dom"

// Voter Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Vote from "./pages/Vote"
import Profile from "./pages/Profile";
import { NotFound } from "./pages/NotFound";

// Admin Pages
import { LoginAdmin } from "./pages/Admin/Login";
import { Dashboard } from "./pages/Admin/Dashboard";

function App() {
  return (
    <div className="font-Poppins">
      <Routes>
        {/* Voter */}
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/vote" element={<Vote/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />

        {/* Admin */}
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/candidates" />
        <Route path="/admin/voters" />

        {/* 404 */}
      </Routes>
    </div>
  )
}

export default App
