import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section>
      {/* Hero Section with Background Image */}
      <div className="relative bg-[url('./assets/images/Hero_Page.jpg')] bg-cover bg-center bg-no-repeat h-[70vh] sm:h-[90vh] animate-fade-in">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 md:px-8 lg:px-16 text-main-light">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-barlow font-extrabold uppercase text-left leading-snug sm:leading-tight animate-slide-in">
            Welcome to the <br />
            <span className="text-main-green">
              Institute of Public Companies
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-left max-w-prose leading-relaxed animate-fade-in-delay">
            We are the world’s first dedicated institute for public companies,
            specializing in their formation, training, management, and
            leadership. We are also the birthplace of future billionaires,
            transforming ordinary people into extraordinary businessmen and
            women.
          </p>

          {/* Call-to-Action Button */}
          <div className="mt-6 sm:mt-8">
            <Link
              to="/"
              className="inline-block bg-main-dark text-main-light px-6 sm:px-8 py-3 sm:py-4 rounded-md text-sm sm:text-lg font-medium shadow hover:bg-accent-blue hover:shadow-lg transition"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="bg-main-light text-main-dark py-16 px-6 sm:px-12 lg:px-16">
        <div className="max-w-screen-lg mx-auto text-left">
          <h2 className="text-3xl sm:text-4xl font-barlow font-extrabold mb-6 leading-tight animate-slide-in">
            Welcome to the <br />
            <span className="text-main-green">
              Become the CEO of a Public Company
            </span>
          </h2>
          <p className="text-lg sm:text-xl font-aeonik leading-relaxed animate-fade-in-delay">
            With our{" "}
            <strong className="font-bold">
              CERTIFIED PUBLIC COMPANIES SPECIALIST & CEO CERTIFICATION
            </strong>{" "}
            and a guaranteed HNWI (High Net Worth Individual) status.
          </p>
          <p className="mt-6 text-lg sm:text-xl font-aeonik leading-relaxed animate-fade-in">
            We guarantee every successful candidate who undergoes this grueling,
            vigorous, and warlike training certification, CEOship of a public
            company under such protocols that define the pre-requisites of such
            an assurance. In short, we are the world’s most advanced business
            training school.
          </p>
          <p className="mt-6 text-lg sm:text-xl font-aeonik leading-relaxed animate-fade-in">
            Our curriculum, developed through prolonged interactions with many
            Securities & Exchange Commissions of the world, is patented and
            well-guarded, providing unique and real-time exercises for ultimate
            leadership training.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
