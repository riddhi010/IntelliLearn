import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cursor from "./components/cursor";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MoodTrackerPage from "./pages/MoodTracker";
import ProtectedRoute from "./components/ProtectedRoute"; // 🔐 Import
import AIChatPage from "./pages/AIChatPage";

function App() {
  return (
    <>
    <Cursor />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* 🔐 Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mood-tracker"
          element={
            <ProtectedRoute>
              <MoodTrackerPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <AIChatPage />
            </ProtectedRoute>
          }
        />
       

      </Routes>
    </Router>
    </>
  );
}

export default App;
