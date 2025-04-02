import React, { useState } from "react";
import './Sidebar.css'; // Import your CSS for styling

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar toggle button with icon */}
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
        <li><a href="#services">Login/Register</a></li>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
          
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
