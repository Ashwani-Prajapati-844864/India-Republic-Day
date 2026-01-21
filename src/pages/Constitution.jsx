import { Link } from "react-router-dom";

const natureCards = [
  {
    id: 1,
    img: "/c1.jpg",
    title: "Dr. B.R. Ambedkar",
    text: "The Chairman of the Drafting Committee, considered the chief architect of the Constitution, known for his deep knowledge of constitutional law.",
  },
  {
    id: 2,
    img: "/c2.jpg",
    title: "Sardar Vallabhbhai Patel",
    text: "Headed key committees like the Advisory Committee on Fundamental Rights and the Provincial Constitution Committee, playing a vital role in integrating princely states.",
  },
  {
    id: 3,
    img: "/c3.jpg",
    title: "Jawaharlal Nehru",
    text: "Chaired the Union Constitution, Union Powers, and States Committees, introducing the Objectives Resolution that shaped the Constitution's philosophy.",
  },
  {
    id: 4,
    img: "/c4.jpg",
    title: "Dr. Rajendra Prasad",
    text: "The President of the Constituent Assembly, guiding its proceedings and chairing important committees like the Rules of Procedure and Steering Committee.",
  },
  {
    id: 5,
    img: "/c5.jpg",
    title: "Maulana Abul Kalam Azad",
    text: "A prominent leader who was a member of the Constituent Assembly and influential in shaping educational and minority provisions.",
  },
];

const leaderCards = [
  {
    id: 101,
    img: "/d1.png",
    title: "Bhagat Singh",
    text: "Bhagat Singh...........",
  },
  {
    id: 102,
    img: "/d2.png",
    title: "Sukhdev",
    text: "Sukhdev...............",
  },
  {
    id: 103,
    img: "/d3.png",
    title: "Rajguru",
    text: "Rajguru......",
  },
  {
    id: 104,
    img: "/d4.png",
    title: "Chandrashekhar Azad",
    text: "Chandrashekhar Azad......",
  },
  {
    id: 105,
    img: "/d5.png",
    title: "Subhas Chandra Bose",
    text: "Subhas Chandra Bose......",
  },
];


export default function Gallery() {
  return (
    <div className="flex flex-col items-center px-4 py-10 bg-slate-100">
      {/* ===== TOP BIG CARD CONTAINER ===== */}
      <div className="w-full max-w-6xl p-6 bg-white shadow-2xl rounded-3xl">
        <h1 className="mb-6 text-3xl font-bold text-center text-blue-900">
          Members Of Constituent
        </h1>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {natureCards.map((c) => (
            <div
              key={c.id}
              className="overflow-hidden transition-all duration-300 border-l-4 border-blue-600 shadow bg-blue-50 rounded-xl hover:shadow-xl hover:-translate-y-2"
            >
              <img src={c.img} className="object-cover w-full h-48" />

              <div className="p-4 text-center">
                <h3 className="text-lg font-bold">{c.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{c.text}</p>

                <Link
                  to={`/gallery/${c.id}`}
                  className="inline-block px-4 py-2 mt-3 text-sm text-white transition bg-blue-600 rounded-full hover:bg-blue-700 active:scale-95"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== TOP BIG CARD CONTAINER ===== */}
      <div className="w-full max-w-6xl p-6 mt-10 bg-white shadow-2xl rounded-3xl">
        <h1 className="mb-6 text-3xl font-bold text-center text-blue-900">
          🌄 Natural Beauty Collection
        </h1>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {leaderCards.map((c) => (
            <div
              key={c.id}
              className="overflow-hidden transition-all duration-300 border-l-4 border-blue-600 shadow bg-blue-50 rounded-xl hover:shadow-xl hover:-translate-y-2"
            >
              <img src={c.img} className="object-cover w-full h-48" />

              <div className="p-4 text-center">
                <h3 className="text-lg font-bold">{c.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{c.text}</p>

                <Link
                  to={`/gallery/${c.id}`}
                  className="inline-block px-4 py-2 mt-3 text-sm text-white transition bg-blue-600 rounded-full hover:bg-blue-700 active:scale-95"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== BOTTOM INFO BOX ===== */}
      <div className="w-full max-w-6xl p-6 mt-10 bg-white shadow-xl rounded-3xl">
        <h2 className="mb-4 text-2xl font-bold text-center text-green-700">
          🌿 About Nature Collection
        </h2>

        <p className="mb-3 text-gray-700">
          Nature gives us peace, fresh air, clean water and beautiful
          landscapes. Mountains, rivers, forests and oceans are the treasures of
          our planet.
        </p>

        <p className="mb-3 text-gray-700">
          प्रकृति हमें शांति, स्वच्छ हवा, साफ पानी और सुंदर दृश्य प्रदान करती
          है। पहाड़, नदियाँ, जंगल और महासागर हमारे ग्रह की अमूल्य धरोहर हैं।
        </p>

        <p className="text-gray-700">
          Protecting nature is our responsibility so that future generations can
          enjoy the beauty of Earth.
        </p>
      </div>
    </div>
  );
}
