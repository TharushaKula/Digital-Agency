import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="box pt-5 font-medium text-xl">
      <ul className="flex items-center justify-between">
        <li className="mr-auto">
          <img className="h-16" src={logo} alt="" />
        </li>
        <div className="md:flex hidden gap-11 mx-auto">
          <li>About Us</li>
          <li>Profile</li>
          <li>Team</li>
          <li>Contact</li>
          <li>Language</li>
        </div>
        <div className="md:flex hidden gap-5 ml-auto">
          <li>Sign In</li>
          <li>Sign Up</li>
        </div>
        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </ul>
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-5 mt-5">
          <li>About Us</li>
          <li>Profile</li>
          <li>Team</li>
          <li>Contact</li>
          <li>Language</li>
          <li>Sign In</li>
          <li>Sign Up</li>
        </ul>
      )}
    </nav>
  );
}