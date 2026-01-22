import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    { name: "Home", path: "/" },
    { name: "Slogan", path: "/slogan" },
    { name: "Poem", path: "/poem" },
    { name: "Constitution", path: "/constitution" },
    { name: "Republic Day", path: "/republic" },
    { name: "About Me", path: "/about" },
  ];

  const linkClass = (
    { isActive }, // badi screen per button css
  ) =>
    `     
    px-5 py-2 rounded-full font-semibold
    transition-all duration-300
    ${isActive ? "text-white ring-2 ring-yellow-400 scale-110" : "bg-white text-green-700"}
hover:text-orange-600

    text-green-700 hover:text-green-700
    shadow-md
   ${isActive ? "text-white scale-110 ring-2 ring-white" : ""}
  `;

  return (
    <div className="sticky top-0 z-50 transition bg-green-600 shadow-xl hover:bg-orange-500">
      <div className="flex items-center justify-between px-4 py-3 text-white">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/image/logo.png"
            className="object-cover w-12 h-12 border-2 border-white rounded-full"
          />
          <h1 className="text-2xl font-bold tracking-wide">Codeyogi</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden gap-3 md:flex">
          {menus.map((item) => (
            <NavLink key={item.name} to={item.path} className={linkClass}>
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(true)}
          className="px-3 py-1 text-3xl text-white transition rounded-lg md:hidden hover:bg-white hover:text-green-700"
        >
          ☰
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 md:hidden"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-green-600 text-white shadow-2xl 
        transform transition-transform duration-300 md:hidden z-50
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/30">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-2xl hover:text-orange-400"
          >
            ✖
          </button>
        </div>

        <div className="flex flex-col">
          {menus.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `
                px-6 py-4 border-b border-white/20
                transition-all duration-300
                hover:bg-white hover:text-green-700
                ${isActive ? "bg-orange-500 text-white font-bold" : ""}
              `
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
