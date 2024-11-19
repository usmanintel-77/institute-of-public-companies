import React, { useState } from "react";

const TopFAQsPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the primary goal of the IPC program?",
      answer:
        "The IPC program aims to train individuals to become Certified Public Company CEOs, equipping them to lead public companies and become high-net-worth individuals (HNWIs).",
    },
    {
      question: "What qualifications do I need to apply?",
      answer:
        "Applicants should have strong leadership ambition and business acumen. While prior experience is not required, candidates must demonstrate readiness for intensive public company training.",
    },
    {
      question:
        "How does IPC guarantee CEO placement for successful graduates?",
      answer:
        "Graduates who meet IPC’s high standards and complete all program requirements are guaranteed CEO roles within IPC’s own public companies or for clients in need of strong leadership.",
    },
    {
      question: "What certification will I receive upon completion?",
      answer:
        "Graduates earn the Certified Public Company CEO credential, recognized globally as a mark of excellence in public company leadership.",
    },
    {
      question: "What steps are involved in the program?",
      answer:
        "The program follows a six-step structure: Admissions Gateway, Orientation & Foundation, Public Company Start-Up, Milestone Mapping, Mastering Essential Skills, and CEO Certification & Placement.",
    },
    {
      question: "What industries are available for CEO placement?",
      answer:
        "CEO placement opportunities span various industries, depending on current market demand and the specific expertise of each graduate.",
    },
    {
      question: "How long does it take to complete the entire program?",
      answer:
        "The program typically takes six months to complete, with additional time allotted for final assessments and certification.",
    },
    {
      question: "Are international students eligible for the program?",
      answer:
        "Yes, IPC welcomes applicants from around the world. The program is available online and in-person to accommodate international students.",
    },
    {
      question: "Does the program include practical experience?",
      answer:
        "Yes, the program includes real-world projects and simulated company management, providing practical exposure to public company operations.",
    },
    {
      question: "Will I receive mentorship during the program?",
      answer:
        "Yes, each participant is paired with experienced mentors who guide them through each stage of the program.",
    },
    {
      question: "What is the admissions process like?",
      answer:
        "The process begins with an initial assessment, including qualification reviews, interviews, and legal checks, to determine readiness for the program.",
    },
    {
      question: "What kind of support does IPC provide for new CEOs?",
      answer:
        "After placement, IPC provides ongoing mentorship, business resources, and access to a network of investors and advisors to support new CEOs.",
    },
    {
      question: "Is financial aid or scholarships available?",
      answer:
        "Yes, IPC offers financial aid and scholarships to eligible candidates who demonstrate potential and commitment.",
    },
    {
      question: "Can I work on my own business idea during the program?",
      answer:
        "Yes, participants are encouraged to develop their own business ideas, which may lead to opportunities for public company formation and leadership.",
    },
    {
      question: "What are the main criteria for CEO certification?",
      answer:
        "Graduates must demonstrate expertise in corporate governance, strategic business management, and financial growth to earn the Certified Public Company CEO credential.",
    },
    {
      question: "Does IPC help with international placements?",
      answer:
        "Yes, IPC connects graduates with international CEO roles and leadership opportunities in various global markets.",
    },
    {
      question:
        "How does the program help me become a high-net-worth individual (HNWI)?",
      answer:
        "By leading public companies and building wealth, graduates of IPC’s program are positioned to become HNWIs, with career support aimed at sustained financial growth.",
    },
    {
      question: "What type of companies will I be leading after certification?",
      answer:
        "Graduates may lead IPC-owned public companies, client-owned companies, or partner companies in industries that align with their skills and interests.",
    },
    {
      question: "How are participants evaluated throughout the program?",
      answer:
        "Evaluation includes performance reviews, progress tracking, milestone achievements, and final assessments, ensuring candidates are prepared for CEO roles.",
    },
    {
      question:
        "How does the Certified Public Company CEO credential impact my career?",
      answer:
        "This credential establishes credibility and opens doors to leadership roles, investment opportunities, and strategic business networks, making it a powerful career asset.",
    },
  ];

  return (
    <div className="bg-main-light min-h-screen py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-barlow font-extrabold text-main-dark mb-8 text-center animate-slide-in">
          Top 20 FAQs About the IPC Program
        </h1>
        <p className="text-lg sm:text-xl font-aeonik italic text-text-color mb-12 text-center animate-fade-in">
          Explore everything you need to know about the Institute of Public
          Companies.
        </p>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white mb-6 shadow-md hover:shadow-xl rounded-xl transition-all duration-300 animate-fade-in"
          >
            <div
              onClick={() => toggleFaq(index)}
              className="cursor-pointer flex justify-between items-center p-6 sm:p-8 text-main-dark font-barlow font-bold text-lg sm:text-xl"
            >
              {faq.question}
              <span className="text-xl sm:text-2xl font-bold">
                {activeFaq === index ? "−" : "+"}
              </span>
            </div>
            {activeFaq === index && (
              <div className="p-6 sm:p-8 border-t text-text-color font-aeonik text-base sm:text-lg leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFAQsPage;
