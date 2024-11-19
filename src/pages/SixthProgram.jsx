import React, { useState } from "react";

const SixthProgram = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What does the Ethos Leadership Program focus on?",
      answer:
        "It focuses on corporate ethics, governance principles, and corporate responsibility.",
    },
    {
      question: "How long is the program?",
      answer:
        "It’s a three-month course complementing other public company leadership programs.",
    },
    {
      question: "Who is this program ideal for?",
      answer:
        "It’s for anyone aiming to lead public companies with integrity and corporate ethics.",
    },
    {
      question: "Are there real-world case studies involved?",
      answer:
        "Yes, case studies focus on corporate governance and real-world ethical challenges.",
    },
    {
      question: "Will I learn about corporate social responsibility (CSR)?",
      answer: "Yes, CSR is a major part of corporate responsibility training.",
    },
    {
      question: "Is this program theoretical or practical?",
      answer:
        "The course combines theory with hands-on applications in business ethics.",
    },
    {
      question: "How does this help me in the corporate world?",
      answer:
        "It builds a reputation for ethical leadership, critical for public companies.",
    },
    {
      question: "Is mentorship available for this program?",
      answer:
        "Yes, mentors guide participants in corporate ethics and governance.",
    },
    {
      question: "Can I apply if I’m new to leadership roles?",
      answer:
        "Yes, it’s suitable for both aspiring and current leaders in business leadership.",
    },
    {
      question: "How will this program impact my career?",
      answer:
        "You’ll be recognized for integrity, making you a trusted corporate leader.",
    },
  ];

  return (
    <div className="bg-main-light min-h-screen py-16 px-6 sm:px-12 lg:px-20">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/60"></div>

        {/* Content Container */}
        <div className="relative z-10 text-center max-w-3xl px-4 sm:px-6 md:px-8 lg:px-12 text-main-light">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-barlow font-extrabold leading-tight mb-4 sm:mb-6 animate-slide-in text-main-green">
            Ethos Leadership Program
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-aeonik italic leading-relaxed animate-fade-in">
            Building Ethical Foundations for Corporate Leadership
          </p>

          {/* Description */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-aeonik leading-relaxed max-w-prose mx-auto animate-fade-in-delay">
            The Ethos Leadership Program is designed to instill strong
            foundations in corporate ethics and governance principles. This
            course emphasizes corporate responsibility, transparency, and
            integrity in leadership. Participants gain skills to lead with
            ethical decision-making, build trusted brands, and cultivate
            long-term stakeholder relationships, ensuring that public companies
            have a lasting, positive impact.
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
          FAQs for Ethos Leadership Program
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

export default SixthProgram;
