import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-main-light py-16">
        <div className="container mx-auto px-6">
          {/* Title Section */}
          <div className="text-center">
            <h2
              className="text-4xl md:text-5xl font-bold text-main-green mb-6 animate-fade-in"
              style={{ fontFamily: "Barlow Semi Condensed" }}
            >
              About the Institute of Public Companies
            </h2>
            <p className="text-lg md:text-xl text-text-color max-w-3xl mx-auto leading-relaxed">
              The Institute of Public Companies (IPC) is the world’s first
              dedicated institution for public company formation, management,
              and leadership. Our mission is to transform ambitious individuals
              into extraordinary leaders capable of steering billion-dollar
              public companies.
            </p>
          </div>

          {/* About Content Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mission Section */}
            <div className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
              <h3
                className="text-2xl font-bold text-accent-blue mb-4"
                style={{ fontFamily: "Barlow Semi Condensed" }}
              >
                Our Mission
              </h3>
              <p className="text-text-color leading-relaxed">
                We specialize in rigorous, industry-defining training programs
                that ensure participants master corporate governance, financial
                strategies, and business innovation. At IPC, we are dedicated to
                shaping the future of corporate leadership.
              </p>
            </div>

            {/* What We Do Section */}
            <div className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
              <h3
                className="text-2xl font-bold text-accent-blue mb-4"
                style={{ fontFamily: "Barlow Semi Condensed" }}
              >
                What We Do
              </h3>
              <p className="text-text-color leading-relaxed">
                Our unique curriculum, developed in collaboration with global
                Securities & Exchange Commissions and CEOs, guarantees not just
                theoretical knowledge but actionable skills. Whether you’re an
                aspiring entrepreneur, a seasoned professional, or a future
                visionary, IPC equips you to excel and redefine corporate
                success.
              </p>
            </div>
          </div>

          {/* Final Highlight */}
          <div className="mt-12 text-center">
            <p className="text-lg md:text-xl text-text-color leading-relaxed max-w-4xl mx-auto font-bold">
              In essence, IPC is not just an institute—it’s the birthplace of
              future billionaires and the foundation for ethical, innovative,
              and visionary business leadership.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
