import React, { useState } from "react";
import './Sidebar.css'; // Import your CSS for styling
import Cursor from "../components/cursor";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar toggle button with icon */}
      <Cursor/>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? (
          <i className="fa fa-times"></i> // Close icon (Font Awesome)
        ) : (
          <i className="fa fa-bars"></i> // Open icon (Font Awesome)
        )}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
        
        <li><a href="/Dashboard">Home</a></li>
        <li><a href="/mood-tracker">MoodTracker</a></li>
        <li><a href="/journal">Journal</a></li>
        <li><a href="/chat">AI chat</a></li>

        
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
