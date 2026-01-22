import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-end min-h-screen p-6 pb-20 text-center bg-center bg-cover intro-animate"
      style={{
        backgroundImage: "url(image/frunt.png)",
      }}
    >
      {/* Dark overlay */}
      <div className="p-8 rounded-xl">
        <h1
          className="text-8xl font-bold mb-3 font-['creepster'] text-orange-400 line-animate"
          style={{ animationDelay: "0.5s" }}
        >
          Welcome
        </h1>

        <p
          className="mb-2 text-black font-bold text-4xl font-['creepster'] line-animate"
          style={{ animationDelay: "0.5s" }}
        >
          To The Codeyogi Foundation
        </p>

        <p
          className="mb-2 font-bold text-4xl font-['creepster'] text-black line-animate"
          style={{ animationDelay: "0.5s" }}
        >
          Project on Republic Day
        </p>

        <p
          className="mb-5 text-6xl font-bold font-['creepster'] text-green-700 line-animate"
          style={{ animationDelay: "0.5s" }}
        >
          2026
        </p>

        <button
          onClick={() => navigate("/home")}
          className="px-8 py-2 text-2xl font-bold text-black transition bg-orange-500 rounded hover:bg-green-600 line-animate"
          style={{ animationDelay: "0.5s" }}
        >
          Open
        </button>
      </div>
    </div>
  );
}
