import React, { useState } from "react";

const FifthProgram = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What does The Vanguard R&D Lab cover?",
      answer:
        "It covers business innovation, market research, and R&D strategies for high-growth sectors.",
    },
    {
      question: "How long is this program?",
      answer:
        "The R&D Lab runs for six months, with options to extend project work.",
    },
    {
      question: "Is prior R&D experience required?",
      answer:
        "No prior experience is necessary, just a strong interest in business innovation.",
    },
    {
      question: "Will this program help me secure investors?",
      answer:
        "Yes, you’ll learn methods to attract investment bankers and secure public company funding.",
    },
    {
      question: "Are there practical projects included?",
      answer:
        "Yes, practical projects and market-ready solutions are core elements.",
    },
    {
      question: "Can I work on my own business idea in this program?",
      answer: "Yes, participants are encouraged to refine their R&D projects.",
    },
    {
      question: "Is there support for intellectual property (IP) management?",
      answer:
        "Yes, you’ll learn IP management strategies for business opportunities.",
    },
    {
      question: "Will there be industry experts involved?",
      answer:
        "Yes, seasoned professionals with expertise in R&D lead the sessions.",
    },
    {
      question: "Can I enroll if my background is outside tech?",
      answer:
        "Yes, this R&D program is open to all fields interested in high-growth innovation.",
    },
    {
      question: "How will this program help my career?",
      answer:
        "It provides R&D, innovation, and market research skills valued across high-growth sectors.",
    },
  ];

  return (
    <div className="bg-main-light min-h-screen py-16 px-6 sm:px-12 lg:px-20">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/60"></div>

        {/* Content Container */}
        <div className="relative z-10 text-center max-w-3xl px-4 sm:px-6 md:px-8 lg:px-12 text-main-light">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-barlow font-extrabold leading-tight mb-4 sm:mb-6 animate-slide-in text-main-green">
            The Vanguard R&D Lab
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-aeonik italic leading-relaxed animate-fade-in">
            Pioneering Innovation for High-Growth Sectors
          </p>

          {/* Description */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-aeonik leading-relaxed max-w-prose mx-auto animate-fade-in-delay">
            The Vanguard R&D Lab focuses on identifying and cultivating business
            opportunities in emerging, high-growth sectors. This program
            explores business innovation and R&D strategies designed to attract
            investment bankers and secure funding. Participants learn how to
            develop cutting-edge projects with market-ready solutions,
            positioning them to lead and invest in industries that shape the
            future.
          </p>

          {/* Call-to-Action Button */}
          <div className="mt-6 sm:mt-10">
            <a
              href="#faqs"
              className="inline-block bg-main-green text-main-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-lg font-bold shadow-lg hover:bg-accent-blue hover:text-main-light transition-all duration-300 animate-bounce"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="max-w-5xl mt-8 mx-auto">
        <h2 className="text-3xl sm:text-4xl font-barlow font-extrabold text-main-dark mb-8 text-center animate-slide-in">
          FAQs for The Vanguard R&D Lab
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white mb-4 shadow-md hover:shadow-lg rounded-xl transition-all duration-300 animate-fade-in"
          >
            {/* Question */}
            <div
              onClick={() => toggleFaq(index)}
              className="cursor-pointer flex justify-between items-center p-4 sm:p-6 text-main-dark font-barlow font-bold text-lg sm:text-xl"
            >
              {faq.question}
              <span className="text-xl sm:text-2xl font-bold">
                {activeFaq === index ? "−" : "+"}
              </span>
            </div>

            {/* Answer */}
            {activeFaq === index && (
              <div className="p-4 sm:p-6 border-t text-text-color font-aeonik text-base sm:text-lg leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FifthProgram;
