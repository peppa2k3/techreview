import { useState } from "react";

// Header Component
function Header({ setTypeProduct }) {
  const [activeType, setActiveType] = useState("key");

  const categories = [
    {
      type: "key",
      label: "Keyboard",
      icon: "",
      link: "./keyboard72.png",
    },
    { 
      type: "switch",
      label: "Switch",
      icon: "",
      link: "./switch72.png",
    },
    {
      type: "kit",
      label: "Kit",
      icon: "",
      link: "./kit72.png",
    },
    {
      type: "keycap",
      label: "Keycap",
      icon: "",
      link: "./keycap72.png",
    },
    {
      type: "noithat",
      label: "Decor",
      icon: "",
      link: "./decor72.png",
    },
    {
      type: "nothing",
      label: "Phụ kiện",
      icon: "",
      link: "./accessory72.png",
    },
  ];

  function handleSetTypeProduct(type) {
    setTypeProduct(type);
    setActiveType(type);
  }

  return (
    <header className=" top-0 z-40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900/95 backdrop-blur-xl border-b border-blue-500/20">
      {/* Animated background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-600/10 via-transparent to-transparent animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Logo */}
        <h1
          onClick={() => handleSetTypeProduct("key")}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-center mb-8 cursor-pointer transition-all duration-300 hover:scale-105 italic"
        >
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            Techreview
          </span>
        </h1>

        {/* Categories Grid */}
        <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((category) => (
            <button
              key={category.type}
              onClick={() => handleSetTypeProduct(category.type)}
              className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                activeType === category.type
                  ? "bg-gradient-to-br from-blue-500/30 to-blue-600/30 border-2 border-blue-500 shadow-lg shadow-blue-500/50"
                  : "bg-slate-800/50 border-2 border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/70"
              }`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-all duration-300"></div>

              <div className="relative flex flex-col items-center gap-2">
                <span className="text-3xl transform group-hover:scale-110 transition-transform">
                  {category.icon}
                  <img src={category?.link} />
                </span>
                <span
                  className={`text-sm font-bold transition-colors ${
                    activeType === category.type
                      ? "text-white"
                      : "text-slate-300 group-hover:text-white"
                  }`}
                >
                  {category.label}
                </span>
              </div>

              {/* Active indicator */}
              {activeType === category.type && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              )}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
export default Header;
