import React, { useState } from "react";

const WomenLeadershipPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Who is eligible for the Women in Leadership Program?",
      answer:
        "The program is open to women at all career stages, from entry-level professionals to senior executives.",
    },
    {
      question: "What certification will I receive upon completion?",
      answer:
        "Graduates earn the Certified Public Company CEO for Women credential, signifying readiness for public company leadership.",
    },
    {
      question: "How long is the program?",
      answer:
        "The full program spans 6-12 months, with shorter modules for each career stage.",
    },
    {
      question: "Is there a focus on work-life balance?",
      answer:
        "Yes, the program includes training on work-life integration to support sustainable success.",
    },
    {
      question: "What kind of mentorship is provided?",
      answer:
        "Participants are mentored by successful women leaders and executives, offering guidance and industry insights.",
    },
    {
      question: "Will there be networking opportunities?",
      answer:
        "Yes, the program includes networking events, peer discussions, and alumni connections to foster collaboration.",
    },
    {
      question: "Are there scholarships available for this program?",
      answer:
        "Yes, IPC offers scholarships and financial aid for eligible applicants.",
    },
    {
      question: "Is the program available online?",
      answer:
        "Yes, the Women in Leadership Program is available in both online and in-person formats.",
    },
    {
      question: "Can women from non-business backgrounds apply?",
      answer:
        "Absolutely. The program is designed to be inclusive, offering foundational training for those new to business.",
    },
    {
      question: "How does IPC support women in achieving CEO roles?",
      answer:
        "IPC provides advanced training, mentorship, and certification to position women for CEO and executive roles.",
    },
    {
      question: "What industries are covered in the program?",
      answer:
        "The skills taught are applicable across industries, preparing participants for leadership in various sectors.",
    },
    {
      question: "How are participants evaluated?",
      answer:
        "Participants are assessed through projects, presentations, and mentor feedback to ensure they meet leadership standards.",
    },
    {
      question: "Is prior business experience required?",
      answer:
        "While helpful, prior experience is not mandatory. The program offers foundational training for all participants.",
    },
    {
      question: "What skills will I gain in the Executive Leaders stage?",
      answer:
        "Participants learn high-level strategic management, corporate governance, and decision-making skills.",
    },
    {
      question: "How can this program help with my personal brand?",
      answer:
        "The program includes personal branding and communication strategies to enhance professional presence.",
    },
    {
      question: "What is the main goal of the Women in Leadership Program?",
      answer:
        "To empower women with the skills and confidence to excel in executive and CEO roles within public companies.",
    },
    {
      question: "Are there opportunities to collaborate with other women in the program?",
      answer:
        "Yes, collaborative projects and group activities are part of the learning experience.",
    },
    {
      question: "Will I receive support after completing the program?",
      answer:
        "Yes, graduates join the IPC alumni network, gaining access to ongoing support and career opportunities.",
    },
    {
      question: "Can IPC help me start my own public company?",
      answer:
        "Yes, the program provides guidance for women interested in establishing and leading their own public companies.",
    },
    {
      question:
        "How will the Certified Public Company CEO for Women credential impact my career?",
      answer:
        "The credential enhances credibility and opens doors to executive and CEO roles, empowering you to lead confidently in public companies.",
    },
  ];

  return (
    <div className="bg-main-light min-h-screen py-16 px-6 sm:px-12 lg:px-20">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen flex items-end justify-center bg-[url('./assets/images/Woman_Back.png')]"
      >
        <div className="absolute inset-0"></div>
        <div className="relative z-10 text-center max-w-4xl mb-6 px-6 sm:px-12 lg:px-16 text-main-light">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-barlow font-extrabold leading-tight mb-2 text-main-green animate-slide-in">
            Women in Leadership Program
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-aeonik italic leading-relaxed animate-fade-in">
            Empowering Women to Lead Public Companies and Drive
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto mt-16 text-text-color">
        <h2 className="text-3xl sm:text-4xl font-barlow font-extrabold text-main-dark mb-6 text-center animate-slide-in">
          Program Overview
        </h2>
        <p className="text-base sm:text-lg lg:text-xl font-aeonik leading-relaxed mb-8">
        A dedicated initiative designed to equip women with the tools, skills, and confidence needed to thrive in public company leadership. Our program welcomes women from all backgrounds and experience levels, providing specialized training and mentorship to prepare them for executive roles and CEO positions.
        <br/><br/>
          The Women in Leadership Program is structured to support women at
          different stages in their careers. Through a blend of theory,
          hands-on experience, and one-on-one mentorship, participants learn
          essential business strategies, corporate governance, and financial
          management. The curriculum also covers work-life balance,
          networking, and personal brand building to support women as they
          navigate the unique challenges of corporate leadership.
        </p>

        {/* Program Stages */}
        <h3 className="text-2xl font-barlow font-bold text-main-green mb-4">
          Program Stages & Focus Areas
        </h3>
        <ul className="list-disc list-inside text-lg font-aeonik">
          <li>
            <strong>Aspiring Leaders:</strong> Entry-Level & Early Career
          </li>
          <li>
            <strong>Emerging Leaders:</strong> Mid-Level Career Development
          </li>
          <li>
            <strong>Executive Leaders:</strong> Senior Professionals
          </li>
          <li>
            <strong>CEO Readiness:</strong> Advanced Leadership Training
          </li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="max-w-5xl mt-16 mx-auto">
        <h2 className="text-3xl sm:text-4xl font-barlow font-extrabold text-main-dark mb-8 text-center animate-slide-in">
          FAQs for the Women in Leadership Program
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

export default WomenLeadershipPage;
