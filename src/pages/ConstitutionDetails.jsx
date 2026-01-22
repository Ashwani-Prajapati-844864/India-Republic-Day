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
    en: "The Chairman of the Drafting Committee, considered the chief architect of the Constitution, known for his deep knowledge of constitutional law.",
    hi: "ड्राफ्टिंग कमेटी के चेयरमैन, जिन्हें संविधान का मुख्य निर्माता माना जाता है, वे संवैधानिक कानून के अपने गहरे ज्ञान के लिए जाने जाते थे।",
  },
  {
    id: 2,
    title: "Sardar Vallabhbhai Patel",
    img: "/c2.jpg",
    en: "Headed key committees like the Advisory Committee on Fundamental Rights and the Provincial Constitution Committee, playing a vital role in integrating princely states.",
    hi: "उन्होंने मौलिक अधिकारों पर सलाहकार समिति और प्रांतीय संविधान समिति जैसी प्रमुख समितियों की अध्यक्षता की, और रियासतों को एकीकृत करने में महत्वपूर्ण भूमिका निभाई।",
  },
  {
    id: 3,
    title: "Jawaharlal Nehru",
    img: "/c3.jpg",
    en: "Chaired the Union Constitution, Union Powers, and States Committees, introducing the Objectives Resolution that shaped the Constitution's philosophy.",
    hi: "उन्होंने यूनियन संविधान, यूनियन शक्तियों और राज्यों की समितियों की अध्यक्षता की, और उद्देश्यों का प्रस्ताव पेश किया जिसने संविधान के दर्शन को आकार दिया।",
  },
  {
    id: 4,
    title: "Dr. Rajendra Prasad",
    img: "/c4.jpg",
    en: "The President of the Constituent Assembly, guiding its proceedings and chairing important committees like the Rules of Procedure and Steering Committee.",
    hi: "प्संविधान सभा के अध्यक्ष, जो इसकी कार्यवाही का मार्गदर्शन करते थे और प्रक्रिया के नियमों और संचालन समिति जैसी महत्वपूर्ण समितियों की अध्यक्षता करते थे।",
  },
  {
    id: 5,
    title: "Maulana Abul Kalam Azad",
    img: "/c5.jpg",
    en: "A prominent leader who was a member of the Constituent Assembly and influential in shaping educational and minority provisions.",
    hi: "एक जाने-माने नेता जो संविधान सभा के सदस्य थे और शिक्षा और अल्पसंख्यक प्रावधानों को बनाने में प्रभावशाली थे।",
  },
  {
    id: 101,
    img: "/d1a.png",
    title: "Bhagat Singh",
    text: "क्रांतिकारी स्वतंत्रता सेनानी।", // kuch bhe add kar lo
    en: "ब्रिटिश शासन के खिलाफ आवाज़ उठाई और युवाओं को जागरूक किया।",
    hi: "नारा: “इंक़लाब ज़िंदाबाद”",
  },
  {
    id: 102,
    img: "/d2.png",
    title: "Sukhdev",
    text: "भगत सिंह के साथी और महान क्रांतिकारी।",
    en: "देश की आज़ादी के लिए अपना बलिदान दिया।",
    hi: "नारा: “इंक़लाब ज़िंदाबाद”",
  },
  {
    id: 103,
    img: "/d3.png",
    title: "Rajguru",
    text: "ब्रिटिश अधिकारी सांडर्स को मारकर क्रांति को तेज़ किया।",
    en: "वे साहस और देशभक्ति के प्रतीक थे।",
    hi: "नारा: “भारत माता की जय”",
  },
  {
    id: 104,
    img: "/d4d.png",
    title: "Chandrashekhar Azad",
    text: "कभी अंग्रेजों के हाथ नहीं आए।",
    en: "आख़िरी सांस तक आज़ादी के लिए लड़े।",
    hi: "नारा: “दुश्मनों की गोलियों का हम सामना करेंगे, आज़ाद ही रहे हैं, आज़ाद ही रहेंगे।”",
  },
  {
    id: 105,
    img: "/d5e.png",
    title: "Subhas Chandra Bose",
    text: "आजाद हिंद फौज के संस्थापक।",
    en: "युवाओं में देशभक्ति की आग जगाई।",
    hi: "नारा: “तुम मुझे खून दो, मैं तुम्हें आज़ादी दूँगा”",
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
        <p className="mb-4 text-lg text-black">{item.en}</p>

        {/* Hindi */}
        <p className="mb-6 text-lg text-black">{item.hi}</p>

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
