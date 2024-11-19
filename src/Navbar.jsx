import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg relative z-10">
      {/* Main Menu */}
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link className="test-decoration-none" to="/">
          <div className="relative flex items-center justify-center">
            <h1
              className="font-bold text-center"
              style={{
                fontSize: "clamp(1rem, 3.5vw, 2.2rem)", // Adjust maximum font size for large screens
              }}
            >
              <span className="block sm:inline text-main-green font-aeonik">
                Institute of
              </span>
              <span className="block sm:inline text-accent-blue font-barlow pl-2">
                Public Companies
              </span>
            </h1>
          </div>
        </Link>
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden navbar-burger flex items-center text-gray-800 p-3"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="block h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6h18M3 12h18m-6 6h6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:items-center lg:space-x-6">
          <li>
            <a
              href="/"
              className="text-sm text-gray-700 hover:text-main-green transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-sm text-gray-700 hover:text-main-green transition duration-300"
            >
              About
            </a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-main-green transition duration-300 cursor-pointer"
            >
              Programs
            </a>
            {isDropdownOpen && (
              <ul
                className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md z-50"
                style={{
                  width: "200px", // Adjust dropdown width
                  padding: "10px 0", // Add space around dropdown items
                }}
              >
                <li>
                  <a
                    href="/public-company-founders-program"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-main-green hover:text-white transition duration-300"
                  >
                    Public Company Founders Program
                  </a>
                </li>
                <li>
                  <a
                    href="/ceo-genesis-program"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-main-green hover:text-white transition duration-300"
                  >
                    CEO Genesis Program
                  </a>
                </li>
                <li>
                  <a
                    href="/billionaire-blueprint"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-main-green hover:text-white transition duration-300"
                  >
                    Billionaire Blueprint
                  </a>
                </li>
                <li>
                  <a
                    href="/visionary-accelerator"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-main-green hover:text-white transition duration-300"
                  >
                    Visionary Accelerator
                  </a>
                </li>
                <li>
                  <a
                    href="/vanguard-rd-lab"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-main-green hover:text-white transition duration-300"
                  >
                    Vanguard R&D Lab
                  </a>
                </li>
                <li>
                  <a
                    href="/ethos-leadership-program"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-main-green hover:text-white transition duration-300"
                  >
                    Ethos Leadership Program
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="/howwedoit"
              className="text-sm text-gray-700 hover:text-main-green transition duration-300"
            >
              How We Do It
            </a>
          </li>
          <li>
            <a
              href="/faqspage"
              className="text-sm text-gray-700 hover:text-main-green transition duration-300"
            >
              FAQs
            </a>
          </li>
        </ul>

        {/* Sign-Up Button */}
        <a
          href="#"
          className="hidden lg:inline-block py-2 px-6 bg-main-green text-white text-sm font-bold rounded-lg hover:bg-accent-blue transition duration-300"
        >
          Sign Up
        </a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="navbar-menu relative z-50">
          {/* Overlay */}
          <div className="fixed inset-0 bg-gray-800 opacity-25"></div>

          {/* Mobile Menu */}
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r shadow-md overflow-y-auto">
            {/* Mobile Header */}
            <div className="flex items-center mb-6">
              <button
                className="navbar-close ml-auto"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="h-6 w-6 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Links */}
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="block text-sm text-gray-800 hover:text-main-green"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block text-sm text-gray-800 hover:text-main-green"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/howwedoit"
                  className="block text-sm text-gray-800 hover:text-main-green"
                >
                  How We Do It
                </a>
              </li>
              <li>
                <a
                  href="/faqspage"
                  className="block text-sm text-gray-800 hover:text-main-green"
                >
                  FAQs
                </a>
              </li>

              {/* Programs Section */}
              <li className="relative">
                <button
                  className="block text-sm text-gray-800 hover:text-main-green w-full text-left"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Programs
                </button>
                {isDropdownOpen && (
                  <ul className="mt-2 space-y-2 pl-4">
                    <li>
                      <a
                        href="/public-company-founders-program"
                        className="block text-sm text-gray-800 hover:text-main-green"
                      >
                        Public Company Founders Program
                      </a>
                    </li>
                    <li>
                      <a
                        href="/ceo-genesis-program"
                        className="block text-sm text-gray-800 hover:text-main-green"
                      >
                        CEO Genesis Program
                      </a>
                    </li>
                    <li>
                      <a
                        href="/billionaire-blueprint"
                        className="block text-sm text-gray-800 hover:text-main-green"
                      >
                        Billionaire Blueprint
                      </a>
                    </li>
                    <li>
                      <a
                        href="/visionary-accelerator"
                        className="block text-sm text-gray-800 hover:text-main-green"
                      >
                        Visionary Accelerator
                      </a>
                    </li>
                    <li>
                      <a
                        href="/vanguard-rd-lab"
                        className="block text-sm text-gray-800 hover:text-main-green"
                      >
                        Vanguard R&D Lab
                      </a>
                    </li>
                    <li>
                      <a
                        href="/ethos-leadership-program"
                        className="block text-sm text-gray-800 hover:text-main-green"
                      >
                        Ethos Leadership Program
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>

            {/* Mobile Sign-Up */}
            <div className="mt-auto pt-6">
              <a
                href="#"
                className="block py-3 text-center text-sm font-bold bg-main-green text-white rounded-lg hover:bg-accent-blue transition duration-300"
              >
                Sign Up
              </a>
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
