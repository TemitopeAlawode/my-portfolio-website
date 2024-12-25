import { useState } from "react";

const Header = () => {
  const [openMenuBtn, setOpenMenuBtn] = useState(false);
  const toggleMenuBtn = () => {
    setOpenMenuBtn(!openMenuBtn);
  };
  return (
    <header id="header" className="sticky top-0 z-10 bg-[#172554] py-4">
      <div className="relative container flex justify-between items-center mx-auto text-white">
        <div className="text-5xl font-bold">
          <a href="#">TA</a>
        </div>
        <div className="hidden text-2xl space-x-6 overflow-x-hidden md:block">
          <a href="#" className=" hover:text-blue-500">
            Home
          </a>
          <a href="#about" className=" hover:text-blue-500">
            About
          </a>
          <a href="#skills" className=" hover:text-blue-500">
            Skills
          </a>
          <a href="#projects" className=" hover:text-blue-500">
            Projects
          </a>
          <a href="#education" className=" hover:text-blue-500">
            Education
          </a>
          <a href="#contact" className=" hover:text-blue-500">
            Contact
          </a>
        </div>

        {/* HamBurger */}
        <button
          id="menu-btn"
          className="block md:hidden focus:outline-none"
          onClick={toggleMenuBtn}
        >
          <span
            className={`hamburger-top ${
              openMenuBtn ? "rotate-45 translate-y-2 bg-red-700" : "bg-white"
            }`}
          ></span>
          <span
            className={`hamburger-middle bg-white ${
              openMenuBtn ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`hamburger-bottom ${
              openMenuBtn ? "-rotate-45 -translate-y-2 bg-red-700" : "bg-white"
            }`}
          ></span>
        </button>
      </div>

      {/* <!-- Mobile Menu --> */}
      <div
        id="menu"
        className={`md:hidden absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 
          font-bold text-white bg-[#1b3075] left-6 right-6 transition-transform drop-shadow-md ${
            openMenuBtn ? "block" : "hidden"
          }`}
      >
        <a href="#" className=" hover:text-blue-500">
          Home
        </a>
        <a href="#about" className=" hover:text-blue-500">
          About
        </a>
        <a href="#skills" className=" hover:text-blue-500">
          Skills
        </a>
        <a href="#projects" className=" hover:text-blue-500">
          Projects
        </a>
        <a href="#education" className=" hover:text-blue-500">
          Education
        </a>
        <a href="#contact" className=" hover:text-blue-500">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
