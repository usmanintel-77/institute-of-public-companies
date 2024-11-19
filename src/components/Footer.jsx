import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-gradient-to-br from-main-dark via-gray-800 to-black text-main-light py-12">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <div>
              <h3 class="text-2xl font-bold font-barlow mb-6 border-b-2 border-main-green pb-2">
                About Us
              </h3>
              <p class="text-gray-400 leading-relaxed">
                The Institute of Public Companies (IPC) is the world’s first
                dedicated institution for public company formation, management,
                and leadership. Our mission is to transform ambitious
                individuals into extraordinary leaders capable of steering
                billion-dollar public companies.
              </p>
            </div>

            <div>
              <h3 class="text-2xl font-bold font-barlow mb-6 border-b-2 border-main-green pb-2">
                Quick Links
              </h3>
              <ul class="space-y-4">
                <li>
                  <a
                    href="/"
                    class="text-gray-400 hover:text-main-green transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    class="text-gray-400 hover:text-main-green transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/howwedoit"
                    class="text-gray-400 hover:text-main-green transition duration-300"
                  >
                    How We Do It
                  </a>
                </li>
                <li>
                  <a
                    href="/faqspage"
                    class="text-gray-400 hover:text-main-green transition duration-300"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl font-bold font-barlow mb-6 border-b-2 border-main-green pb-2">
                Our Program Constituents
              </h3>
              <ul class="space-y-2 mb-4">
                <li>
                  <a
                    href="/public-company-founders-program"
                    class="text-gray-400 hover:text-main-green transition duration-300"
                  >
                    Public Company Founders Program
                  </a>
                </li>
                <li>
                  <a
                    href="/ceo-genesis-program"
                    class="text-gray-400 hover:text-main-green transition duration-300"
                  >
                    CEO Genesis Program
                  </a>
                </li>
                <li>
                  <a
                    href="/billionaire-blueprint"
                    class="text-gray-400 hover:text-main-green transition duration-300"
                  >
                    Billionaire Blueprint
                  </a>
                </li>
                <li>
                  <a
                    href="/visionary-accelerator"
                    class="text-gray-400 hover:text-main-green transition duration-300"
                  >
                    Visionary Accelerator
                  </a>
                </li>
                <li>
                  <a
                    href="/vanguard-rd-lab"
                    class="text-gray-400 hover:text-main-green transition duration-300"
                  >
                    Vanguard R&D Lab
                  </a>
                </li>
                <li>
                  <a
                    href="/ethos-leadership-program"
                    class="text-gray-400 hover:text-main-green transition duration-300"
                  >
                    Ethos Leadership Program
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl font-bold font-barlow mb-6 border-b-2 border-main-green pb-2">
                Contact Us
              </h3>
              <p class="text-gray-400">
                <span class="font-bold">Email:</span> support@example.com
              </p>
              <p class="text-gray-400">
                <span class="font-bold">Phone:</span> +123 456 789
              </p>
              <div class="mt-6 flex space-x-4 justify-center sm:justify-start">
                <a
                  href="#"
                  class="text-main-green hover:text-accent-blue transition"
                >
                  <i class="fab fa-facebook-f text-2xl"></i>
                </a>
                <a
                  href="#"
                  class="text-main-green hover:text-accent-blue transition"
                >
                  <i class="fab fa-twitter text-2xl"></i>
                </a>
                <a
                  href="#"
                  class="text-main-green hover:text-accent-blue transition"
                >
                  <i class="fab fa-instagram text-2xl"></i>
                </a>
                <a
                  href="#"
                  class="text-main-green hover:text-accent-blue transition"
                >
                  <i class="fab fa-linkedin-in text-2xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="mt-12 border-t border-gray-700 pt-6 text-center">
            <p class="text-gray-500 text-sm">
              &copy; 2024 IOPC. Created by Muhammad Usman. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
