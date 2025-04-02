import React from "react";

const HeroSection = () => (
  <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
    {/* Floating Emojis - Moods and Emotions */}
    <div className="emoji-container absolute top-5 left-5">
      <span className="emoji animate-float">😊</span> {/* Happy */}
    </div>
    <div className="emoji-container absolute top-40 right-40">
      <span className="emoji animate-float">😢</span> {/* Sad */}
    </div>
    <div className="emoji-container absolute top-40 left-1/6">
      <span className="emoji animate-float">😍</span> {/* Love */}
    </div>
    <div className="emoji-container absolute top-40 right-1/6">
      <span className="emoji animate-float">😎</span> {/* Cool */}
    </div>
    <div className="emoji-container absolute bottom-50 left-40">
      <span className="emoji animate-float">😱</span> {/* Shocked */}
    </div>
    <div className="emoji-container absolute top-5 left-1/3">
      <span className="emoji animate-float">🤔</span> {/* Thinking */}
    </div>
    <div className="emoji-container absolute top-20 left-2/3">
      <span className="emoji animate-float">🤩</span> {/* Excited */}
    </div>
    <div className="emoji-container absolute top-2/3 right-40">
      <span className="emoji animate-float">🥳</span> {/* Celebratory */}
    </div>
    <div className="emoji-container absolute top-3/4 left-1/4">
      <span className="emoji animate-float">😇</span> {/* Innocent */}
    </div>
    <div className="emoji-container absolute bottom-10 left-1/2">
      <span className="emoji animate-float">😤</span> {/* Frustrated */}
    </div>
    <div className="emoji-container absolute bottom-5 left-2/3">
      <span className="emoji animate-float">😜</span> {/* Playful */}
    </div>
    <div className="emoji-container absolute bottom-1/6 left-2/3">
      <span className="emoji animate-float">🤯</span> {/* Mind-blown */}
    </div>

    {/* Background Effects */}
    <div className="absolute top-10 left-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/50 rounded-full blur-2xl animate-spin-slow"></div>

    {/* Hero Text */}
    <h1 className="text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#E3E4E6] to-[#D6B07D] animate-fade-in font-[Pacifico] drop-shadow-lg">
      MindBloom 🌿
    </h1>
    <p className="text-xl mt-4 text-gray-300 italic animate-slide-up">
      Where Ideas Flourish, Creativity Blooms ✨
    </p>

    <button className="mt-6 px-8 py-3 bg-gradient-to-r from-secondary to-[#E3E4E6] text-primary font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-fade-in">
      Get Started 🚀
    </button>
  </section>
);

export default HeroSection;
