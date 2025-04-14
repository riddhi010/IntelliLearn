import React, { useState, useEffect } from "react";
import styles from "./Greeting.module.css";

const Greeting = () => {
  const [greetingText, setGreetingText] = useState("");
  const [emoji, setEmoji] = useState("🙂");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("User");

  useEffect(() => {
    // Get name from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setName(parsedUser.name);
    }

    const hour = new Date().getHours();
    let greeting = "Hello, ";
    let emoji = "🙂";
    let message = "";

    if (hour >= 5 && hour < 12) {
      greeting = "Good Morning, ";
      emoji = "🌞";
      message = "We’re so happy to have you back!";
    } else if (hour >= 12 && hour < 18) {
      greeting = "Good Afternoon, ";
      emoji = "☀️";
      message = "How are you feeling today? Let’s make it a good one!";
    } else if (hour >= 18 && hour < 22) {
      greeting = "Good Evening, ";
      emoji = "🌙";
      message = "We hope you're having a great day so far!";
    } else {
      greeting = "Good Night, ";
      emoji = "🌙";
      message = "Sweet dreams, take care and see you tomorrow!";
    }

    setGreetingText(greeting);
    setEmoji(emoji);
    setMessage(message);
  }, []);

  return (
    <div className={styles.greetingContainer}>
      <h1 className={styles.greeting}>
        <span className={styles.emoji}>{emoji}</span>
        {greetingText}
        <span className={styles.name}>{name}</span>!
      </h1>
      <p className={styles.additionalMessage}>{message}</p>
    </div>
  );
};

export default Greeting;
