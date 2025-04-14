import React from "react";
import Header from "../components/Header";
import styles from "./feature.css"; // Import CSS
import Cursor from "../components/cursor";
import Sidebar from "../components/Sidebar1.js";
const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Cursor/>
      <Sidebar/>
      <Header />

     
    </div>
  );
};

export default Dashboard;
