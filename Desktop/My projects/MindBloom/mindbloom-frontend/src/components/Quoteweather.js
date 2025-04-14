// components/QuoteCard.js
import React from "react";
import styles from "./Quoteweather.module.css";

const QuoteCard = () => {
  // Array of quotes
  const quotes = [
    { quote: "“The only way to do great work is to love what you do.”", author: "Steve Jobs" },
    { quote: "“Success is not the key to happiness. Happiness is the key to success.”", author: "Albert Schweitzer" },
    { quote: "“Don't watch the clock; do what it does. Keep going.”", author: "Sam Levenson" },
    { quote: "“Believe you can and you're halfway there.”", author: "Theodore Roosevelt" },
    { quote: "“Your time is limited, so don't waste it living someone else's life.”", author: "Steve Jobs" },
    { quote: "“It does not matter how slowly you go as long as you do not stop.”", author: "Confucius" },
    { quote: "“The future belongs to those who believe in the beauty of their dreams.”", author: "Eleanor Roosevelt" },
    { quote: "“In the middle of every difficulty lies opportunity.”", author: "Albert Einstein" },
    { quote: "“Act as if what you do makes a difference. It does.”", author: "William James" },
    { quote: "“Everything you can imagine is real.”", author: "Pablo Picasso" }
  ];

  // Function to select a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className={styles.card}>
      <p className={styles.quote}>"{randomQuote.quote}"</p>
      <p className={styles.author}>– {randomQuote.author}</p>
    </div>
  );
};

export default QuoteCard;
