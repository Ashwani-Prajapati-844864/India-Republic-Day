import { useEffect, useState } from "react";
import Chakra from "../components/Chakra";

const lines = [
  "राष्ट्रगीत",
  "वन्दे मातरम्",
  "सुजलां सुफलां मलयजशीतलाम्",
  " शस्यशामलां मातरम् । ",
  "शुभ्रज्योत्स्नापुलकितयामिनीं",
  "फुल्लकुसुमितद्रुमदलशोभिनीं ",
  "सुहासिनीं सुमधुर भाषिणीं ",
  "सुखदां वरदां मातरम् ।। १ ।। ",
  " वन्दे मातरम् ।",
];

export default function Home() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 10; // ek time me kitni line dikhegi

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // ⏳ 0.5 second baad text show hoga
    const startText = setTimeout(() => {
      setShowText(true);
    }, 2000);

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % lines.length);
    }, 15000); // har 0.5 second me scroll

    return () => {
      clearTimeout(startText);
      clearInterval();
    };
  }, []);

 
  return (
    <div className="relative h-[calc(100vh-72px)] overflow-hidden intro-animate">
      {/* 🌈 color Background */}
      <div className="absolute inset-0 flex flex-col h-full">
        <div
          className="h-[33.33%]"
          style={{
            background: "linear-gradient(to bottom, #f97316, white)",
          }}
        />

        <div className="h-[33.33%] bg-white" />
        <div
          className="h-[33.33%]"
          style={{
            background: "linear-gradient(to top, #16a34a, #4ade80, white)",
          }}
        />
      </div>

      {/* 🔵 Ashok Chakra Background */}
      <Chakra />

      {/* 🎵 Anthem Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-3">
        <div className="w-full space-y-1 text-center max-w-screen">
          {lines
            .slice(startIndex, startIndex + visibleCount)
            .map((line, index) => (
              <p
                key={index}
                className={`transition-all duration-500
  ${
    index === 0
      ? "text-5xl md:text-6xl font-bold text-black mb-8" // 👈 TOP LINE STYLE
      : "text-2xl md:text-4xl text-gray-700"
  }
  ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
  `}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {line}
              </p>
            ))}
        </div>

        {/* 🔊 Background Audio */}
        <audio autoPlay loop>
          <source src="/anthem.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}
