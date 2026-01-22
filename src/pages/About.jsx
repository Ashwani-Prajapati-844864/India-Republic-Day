import { Link } from "react-router-dom";

const galleryImages = [
  "/a1.png",
  "/s1.png",
  "/p1.png",
  "/a2.png",
  "/s2.png",
  "/p2.png",
  "/a3.png",
  "/a4.png",
  "/a5.png",
  "/a6.png",
  "/a7.png",
  "/a8.png",
  "/a9.png",
  "/a10.png",
  "/a11.png",
  "/a12.png",
  "/a13.png",
  "/a14.png",
];


const inspiration = [
  {
    img: "/cdo.png",
    name: "Abhinav Gopal (IAS)",
    role: "Ghaizabad || CDO",
  },
];

const codeyogi = [
  {
    img: "/ceo.png",
    name: "Prsant Codeyogi",
    role: "Codeyogi || CEO",
  },
  {
    img: "/coo.png",
    name: "Rakesh Sehgal",
    role: "Codeyogi || COO",
  },
];

const classTeacher = [
  {
    img: "/demo.png",
    name: "Mr. Yogendra Choudhary",
    role: "Class Teacher || 10th (Science)",
  },
  {
    img: "/demo.png",
    name: "Mr. Aaloke",
    role: "Class Teacher || 12th (PCM)",
  },
  {
    img: "/demo.png",
    name: "Mr. Gupta",
    role: "Class Teacher || 12th (Arts)",
  },
];

const team = [
  {
    img: "/sunny.png",
    name: "Sunny Prajapati",
    role: "Creater",
  },
  {
    img: "/Ashwani.png",
    name: "Ashwani Prajapati",
    role: "Developer",
  },
  {
    img: "/prince.png",
    name: "Prince Jatav",
    role: "Client",
  },
];

export default function About() {
  const Card = (
    { img, name, role, link }, // card css all   Card component
  ) => (
    <div className="w-full max-w-xs p-8 text-center transition bg-yellow-200 shadow-lg rounded-xl hover:-translate-y-2 hover:shadow-xl">
      <img src={img} className="w-32 h-32 mx-auto rounded-full" />
      <h3 className="mt-3 text-lg font-bold">{name}</h3>
      {link ? (
        /* 👉 Only TEAM MEMBER button */
        <Link
          to={link}
          className="inline-block px-5 py-2 mt-3 text-sm font-semibold text-white transition-all duration-300 bg-blue-600 rounded-full shadow-md cursor-pointer sm:text-base hover:bg-orange-500 hover:scale-110 hover:shadow-xl"
        >
          {role}
        </Link>
      ) : (
        /* 👉 Others normal text */
        <p className="mt-2 font-semibold text-green-700">{role}</p>
      )}
    </div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* FIXED BACKGROUND LAYER */}
      <div className="fixed inset-0 -z-10">
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(to bottom, #ff9933 0%, white 50%, #138808 100%)",
          }}
        />
      </div>

      {/* SCROLL CONTENT */}
      <div className="relative z-10 p-6 space-y-16">
        {/* Our Inspiration */}
        <Section title="🌟 Our Inspiration">
          <div className="flex flex-wrap justify-center gap-8">
            {inspiration.map((p, i) => (
              <Card key={i} {...p} />
            ))}
          </div>
        </Section>

        {/* Codeyogi Teacher */}
        <Section title="👨‍🏫 Codeyogi Teacher">
          <div className="flex flex-wrap justify-center gap-8">
            {codeyogi.map((p, i) => (
              <Card key={i} {...p} />
            ))}
          </div>
        </Section>

        {/* Class Teacher */}
        <Section title="🏫 Class Teacher">
          <div className="flex flex-wrap justify-center gap-8">
            {classTeacher.map((p, i) => (
              <Card key={i} {...p} />
            ))}
          </div>
        </Section>

        {/* Team Members */}
        <Section title="💻 Team Members">
          <div className="flex flex-wrap justify-center gap-8">
            {team.map((p, i) => (
              <Card key={i} {...p} link={`/team/${i + 1}`} />
            ))}
          </div>
        </Section>

        {/* Auto Scroll Gallery */}
        <Section title="📸 Certificates">
          <div className="mb-10 overflow-hidden">
            <div className="gap-4 auto-scroll">
              {[...galleryImages, ...galleryImages].map((url, i) => (
                <img
                  key={i}
                  src={url}
                  className="object-cover shadow-md w-72 h-44 rounded-xl shrink-0"
                />
              ))}
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold text-center text-blue-900">
        {title}
      </h2>
      {children}
    </div>
  );
}

function Grid({ children }) {
  return (
    <div className="grid max-w-6xl gap-6 px-4 mx-auto my-10 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
      {children}
    </div>
  );
}
