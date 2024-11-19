import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center bg-no-repeat h-screen hero_image lg:h-screen">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/30"></div>

        {/* Content Container */}
        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:h-full lg:flex lg:items-center text-main-light">
          <div className="max-w-2xl text-center lg:text-left">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-main-light font-barlow leading-snug">
              Welcome to the
            </h2>
            <h1 className="text-3xl mt-4 sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-barlow uppercase leading-snug sm:leading-tight animate-slide-in">
              <span className="text-main-green"> Institute of </span>
              <br />
              PUBLIC COMPANIES
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl italic font-aeonik leading-relaxed animate-fade-in">
              "The Birth Place of Public Companies"
            </p>

            {/* Call-to-Action */}
            <div className="mt-8">
              <Link
                to="/herosection"
                className="inline-block bg-main-green text-main-dark px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-bold shadow-lg hover:bg-accent-blue hover:text-main-light transition-all duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Work Section */}
      <section className="bg-main-light py-16 px-6 sm:px-12 lg:px-16">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-barlow font-extrabold text-main-dark mb-6 animate-slide-in">
            How It Works
          </h2>
          <p className="text-xl font-aeonik text-text-color mb-12 animate-fade-in">
            Our Step-by-Step Approach
          </p>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
          {/* Step 1 */}
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition animate-fade-in cursor-pointer transform hover:scale-105">
            <h3 className="text-2xl font-barlow font-bold text-main-green mb-4">
              1. Applicant Assessment
            </h3>
            <p className="text-text-color font-aeonik leading-relaxed">
              Each candidate undergoes a thorough assessment to evaluate their
              leadership potential, ambition, and suitability for public company
              leadership.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition animate-slide-in cursor-pointer transform hover:scale-105">
            <h3 className="text-2xl font-barlow font-bold text-main-green mb-4">
              2. Induction & Pre-Training
            </h3>
            <p className="text-text-color font-aeonik leading-relaxed">
              Selected applicants participate in rigorous pre-training,
              preparing them for corporate governance skills and business growth
              strategies.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition animate-fade-in-delay cursor-pointer transform hover:scale-105">
            <h3 className="text-2xl font-barlow font-bold text-main-green mb-4">
              3. Public Company Allocation
            </h3>
            <p className="text-text-color font-aeonik leading-relaxed">
              Participants are assigned to a public limited company (real or
              simulated) to apply strategic management principles.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition animate-slide-in cursor-pointer transform hover:scale-105">
            <h3 className="text-2xl font-barlow font-bold text-main-green mb-4">
              4. Performance & Monitoring
            </h3>
            <p className="text-text-color font-aeonik leading-relaxed">
              Each participant’s progress is closely monitored, focusing on
              financial growth, corporate responsibility, and leadership
              development.
            </p>
          </div>

          {/* Step 5 */}
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition animate-fade-in cursor-pointer transform hover:scale-105">
            <h3 className="text-2xl font-barlow font-bold text-main-green mb-4">
              5. Evaluation & Examination
            </h3>
            <p className="text-text-color font-aeonik leading-relaxed">
              Comprehensive evaluations test participants’ knowledge in public
              company management, investment readiness, and business innovation.
            </p>
          </div>

          {/* Step 6 */}
          <div className="p-6 bg-white shadow-lg rounded-3xl hover:shadow-2xl transition animate-fade-in-delay cursor-pointer transform hover:scale-105">
            <h3 className="text-2xl font-barlow font-bold text-main-green mb-4">
              6. Certification & CEOship
            </h3>
            <p className="text-text-color font-aeonik leading-relaxed">
              Successful participants receive IPC certification and are fully
              prepared for CEO roles in public companies, marking their
              transformation into extraordinary leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className="bg-main-light py-16 px-6 sm:px-12 lg:px-16">
        {/* Container */}
        <div className="max-w-screen-xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-barlow font-extrabold text-main-dark mb-6 animate-slide-in">
            OUR GREATEST STRENGTH
          </h2>
          <p className="text-xl sm:text-2xl font-aeonik text-text-color mb-12 animate-fade-in">
            Mission, Vision, and Values
          </p>

          {/* Content Box */}
          <div
            className="relative p-4 lg:p-12 pt-12 pb-12 lg:pt-32 lg:pb-32 bg-cover bg-center rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-delay"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-900/70 rounded-2xl"></div>

            {/* Content */}
            <div className="relative z-10">
              <p className="text-base paragraph_mobile sm:text-lg md:text-xl font-aeonik text-main-light leading-relaxed sm:leading-loose animate-slide-up">
                The Institute of Public Companies (IPC) is dedicated to
                transforming individuals into leaders of billion-dollar public
                companies. Our mission combines advanced public company
                leadership training with a commitment to corporate ethics,
                innovation, and inclusivity. IPC shapes ethical, visionary CEOs
                who build impactful, high-growth companies, accessible to all,
                regardless of age, gender, religion, or geography.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Constituents Section */}
      <section className="bg-main-light py-16 px-6 sm:px-12 lg:px-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-barlow font-extrabold text-main-dark mb-12 animate-slide-in">
            Our Program Constituents
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Public Company Founders Program",
                url: "/public-company-founders-program",
              },
              { title: "CEO Genesis Program", url: "/ceo-genesis-program" },
              { title: "Billionaire Blueprint", url: "/billionaire-blueprint" },
              {
                title: "The Visionary Accelerator",
                url: "/visionary-accelerator",
              },
              { title: "The Vanguard R&D Lab", url: "/vanguard-rd-lab" },
              {
                title: "Ethos Leadership Program",
                url: "/ethos-leadership-program",
              },
            ].map((program, idx) => (
              <Link
                key={idx}
                to={program.url}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in"
              >
                <h3 className="text-xl text-left font-barlow font-bold text-main-dark mb-4">
                  {program.title}
                </h3>
                <p className="text-sm text-left font-aeonik text-gray-600">
                  Learn more about our comprehensive program designed to build
                  impactful leaders and visionary CEOs.
                </p>
                <div className="absolute inset-0 bg-main-green opacity-0 hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/*  Women in Leadership Program Section */}

      <div className="bg-main-light py-16 px-6 sm:px-12 lg:px-20">
        <div
          className="relative bg-cover bg-center rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gray-900/50 rounded-xl"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 sm:px-12 lg:px-16 py-20 text-main-light">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-barlow font-extrabold leading-tight mb-6 text-main-green animate-slide-in">
              Women in Leadership Program
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-aeonik italic leading-relaxed mb-6 animate-fade-in">
              Empowering Women to Lead Public Companies and Drive Global Impact
            </p>
            <p className="text-base paragraph_mobile sm:text-lg lg:text-xl font-aeonik leading-relaxed max-w-4xl mx-auto mb-8 animate-fade-in-delay">
              A dedicated initiative designed to equip women with the tools,
              skills, and confidence needed to thrive in public company
              leadership. Our program welcomes women from all backgrounds and
              experience levels, providing specialized training and mentorship
              to prepare them for executive roles and CEO positions.
            </p>
            <Link
              to="/women-leadership"
              className="inline-block bg-main-green text-main-dark px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:bg-accent-blue hover:text-main-light transition-all duration-300 animate-bounce"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/*  Young Leaders Program Section */}
      <section className="bg-main-light py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-barlow font-extrabold text-main-dark mb-6 animate-slide-in">
              Young Leaders Program
            </h2>
            <p className="text-lg sm:text-xl font-aeonik italic text-text-color leading-relaxed mb-8 animate-fade-in">
              Empowering Future CEOs from Ages 10 to 21
            </p>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center bg-white shadow-lg hover:shadow-2xl rounded-3xl overflow-hidden transition-all duration-300 animate-slide-in">
            {/* Image */}
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
                alt="Young Leaders"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="lg:w-1/2 p-8 sm:p-12">
              <h3 className="text-2xl font-barlow font-bold text-main-dark mb-4">
                Empowering the Next Generation of Leaders
              </h3>
              <p className="text-base sm:text-lg font-aeonik text-text-color mb-6 leading-relaxed paragraph_mobile">
                Designed for ages 10 to 21, the Young Leaders Program equips
                future CEOs with essential skills in business, leadership, and
                corporate governance. With age-specific modules, interactive
                projects, and mentorship, participants gain confidence and
                knowledge to excel in their careers.
              </p>

              <Link
                to="/youngleaders"
                className="inline-block bg-main-green text-main-dark px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:bg-accent-blue hover:text-main-light transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*  How We Do It Section */}
      <section className="bg-main-light py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-barlow font-extrabold text-main-dark mb-6 animate-slide-in">
            How We Do It
          </h2>
          <p className="text-lg sm:text-xl font-aeonik italic text-text-color leading-relaxed mb-12 animate-fade-in">
            Your Journey with The First Institute
          </p>

          <div className="relative bg-white shadow-lg hover:shadow-2xl rounded-3xl overflow-hidden transition-all duration-300 animate-slide-in">
            <div className="p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-barlow font-bold text-main-dark mb-6">
                Admissions Gateway
              </h3>
              <p className="text-base sm:text-lg font-aeonik text-text-color mb-8 leading-relaxed">
                Begin your transformative journey with a rigorous assessment,
                orientation, and milestone mapping to prepare you for public
                company leadership.
              </p>
              <Link
                to="/howwedoit"
                className="inline-block bg-main-green text-main-dark px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:bg-accent-blue hover:text-main-light transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*  Top 20 FAQs Section */}
      <section className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-barlow font-extrabold text-white mb-6 animate-slide-in">
            Discover the Top 20 FAQs
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl font-aeonik italic text-gray-200 mb-12 animate-fade-in">
            Curious about the IPC Program? Click below to explore answers to the
            most frequently asked questions and start your journey to success!
          </p>

          {/* Button */}
          <Link className="text-decoration-none" to="/faqspage">
            <button className="bg-white text-main-dark px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:bg-gray-200 transition-all duration-300 animate-bounce">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/*  Live Chat Section */}
      <section class="bg-gradient-to-r from-main-light via-white to-main-light py-12 px-6 text-text-color font-barlow">
        <div class="max-w-5xl mx-auto shadow-2xl rounded-xl overflow-hidden bg-white relative">
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-main-light opacity-30 pointer-events-none"></div>
          <div class="p-10">
            <h2 class="text-4xl font-extrabold text-main-dark animate-fade-in text-center mb-4">
              <span class="underline decoration-main-green decoration-4">
                Live Chat & 24/7 Support
              </span>
            </h2>
            <p class="text-lg text-center text-gray-700 animate-slide-in paragraph_mobile">
              Our Live Chat 24/7 Support is here to assist you at every step of
              your journey. Whether you have questions about our program price
              plans, need guidance through the admissions process, or want to
              learn more about how IPC can help you achieve your career goals,
              our team is always ready to help.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 lg:p-10 animate-fade-in-delay">
            <div class="flex items-center gap-4">
              <div class="bg-main-green text-main-dark w-12 h-12 flex justify-center items-center rounded-full shadow-md animate-bounce">
                <i class="fas fa-clock text-xl"></i>
              </div>
              <p class="text-lg font-medium paragraph_mobile">
                24/7 Availability: Our team is here to assist you any time, day
                or night.
              </p>
            </div>

            <div class="flex items-center gap-4">
              <div class="bg-main-green text-main-dark w-12 h-12 flex justify-center items-center rounded-full shadow-md animate-bounce">
                <i class="fas fa-user text-xl"></i>
              </div>
              <p class="text-lg font-medium paragraph_mobile">
                Dedicated Experts: Personalized support tailored to meet your
                needs.
              </p>
            </div>

            <div class="flex items-center gap-4">
              <div class="bg-main-green text-main-dark w-12 h-12 flex justify-center items-center rounded-full shadow-md animate-bounce">
                <i class="fas fa-comments text-xl"></i>
              </div>
              <p class="text-lg font-medium paragraph_mobile">
                Clear Communication: Get detailed guidance on admissions, plans,
                and more.
              </p>
            </div>

            <div class="flex items-center gap-4">
              <div class="bg-main-green text-main-dark w-12 h-12 flex justify-center items-center rounded-full shadow-md animate-bounce">
                <i class="fas fa-handshake text-xl"></i>
              </div>
              <p class="text-lg font-medium paragraph_mobile">
                Trusted Support: Depend on us for seamless assistance and peace
                of mind.
              </p>
            </div>
          </div>

          <div class="flex justify-center mt-6 pb-10">
            <button class="bg-gradient-to-r from-main-green to-green-500 text-white px-8 py-4 rounded-full font-extrabold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg">
              Start a Conversation
            </button>
          </div>
        </div>
      </section>

      {/* CLIENTS Section */}
      <section class="bg-main-light py-12 px-6">
        <h2 class="text-center text-accent-blue font-aeonik text-3xl font-bold mb-10">
          What Clients Say
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 animate-slide-in">
            <p class="text-text-color font-barlow italic text-lg">
              "The training and mentorship at IPC have been transformative. I
              came in with a vision, and IPC gave me the skills, knowledge, and
              confidence to turn that vision into a billion-dollar reality.
              Truly life-changing!"
            </p>
            <h4 class="mt-4 text-main-green font-bold text-lg">John S.</h4>
            <p class="text-sm text-accent-blue">
              CEO, Public Company | United States
            </p>
          </div>

          <div class="card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 animate-slide-in">
            <p class="text-text-color font-barlow italic text-lg">
              "IPC has redefined what it means to be a leader in the public
              sector. Their commitment to excellence and real-world application
              prepared me to take my company public with confidence. The
              international insights were invaluable."
            </p>
            <h4 class="mt-4 text-main-green font-bold text-lg">Yuki T.</h4>
            <p class="text-sm text-accent-blue">
              Entrepreneur and CEO, Technology Firm | Japan
            </p>
          </div>

          <div class="card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 animate-slide-in">
            <p class="text-text-color font-barlow italic text-lg">
              "IPC’s rigorous training and focus on corporate ethics helped me
              build a solid foundation for my business. The network I gained has
              opened doors I never thought possible. I’m now leading in my field
              with pride."
            </p>
            <h4 class="mt-4 text-main-green font-bold text-lg">Aisha R.</h4>
            <p class="text-sm text-accent-blue">
              Business Owner, Real Estate | Dubai, UAE
            </p>
          </div>

          <div class="card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 animate-slide-in">
            <p class="text-text-color font-barlow italic text-lg">
              "The hands-on approach and global perspective at IPC gave me the
              tools to make bold moves in my industry. I am grateful for the
              mentorship and support that guided me every step of the way."
            </p>
            <h4 class="mt-4 text-main-green font-bold text-lg">Mark L.</h4>
            <p class="text-sm text-accent-blue">
              Founder and CEO, Healthcare Startup | United Kingdom
            </p>
          </div>

          <div class="card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 animate-slide-in">
            <p class="text-text-color font-barlow italic text-lg">
              "As a business owner, IPC helped me harness my potential and
              equipped me with the skills to lead with impact. Their focus on
              growth and ethics has empowered me to make a difference in my
              community."
            </p>
            <h4 class="mt-4 text-main-green font-bold text-lg">Nabirye K.</h4>
            <p class="text-sm text-accent-blue">
              Social Entrepreneur, Agriculture Sector | Uganda
            </p>
          </div>

          <div class="card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 animate-slide-in">
            <p class="text-text-color font-barlow italic text-lg">
              "IPC provided more than education—it gave me the confidence to
              lead my company on an international scale. I’m now prepared to
              navigate global markets, and I owe much of that to IPC’s
              structured, visionary approach."
            </p>
            <h4 class="mt-4 text-main-green font-bold text-lg">Emily C.</h4>
            <p class="text-sm text-accent-blue">
              Co-Founder, Eco-Friendly Solutions | Australia
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
