import { useParams, Link } from "react-router-dom";
import { useState } from "react";
const students = [
  {
    id: 1,
    name: "Sunny Parjapati",
    roll: "Class : 10th",
    img: "/image/sunny.png",
    en: "Introduction",
    hi: "My name is Sunny Parjapati.",
    cc: "I am a Student of class 10th. I Study at Janta Inter Collage, Siroli (Ghaziabad). I belong Ghaziabad District, Uttar Pradesh.",
    certificates: ["/image/s1.png", "/image/s2.png", "/image/s3.png"],
  },

  {
    id: 2,
    name: "Ashwani Prajapati",
    roll: "Class: 12th",
    img: "/image/Ashwani.png",
    en: "I am Ashwani Prajapati, a Class 12 student from Janta Inter College. I have a strong interest in web development and modern technologies.",
    hi: "This project is developed using React with my team members. My role was to work on UI design, components, and responsiveness.",
    cc: "I enjoy learning new tools and improving my coding skills through real projects.",
    certificates: [
      "/image/a1.png",
      "/image/a2.png",
      "/image/a3.png ",
      "/image/a4.png",
      "/image/a5.png",
      "/image/a6.png ",
      "/image/a7.png",
      "/image/a8.png",
      "/image/a9.png ",
      "/image/a10.png",
      "/image/a11.png",
      "/image/a12.png ",
      "/image/a13.png",
      "/image/a14.png",
      "/image/a3.png ",
    ],
  },

  {
    id: 3,
    name: "Prince Jatav",
    roll: "Class: 12th",
    img: "/image/prince.png",
    en: "My name is Prince Jatav.",
    hi: "I am a Student of class 12th(Arts). I Study at Janta Inter Collage, Siroli (Ghaziabad). I belong Ghaziabad District, Uttar Pradesh. ",

    certificates: ["/image/p1.png", "/image/p2.png"],
  },
];


export default function Team() {
  const { id } = useParams();
  const [preview, setPreview] = useState(null);

  const student = students.find((s) => s.id == id);

  if (!student) {
    return <p className="p-5 text-center">Student Not Found</p>;
  }

  return (
    <div
      className="flex justify-center min-h-screen p-6"
      style={{
        background: "linear-gradient(to bottom, #dbeafe, white)",
      }}
    >
      <div className="w-full max-w-3xl p-6 bg-white shadow-2xl rounded-2xl">
        {/* Photo */}
        <img
          src={student.img}
          className="object-cover w-40 h-40 mx-auto mb-4 border-4 border-blue-500 rounded-full"
        />

        {/* Name */}
        <h1 className="text-3xl font-bold text-center text-blue-900">
          {student.name}
        </h1>

        {/* Roll */}
        <p className="mt-1 text-2xl text-center gray-600 text-">
          {student.roll}
        </p>

        {/* English */}
        <p className="mt-5 text-xl font-bold text-black">{student.en}</p>

        {/* Hindi */}
        <p className="mt-3 text-lg text-black">{student.hi}</p>
        {/* Hindi */}
        <p className="mt-3 text-lg text-black">{student.cc}</p>

        {/* Certificates */}
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-center text-green-700">
            🎓 Certificates
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {student.certificates.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setPreview(img)}
                className="object-cover w-full h-40 transition rounded-lg shadow cursor-pointer hover:scale-105"
              />
            ))}
          </div>
        </div>

        {/* Back */}
        <div className="mt-6 text-center">
          <Link
            to="/about"
            className="inline-block px-6 py-2 text-white transition bg-blue-600 rounded-full shadow hover:bg-blue-700 active:scale-95"
          >
            ← Back to Team
          </Link>
        </div>
      </div>
      {/* Certificate Preview */}
      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setPreview(null)}
        >
          <img
            src={preview}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
