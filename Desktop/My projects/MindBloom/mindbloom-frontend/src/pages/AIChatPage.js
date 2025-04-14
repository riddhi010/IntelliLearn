import React from "react";
import AIChat from "../components/AIChat";
import FeatureLayout from "../components/feature";
import "./AIChatPage.css"; // ✅ Import the new CSS for the page



const AIChatPage = () => {
  return (
    <div className="ai-chat-page">
      <FeatureLayout />
      <div className="content">
        <AIChat />
        

      </div>
      {[...Array(30)].map((_, i) => (
  <div
    key={i}
    className="floating-particle"
    style={{
      left: `${Math.random() * 100}%`,
      bottom: `${Math.random() * 100}px`,
      animationDuration: `${10 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 5}s`
    }}
  />
))}


    </div>
  );
};

export default AIChatPage;
