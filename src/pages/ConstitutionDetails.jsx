import { useParams, Link } from "react-router-dom";

/*
 👉 YAHI DATA EDIT KARNA HAI
 Jab naya card add karega,
 yaha ek naya object add kar dena.
 id same hona chahiye jo Constitution.jsx me hai.
*/

const DATA = [
  {
    id: 1,
    title: "Dr. B. R. Ambedkar",
    img: "/c1.jpg",
    en: "Dr. B. R. Ambedkar was the chief architect of the Indian Constitution. He dedicated his life to equality, justice and education for all citizens.",
    hi: "डॉ. भीमराव अंबेडकर भारतीय संविधान के मुख्य निर्माता थे। उन्होंने अपना जीवन समानता, न्याय और सभी नागरिकों की शिक्षा के लिए समर्पित किया।",
  },
  {
    id: 2,
    title: "Indian Constitution",
    img: "/c2.jpg",
    en: "The Constitution of India is the supreme law of the country. It defines political principles and guarantees rights to citizens.",
    hi: "भारत का संविधान देश का सर्वोच्च कानून है। यह राजनीतिक सिद्धांतों को परिभाषित करता है और नागरिकों को अधिकार प्रदान करता है।",
  },
  {
    id: 3,
    title: "Fundamental Rights",
    img: "/c3.jpg",
    en: "Fundamental Rights protect the freedom and dignity of citizens and ensure equality before law.",
    hi: "मौलिक अधिकार नागरिकों की स्वतंत्रता और सम्मान की रक्षा करते हैं और कानून के समक्ष समानता सुनिश्चित करते हैं।",
  },
  {
    id: 4,
    title: "Preamble of India",
    img: "/c4.jpg",
    en: "The Preamble reflects the spirit of the Constitution and defines India as a sovereign, socialist, secular and democratic republic.",
    hi: "प्रस्तावना संविधान की आत्मा को दर्शाती है और भारत को संप्रभु, समाजवादी, धर्मनिरपेक्ष और लोकतांत्रिक गणराज्य घोषित करती है।",
  },
  {
    id: 5,
    title: "Democracy",
    img: "/c5.jpg",
    en: "Democracy gives power to the people to choose their leaders and shape the future of the nation.",
    hi: "लोकतंत्र लोगों को अपने नेताओं को चुनने और राष्ट्र का भविष्य निर्धारित करने की शक्ति देता है।",
  },
  {
    id: 101,
    img: "/d1a.png",
    title: "Bhagat Singh",
    text: "Aad tour choice", // kuch bhe add kar lo
    en: "Democracy gives power to the people to choose their leaders and shape the future of the nation.",
    hi: "लोकतंत्र लोगों को अपने नेताओं को चुनने और राष्ट्र का भविष्य निर्धारित करने की शक्ति देता है।",
  },
  {
    id: 102,
    img: "/d2.png",
    title: "Sukhdev",
    text: "Aad tour choice",
    en: "Democracy gives power to the people to choose their leaders and shape the future of the nation.",
    hi: "लोकतंत्र लोगों को अपने नेताओं को चुनने और राष्ट्र का भविष्य निर्धारित करने की शक्ति देता है।",
  },
  {
    id: 103,
    img: "/d3.png",
    text: "Rajguru",
    en: "Democracy gives power to the people to choose their leaders and shape the future of the nation.",
    hi: "लोकतंत्र लोगों को अपने नेताओं को चुनने और राष्ट्र का भविष्य निर्धारित करने की शक्ति देता है।",
  },
  {
    id: 104,
    img: "/d4d.png",
    text: "Chandrashekhar Azad",
    en: "Democracy gives power to the people to choose their leaders and shape the future of the nation.",
    hi: "लोकतंत्र लोगों को अपने नेताओं को चुनने और राष्ट्र का भविष्य निर्धारित करने की शक्ति देता है।",
  },
  {
    id: 105,
    img: "/d5e.png",
    text: "Subhas Chandra Bose",
    en: "Democracy gives power to the people to choose their leaders and shape the future of the nation.",
    hi: "लोकतंत्र लोगों को अपने नेताओं को चुनने और राष्ट्र का भविष्य निर्धारित करने की शक्ति देता है।",
  },
];

export default function ConstitutionDetails() {
  const { id } = useParams();

  const item = DATA.find((x) => String(x.id) === String(id));

  if (!item) {
    return (
      <div className="p-10 text-center text-red-600">
        ❌ Details not found for this card.
      </div>
    );
  }

  return (
    <div className="flex justify-center min-h-screen px-4 py-10 bg-slate-100">
      <div className="w-full max-w-3xl p-6 bg-white shadow-2xl rounded-3xl">
        {/* Image */}
        <img
          src={item.img}
          alt={item.title}
          className="object-cover w-full mb-5 rounded-xl h-72"
        />

        {/* Title */}
        <h1 className="mb-4 text-3xl font-bold text-center text-blue-900">
          {item.title}
        </h1>

        {/* English */}
        <p className="mb-4 text-lg text-gray-700">{item.en}</p>

        {/* Hindi */}
        <p className="mb-6 text-lg text-gray-800">{item.hi}</p>

        {/* Back Button */}
        <div className="text-center">
          <Link
            to="/constitution"
            className="inline-block px-6 py-2 text-white transition bg-blue-600 rounded-full shadow hover:bg-blue-700 active:scale-95"
          >
            ← Back to Constitution
          </Link>
        </div>
      </div>
    </div>
  );
}
