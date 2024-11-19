import React, { useState } from "react";

const FirstProgram = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What does the Public Company Founders Program cover?",
      answer:
        "It covers all aspects of public company formation and management, from startup to growth.",
    },
    {
      question: "Who is eligible for this program?",
      answer:
        "Aspiring entrepreneurs and business leaders eager to establish public limited companies.",
    },
    {
      question: "How long is the program?",
      answer:
        "The course spans six months, with mentorship available for longer support.",
    },
    {
      question: "Is there a focus on financial growth?",
      answer:
        "Yes, financial growth strategies are a core focus, aiming for significant valuations.",
    },
    {
      question: "Will I gain practical experience?",
      answer:
        "Yes, real-world projects and simulations are a key part of public company management.",
    },
    {
      question: "What industries does this program apply to?",
      answer:
        "It’s industry-agnostic, suitable for various sectors in public company formation.",
    },
    {
      question: "Does the program include legal aspects of company formation?",
      answer:
        "Yes, participants learn the legal essentials of public company formation.",
    },
    {
      question: "Will I learn about attracting investors?",
      answer:
        "Yes, modules focus on engaging angel investors and investment bankers.",
    },
    {
      question: "Is mentorship available throughout the program?",
      answer:
        "Yes, mentors guide you from formation through key business growth stages.",
    },
    {
      question:
        "How does this program help me create a billion-dollar company?",
      answer:
        "It provides a structured approach, guiding participants from start to billion-dollar success.",
    },
  ];

  return (
    <div className="bg-main-light min-h-screen py-16 px-6 sm:px-12 lg:px-20">
      <div
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/60"></div>

        {/* Content Container */}
        <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 md:px-8 lg:px-2 text-main-light">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-barlow font-extrabold leading-tight mb-4 sm:mb-6 lg:mb-3 animate-slide-in text-main-green">
            Public Company Founders Program
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-aeonik italic leading-relaxed animate-fade-in">
            Transforming Ambition into Public Company Success
          </p>



          {/* Call-to-Action Button */}
          <div className="mt-6 sm:mt-10 lg:mt-6">
            <a
              href="#faqs"
              className="inline-block bg-main-green text-main-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-lg font-bold shadow-lg hover:bg-accent-blue hover:text-main-light"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>


<div>
            {/* Description */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-aeonik leading-relaxed lg:mt-12 mb-8 animate-fade-in-delay">
            The Public Company Founders Program is tailored for those with the
            drive to establish and lead public limited companies. This
            comprehensive course provides hands-on training in public company
            formation, financial growth strategies, and corporate governance.
            Participants learn how to navigate every phase of the business
            cycle, from initial planning to achieve billion-dollar valuations.
            The program empowers aspiring founders to build ethical, impactful
            public companies that thrive in today’s dynamic market.
          </p>
</div>
      {/* FAQs Section */}
      <div className="max-w-5xl mt-16 mx-auto">
        <h2 className="text-3xl sm:text-4xl font-barlow font-extrabold text-main-dark mb-8 text-center animate-slide-in">
          FAQs for Public Company Founders Program
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-main-green mb-4 shadow-md hover:shadow-lg rounded-xl transition-all duration-300 animate-fade-in"
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

export default FirstProgram;
