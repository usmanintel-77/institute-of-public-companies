import React, { useState } from "react";

const HowWeDoItPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const steps = [
    {
      title: "Step 1: Admissions Gateway",
      description:
        "The journey begins with our Admissions Gateway, where applicants undergo a rigorous assessment process to evaluate their leadership potential and readiness.",
      faqs: [
        {
          question: "What is involved in the Admissions Gateway?",
          answer:
            "The Admissions Gateway includes an assessment of qualifications, interviews, and legal checks for eligibility.",
        },
        {
          question: "Who is eligible to apply?",
          answer:
            "Anyone with a strong ambition to lead in public companies is encouraged to apply.",
        },
        {
          question: "What is the purpose of the initial assessment?",
          answer:
            "The assessment gauges leadership potential, business acumen, and readiness for the program.",
        },
        {
          question: "Are there prerequisites for admission?",
          answer:
            "Basic business knowledge is helpful but not mandatory. Enthusiasm and drive are essential.",
        },
        {
          question: "How does the interview process work?",
          answer:
            "Candidates participate in an interview to discuss their goals, experience, and fit for IPC.",
        },
        {
          question: "What documents are required?",
          answer:
            "Applicants need to submit identification, education, and relevant work documents.",
        },
        {
          question: "Is there an application fee?",
          answer:
            "Yes, an application fee applies, which covers assessment and processing.",
        },
        {
          question: "Are there scholarships available?",
          answer:
            "Yes, financial aid and scholarships are available for eligible candidates.",
        },
        {
          question: "What happens if I don’t pass the assessment?",
          answer:
            "Unsuccessful candidates are encouraged to reapply after additional preparation.",
        },
        {
          question: "Can international applicants apply?",
          answer:
            "Yes, IPC welcomes applicants from all countries, subject to legal requirements.",
        },
      ],
    },
    {
      title: "Step 2: Orientation & Foundation",
      description:
        "The Orientation & Foundation stage introduces students to the fundamentals of public company leadership, including corporate governance and international business.",
      faqs: [
        {
          question: "What topics are covered in Orientation?",
          answer:
            "Orientation covers corporate governance, public company structures, and leadership fundamentals.",
        },
        {
          question: "How long is the orientation phase?",
          answer:
            "This phase typically lasts for two weeks, providing a foundational overview.",
        },
        {
          question: "Is there a focus on international business?",
          answer:
            "Yes, orientation includes training on adapting to an international business environment.",
        },
        {
          question: "What skills will I develop during Orientation?",
          answer:
            "Participants gain skills in corporate structure, ethical leadership, and strategic planning.",
        },
        {
          question: "Will there be hands-on activities?",
          answer:
            "Yes, there are interactive sessions and case studies to reinforce learning.",
        },
        {
          question: "Do I need prior knowledge of corporate governance?",
          answer:
            "No prior knowledge is required; the program introduces you to key concepts.",
        },
        {
          question: "Is Orientation conducted in-person or online?",
          answer:
            "Orientation is available both online and in-person, for flexibility.",
        },
        {
          question: "Will I have a mentor during Orientation?",
          answer:
            "Yes, each participant is assigned a mentor to guide them through this phase.",
        },
        {
          question: "What are the goals of Orientation?",
          answer:
            "To familiarize participants with public company dynamics and prepare them for further training.",
        },
        {
          question: "How is progress measured during this phase?",
          answer:
            "Progress is assessed through participation, interactive activities, and mentor feedback.",
        },
      ],
    },
    {
      title: "Step 3: Public Company Start-Up",
      description:
        "In the Public Company Start-Up stage, participants are allocated simulated or real public limited companies. They learn about the essentials of public company formation, including the fundamentals of stock exchanges.",
      faqs: [
        {
          question: "What does Public Company Start-Up involve?",
          answer:
            "Participants are allocated companies to manage, learning the basics of public company operations.",
        },
        {
          question: "Will I be working on a real company?",
          answer:
            "Some participants may work on simulated companies, while others might manage real projects.",
        },
        {
          question: "What is covered in stock exchange training?",
          answer:
            "The training covers how stock exchanges function, company listings, and share valuations.",
        },
        {
          question: "Is prior stock exchange knowledge necessary?",
          answer:
            "No prior knowledge is required; all essential concepts are introduced.",
        },
        {
          question:
            "Are there specific industries for the company assignments?",
          answer:
            "Participants may be assigned companies from various industries to broaden experience.",
        },
        {
          question: "Will there be guidance during this stage?",
          answer:
            "Yes, mentors and industry experts provide guidance throughout this step.",
        },
        {
          question: "How is progress measured in this stage?",
          answer:
            "Progress is assessed based on engagement, project success, and milestone achievements.",
        },
        {
          question: "Are there networking opportunities here?",
          answer:
            "Yes, participants interact with peers, mentors, and industry professionals.",
        },
        {
          question: "What skills will I develop in this step?",
          answer:
            "Participants gain skills in company formation, stock market basics, and strategic planning.",
        },
        {
          question: "Is this phase available online?",
          answer: "Yes, both online and in-person options are available.",
        },
      ],
    },
    {
      title: "Step 4: Milestone Mapping",
      description:
        "The Milestone Mapping stage provides participants with a roadmap for tracking their business growth while implementing corporate finance principles.",
      faqs: [
        {
          question: "What are milestones in this phase?",
          answer:
            "Milestones include financial targets, skill mastery, and strategic achievements.",
        },
        {
          question: "How do I track my progress?",
          answer:
            "Progress is tracked through a structured roadmap and regular evaluations.",
        },
        {
          question: "What finance principles are covered?",
          answer:
            "The program covers budgeting, revenue projections, and investment basics.",
        },
        {
          question: "Is there guidance on international markets?",
          answer:
            "Yes, participants learn how to adapt strategies for international markets.",
        },
        {
          question: "Will I work on real-world projects?",
          answer:
            "Yes, practical projects are a part of achieving your milestone goals.",
        },
        {
          question: "What kind of mentorship is provided in this phase?",
          answer:
            "Mentors guide participants in achieving each milestone and offer strategic advice.",
        },
        {
          question: "Is this phase focused on specific industries?",
          answer:
            "Milestone Mapping is applicable across industries, covering universal growth strategies.",
        },
        {
          question: "How long does it take to reach all milestones?",
          answer:
            "Milestones are achieved over a period of three months, but timelines may vary.",
        },
        {
          question: "Can I set my own milestones?",
          answer:
            "While some are set by the program, participants can suggest personal milestones.",
        },
        {
          question: "How does this stage prepare me for the next phase?",
          answer:
            "It strengthens strategic growth skills, essential for later stages in public company leadership.",
        },
      ],
    },
    {
      title: "Step 5: Mastering Essential Skills",
      description:
        "Participants learn advanced world business skills including international management, strategic business planning, and corporate ethics.",
      faqs: [
        {
          question: "What essential skills are taught in this phase?",
          answer:
            "Skills include strategic planning, international management, and ethical leadership.",
        },
        {
          question: "How are these skills taught?",
          answer:
            "Through workshops, interactive sessions, and real-world case studies.",
        },
        {
          question: "Will I receive certification for these skills?",
          answer:
            "Yes, participants receive a certification in advanced business skills upon completion.",
        },
        {
          question: "Is there a focus on global business?",
          answer:
            "Yes, international business skills are core components of this phase.",
        },
        {
          question: "Are there practical applications of these skills?",
          answer:
            "Yes, participants apply skills through projects and real-world scenarios.",
        },
        {
          question: "Will I learn about ethical decision-making?",
          answer:
            "Corporate ethics is a significant focus, preparing participants for responsible leadership.",
        },
        {
          question: "How long is this phase?",
          answer: "This phase lasts approximately two months.",
        },
        {
          question: "Do I need previous experience for this phase?",
          answer:
            "No prior experience is required; the course covers essentials and builds from there.",
        },
        {
          question: "Are mentors available during this phase?",
          answer:
            "Yes, mentors provide feedback and support throughout skill development.",
        },
        {
          question: "What industries are these skills applicable to?",
          answer:
            "The skills apply universally, valuable in any public company sector.",
        },
      ],
    },
    {
      title: "Step 6: CEO Certification & Global Career Opportunities",
      description:
        "Graduates earn the Certified Public Company CEO credential, signifying readiness for public company leadership on a global stage.",
      faqs: [
        {
          question: "What certification will I receive upon completion?",
          answer:
            "Graduates earn the Certified Public Company CEO certificate, a mark of excellence in public company leadership.",
        },
        {
          question: "Does IPC guarantee placement as a CEO?",
          answer:
            "Yes, for candidates who meet all program standards, IPC guarantees placement as CEOs within our public companies or for our clients.",
        },
        {
          question: "How does IPC ensure readiness for CEO roles?",
          answer:
            "Through rigorous training in public company leadership, strategic finance, and corporate governance.",
        },
        {
          question:
            "What qualifies me to become a high-net-worth individual (HNWI) upon certification?",
          answer:
            "With the Certified Public Company CEO credential, graduates lead valuable companies, accumulating wealth and positioning themselves as HNWIs.",
        },
        {
          question: "How does IPC support my role as a CEO after placement?",
          answer:
            "Graduates receive ongoing mentorship, resources, and access to IPC’s network of business leaders and investors.",
        },
        {
          question: "What industries are available for CEO placement?",
          answer:
            "IPC offers CEO placement opportunities across a range of industries, depending on market demand and the candidate’s expertise.",
        },
        {
          question:
            "What are the criteria to meet for guaranteed CEO placement?",
          answer:
            "Candidates must meet rigorous standards in business acumen, strategic planning, corporate ethics, and operational readiness.",
        },
        {
          question:
            "Will I work exclusively within IPC’s companies or have external opportunities?",
          answer:
            "Graduates may be placed within IPC’s companies or with IPC’s partner companies and clients.",
        },
        {
          question: "How does the CEO certification enhance my career?",
          answer:
            "The Certified Public Company CEO credential provides credibility and opens doors to leadership roles, capital, and influential networks.",
        },
        {
          question: "What additional resources does IPC provide for new CEOs?",
          answer:
            "IPC offers a robust support system, including ongoing training, mentorship, and connections to investors and business advisors.",
        },
      ],
    },
  ];

  return (
    <div className="bg-main-light min-h-screen py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-barlow font-extrabold text-main-dark mb-8 text-center animate-slide-in">
          How We Do It
        </h1>
        <p className="text-lg sm:text-xl font-aeonik italic text-text-color mb-12 text-center animate-fade-in">
          At the Institute of Public Companies, we take you through an organized
          and strategically planned journey toward mastering the art of
          international success.
        </p>

        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white mb-8 shadow-md hover:shadow-lg rounded-xl transition-all duration-300 animate-fade-in"
          >
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-barlow font-bold text-main-dark mb-4">
                {step.title}
              </h3>
              <p className="text-base sm:text-lg font-aeonik text-text-color mb-6 leading-relaxed">
                {step.description}
              </p>

              {step.faqs.map((faq, faqIndex) => (
                <div key={faqIndex} className="mb-4">
                  <div
                    onClick={() => toggleFaq(`${index}-${faqIndex}`)}
                    className="cursor-pointer flex justify-between items-center p-4 text-main-dark font-barlow font-bold text-lg sm:text-xl"
                  >
                    {faq.question}
                    <span className="text-xl sm:text-2xl font-bold">
                      {activeFaq === `${index}-${faqIndex}` ? "−" : "+"}
                    </span>
                  </div>
                  {activeFaq === `${index}-${faqIndex}` && (
                    <div className="p-4 border-t text-text-color font-aeonik text-base sm:text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeDoItPage;
