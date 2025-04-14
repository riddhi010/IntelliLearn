import React from "react";
import Header from "../components/Header";
import Greeting from "../components/greeting"; // Ensure correct import
import styles from "./Dashboard.module.css"; // Import CSS
import QuoteCard from "../components/Quoteweather";
import Cursor from "../components/cursor";
import Sidebar from "../components/Sidebar1.js";
const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Cursor/>
      <Sidebar/>
      <Header />

      {/* Main Content Area */}
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <Greeting /> {/* Ensure Greeting is here */}
          <QuoteCard />

        </div>
        <div className={styles.rightSection}>
          {/* Image placed on the right side */}
          <img
  className={styles.dashboardImage}
  src="/assets/dash-Photoroom.png" // Use the correct relative path
  alt="Inspiration"
/>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
