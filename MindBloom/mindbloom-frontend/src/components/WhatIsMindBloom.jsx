import React from "react";
import { motion } from "framer-motion";

const WhatIsMindBloom = () => (
  <section className="relative h-screen flex flex-col items-center justify-center px-8 text-center overflow-hidden">
    {/* Floating Effects */}
    <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/30 rounded-full blur-3xl animate-bounce"></div>
    <div className="absolute top-20 right-16 w-40 h-40 bg-secondary/50 rounded-full blur-2xl animate-spin-slow"></div>

    {/* Image on the left */}
    <div className="absolute left-0 top-1/4 transform translate-x-10 translate-y-5">
      <img src="/assets/curiosity brain-rafiki.png" alt="Curiosity Brain" className="w-64 h-auto object-contain" />
    </div>

    {/* Main Content */}
    <div className="relative max-w-4xl p-10 rounded-2xl border border-white/20 backdrop-blur-lg shadow-2xl transform transition-all duration-500 group">
      <div className="absolute inset-0 rounded-2xl border-[3px] border-transparent bg-gradient-to-r from-[#E3E4E6] to-[#D6B07D] opacity-20 group-hover:opacity-100 transition-all duration-500 blur-md"></div>

      <div className="relative z-10 bg-white/10 rounded-2xl p-10 shadow-xl transition-all duration-500 group-hover:bg-[#E3E4E6]/20">
        <h2 className="text-5xl font-bold text-secondary mb-6 drop-shadow-xl animate-fade-up font-[Pacifico] transition-all duration-500 group-hover:text-[#473c28]">
          What is MindBloom? 🌱
        </h2>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed italic transition-all duration-500 group-hover:text-[#2b2a29]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          MindBloom helps people track their mood, check their emotions, and talk anonymously with others. It is designed to support mental well-being and create a safe space for users to express their feelings without fear of judgment.
        </motion.p>

        <h3 className="text-xl text-gray-300 font-semibold mt-6 mb-4 text-left border-l-4 border-secondary pl-4 transition-all duration-500 group-hover:text-[#473c28]">
          Features of MindBloom:
        </h3>

        <ul className="list-disc list-inside text-gray-300 leading-relaxed text-left space-y-2 transition-all duration-500 group-hover:text-[#2b2a29]">
          <li><strong>Mood Tracking</strong> – Log daily emotions to identify patterns in mental health.</li>
          <li><strong>Mood Check</strong> – Analyze user responses to determine their current emotional state.</li>
          <li><strong>Anonymous Chat</strong> – Talk to others without revealing identity in a safe environment.</li>
          <li><strong>Community Support</strong> – Connect with people experiencing similar emotions for encouragement.</li>
          <li><strong>Personal Insights</strong> – Track mood changes over time and find ways to improve well-being.</li>
          <li><strong>Privacy & Security</strong> – Ensures confidentiality with no personal details shared.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default WhatIsMindBloom;
