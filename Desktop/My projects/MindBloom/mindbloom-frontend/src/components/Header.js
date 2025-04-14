import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Sidebar from "./Sidebar.js";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [streak, setStreak] = useState(7); // Example streak value
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate updating streak (increase by 1 every day, replace with real logic later)
    setStreak(prev => prev + 1);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/"); // 👈 Redirect to login page
  };

  return (
    <header className={styles.header}>
      {/* Left - MindBloom Logo */}
      <div className={styles.leftSection}>
        <Sidebar />
      </div>
      <h1 className={styles.logo}>MindBloom 🌿</h1>

      {/* Right - Streak & Profile */}
      <div className={styles.topRightSection}>
        <div className={styles.streakCounter}>🔥 Streak: {streak} Days</div>

        <div className={styles.profileContainer}>
          <img
            src="/profile.jpg" // Replace with dynamic user profile image later
            alt="User"
            className={styles.profilePic}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />

          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              <p>My Account</p>
              <p>Settings</p>
              <p onClick={handleLogout} className={styles.logoutBtn}>Logout</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
