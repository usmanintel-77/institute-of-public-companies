import React, { useState } from "react";

const FourthProgram = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What does the Visionary Accelerator focus on?",
      answer:
        "It emphasizes global business strategy, C Corporation formation, and international business leadership.",
    },
    {
      question: "How long is the program?",
      answer:
        "The Visionary Accelerator spans six months, covering key aspects of international business.",
    },
    {
      question: "Is prior international experience required?",
      answer:
        "No prior experience is needed, but interest in global markets is helpful.",
    },
    {
      question: "Can I apply if I want to expand an existing company?",
      answer:
        "Yes, the program is ideal for scaling new or established public companies internationally.",
    },
    {
      question: "Are there opportunities for international networking?",
      answer:
        "Yes, participants gain connections with global business leaders and investment bankers.",
    },
    {
      question: "How does this program handle cultural differences in business?",
      answer:
        "The course includes strategies for effective cross-cultural leadership in global markets.",
    },
    {
      question: "What is C Corporation formation?",
      answer:
        "C Corporation formation is a U.S. corporate structure covered to aid international expansion.",
    },
    {
      question: "Will there be industry-specific training?",
      answer:
        "While the focus is broad, industry-specific insights for high-growth sectors are included.",
    },
    {
      question: "Can I complete this program part-time?",
      answer:
        "Yes, a part-time option is available for flexible business leadership training.",
    },
    {
      question: "How will it prepare me for global market expansion?",
      answer:
        "You’ll gain strategic insights into international regulations, market entry tactics, and scaling.",
    },
  ];

  return (
    <div className="bg-main-light min-h-screen py-16 px-6 sm:px-12 lg:px-20">
      {/* Hero Section */}
      <div
  className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gray-900/60"></div>

  {/* Content Container */}
  <div className="relative z-10 text-center max-w-3xl px-4 sm:px-6 md:px-8 lg:px-12 text-main-light">
    {/* Title */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-barlow font-extrabold leading-tight mb-4 sm:mb-6 animate-slide-in text-main-green">
      The Visionary Accelerator
    </h1>

    {/* Subtitle */}
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-aeonik italic leading-relaxed animate-fade-in">
      Developing Strategic Minds for the Global Market
    </p>

    {/* Description */}
    <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-aeonik leading-relaxed max-w-prose mx-auto animate-fade-in-delay">
      The Visionary Accelerator prepares participants for international business leadership and global market expansion. This program covers key areas such as global business strategy, C Corporation formation, and cross-border operations. By exploring the nuances of international regulations and cultural understanding, this course empowers leaders to grow their businesses globally and establish recognized, ethical brands.
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
          FAQs for The Visionary Accelerator
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

export default FourthProgram;
