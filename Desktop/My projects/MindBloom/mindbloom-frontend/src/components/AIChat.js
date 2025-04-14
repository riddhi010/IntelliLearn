import React, { useState, useRef, useEffect } from 'react';
import './AIChat.css';
import axios from 'axios';

const AIChat = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello, How are you feeling today?", }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null); // 👈 ref for auto-scroll

  const sendMessageToBot = async () => {
    if (!input.trim()) return;

    const newUserMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, newUserMessage]);
    setLoading(true);
    setInput('');

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: input,
      });

      const aiReply = res.data.choices[0].message.content;
      const newAIMessage = { role: 'assistant', content: aiReply };
      setMessages((prev) => [...prev, newAIMessage]);
    } catch (err) {
      console.error("❌ Chat error:", err);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "Sorry, I couldn't respond right now." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessageToBot();
  };

  // 👇 Auto-scroll to bottom whenever messages update
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="chat-container">
      <h2 className="chat-title">💬 Talk to BloomBot</h2>
      
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-bubble ${msg.role}`}>
            {msg.content}
          </div>
        ))}
        {loading && <div className="chat-bubble assistant">Typing...</div>}
        <div ref={bottomRef} /> {/* 👈 this is where auto-scroll lands */}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          placeholder="Type your message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={sendMessageToBot}>Send</button>
      </div>
    </div>
  );
};

export default AIChat;
