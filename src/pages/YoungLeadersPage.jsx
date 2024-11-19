import React, { useState } from "react";

const YoungLeadersPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What age can my child start this program?",
      answer:
        "Children can start as early as 10 years old, with content tailored for different age groups.",
    },
    {
      question: "What will my child learn in this program?",
      answer:
        "They’ll learn foundational business skills, leadership concepts, financial literacy, and public speaking, depending on their age.",
    },
    {
      question: "Is prior business knowledge required?",
      answer:
        "No, the program is designed for all levels and introduces concepts in an age-appropriate way.",
    },
    {
      question: "How long is each age-specific module?",
      answer:
        "Each module runs for 3-6 months, depending on the age group and learning pace.",
    },
    {
      question: "Will my child receive a certificate?",
      answer:
        "Yes, graduates earn a Certified Young Public Company Leader credential, which is highly recognized.",
    },
    {
      question: "Are there practical activities in the program?",
      answer:
        "Yes, all age groups participate in interactive projects, simulations, and presentations.",
    },
    {
      question: "Can my child move up through the age groups?",
      answer:
        "Yes, as they grow, children progress through different levels, gaining advanced knowledge each year.",
    },
    {
      question: "Is this program available online?",
      answer:
        "Yes, the Young Leaders Program is available both online and in-person, offering flexibility for all families.",
    },
    {
      question: "How are parents involved in the learning process?",
      answer:
        "We encourage parental involvement through progress updates and optional family workshops.",
    },
    {
      question: "What is the goal of the Young Leaders Program?",
      answer:
        "To develop confident, skilled, and ethical young leaders who are prepared to take on future roles in business and society.",
    },
  ];

  return (
    <div className="bg-main-light min-h-screen py-16 px-6 sm:px-12 lg:px-20">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen flex items-center justify-center bg-[url('./assets/images/Young_Back.jpg')]"
      >
        <div className="absolute inset-0 bg-gray-900/30"></div>
        <div className="relative z-10 text-center max-w-4xl px-6 sm:px-12 lg:px-16 text-main-light">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-barlow font-extrabold leading-tight mb-2 text-main-green animate-slide-in">
            Young Leaders Program
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-aeonik italic leading-relaxed animate-fade-in">
            Empowering Future CEOs from Ages 10 to 21
          </p>
        </div>
      </div>

      {/* Program Overview Section */}
      <div className="max-w-6xl mx-auto mt-16 text-text-color">
        <h2 className="text-3xl sm:text-4xl font-barlow font-extrabold text-main-dark mb-6 text-center animate-slide-in">
          Program Overview
        </h2>
        <p className="text-base sm:text-lg lg:text-xl font-aeonik leading-relaxed mb-8">
          The Young Leaders Program is structured in age-appropriate modules
          that introduce essential business concepts, strategic thinking, and
          leadership skills. This program equips young talents with the
          knowledge and confidence to take on leadership roles, whether in
          academia, entrepreneurial ventures, or corporate settings. Our
          curriculum blends theoretical learning with practical applications,
          interactive projects, and mentorship by experienced CEOs.
        </p>

        {/* Age Groups & Focus Areas */}
        <h3 className="text-2xl font-barlow font-bold text-main-green mb-4">
          Age Groups & Focus Areas
        </h3>
        <ul className="list-disc list-inside text-lg font-aeonik space-y-4">
          <li>
            <strong>Ages 10-12:</strong> Foundations of Business and Leadership
          </li>
          <li>
            <strong>Ages 13-15:</strong> Entrepreneurial Thinking and Financial
            Literacy
          </li>
          <li>
            <strong>Ages 16-18:</strong> Advanced Business Skills and Public
            Speaking
          </li>
          <li>
            <strong>Ages 19-21:</strong> Public Company Leadership & CEO
            Readiness
          </li>
        </ul>
      </div>

      {/* Program Highlights */}
      <div className="max-w-6xl mx-auto mt-16">
        <h3 className="text-2xl font-barlow font-bold text-main-dark mb-4">
          Program Highlights
        </h3>
        <ul className="list-disc list-inside text-lg font-aeonik space-y-4">
          <li>
            <strong>Interactive Workshops:</strong> Engage in age-appropriate,
            hands-on activities that bring business concepts to life.
          </li>
          <li>
            <strong>Mentorship by Industry Leaders:</strong> Young leaders
            benefit from mentorship sessions with seasoned CEOs and executives.
          </li>
          <li>
            <strong>Global Perspective:</strong> Learn about business from a
            global perspective, understanding cultural, social, and economic
            diversity.
          </li>
          <li>
            <strong>Certification:</strong> Graduates receive the Certified
            Young Public Company Leader certificate, setting them apart as
            emerging business leaders.
          </li>
        </ul>
      </div>

      {/* FAQs Section */}
      <div className="max-w-5xl mt-16 mx-auto">
        <h2 className="text-3xl sm:text-4xl font-barlow font-extrabold text-main-dark mb-8 text-center animate-slide-in">
          FAQs for the Young Leaders Program
        </h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white mb-4 shadow-md hover:shadow-lg rounded-xl transition-all duration-300 animate-fade-in"
          >
            <div
              onClick={() => toggleFaq(index)}
              className="cursor-pointer flex justify-between items-center p-4 sm:p-6 text-main-dark font-barlow font-bold text-lg sm:text-xl"
            >
              {faq.question}
              <span className="text-xl sm:text-2xl font-bold">
                {activeFaq === index ? "−" : "+"}
              </span>
            </div>
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

export default YoungLeadersPage;
