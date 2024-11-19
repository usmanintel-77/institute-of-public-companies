import React, { useState } from "react";

const SecondProgram = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Who is eligible for the CEO Genesis Program?",
      answer:
        "Anyone with ambition to pursue public company leadership can apply. No prior CEO experience is required.",
    },
    {
      question: "What are the key skills I will gain?",
      answer:
        "Participants gain skills in corporate governance, financial management, strategic leadership, and decision-making for public companies.",
    },
    {
      question: "How long is the program?",
      answer:
        "The CEO Genesis Program is designed as a six-month intensive course.",
    },
    {
      question: "Are there real-world projects involved?",
      answer:
        "Yes, the program includes hands-on public company management projects.",
    },
    {
      question: "Is financial aid available for this program?",
      answer:
        "Yes, scholarships and financial growth support are available for eligible applicants.",
    },
    {
      question: "What kind of certification will I receive?",
      answer:
        "Graduates earn an IPC CEO Certification, recognized in the business leadership industry.",
    },
    {
      question: "Can I take this program remotely?",
      answer:
        "The program offers both online and in-person options for flexible business leadership training.",
    },
    {
      question: "What industries does this program focus on?",
      answer:
        "The program applies across industries, providing universal public company leadership skills.",
    },
    {
      question: "Will there be mentorship opportunities?",
      answer:
        "Yes, participants receive one-on-one mentorship with experienced public company CEOs.",
    },
    {
      question: "How will this program help me become a public company CEO?",
      answer:
        "The program equips you with the exact leadership training required to excel as a CEO in a public limited company.",
    },
  ];

  return (
    <div className="bg-main-light min-h-screen py-16 px-6 sm:px-12 lg:px-20">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1573496522235-c94d9b1d3892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/60"></div>

        {/* Content Container */}
        <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 md:px-8 lg:px-16 text-main-light">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-barlow font-extrabold leading-tight mb-4 sm:mb-6 animate-slide-in text-main-green">
            CEO Genesis Program
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-aeonik italic leading-relaxed animate-fade-in">
            From Aspiring Leader to Public Company CEO
          </p>

          {/* Description */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-aeonik leading-relaxed max-w-xl md:max-w-3xl mx-auto animate-fade-in-delay">
            The CEO Genesis Program is a transformative course that equips
            participants with the skills and strategies to lead public companies
            from the ground up. This program covers essentials like corporate
            governance, strategic business management, and financial growth.
            Designed to shape future CEOs, it emphasizes practical experience
            and real-world challenges, preparing graduates for high-stakes
            leadership roles. This intensive journey enables participants to
            emerge as ethical, visionary CEOs who are ready to make an impact on
            the global stage.
          </p>

          {/* Call-to-Action Button */}
          <div className="mt-6 sm:mt-8 md:mt-10">
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
          FAQs for CEO Genesis Program
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

export default SecondProgram;
