import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MoodTracker from "./pages/MoodTracker";

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mood-tracker" element={<MoodTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
