import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const faqsData = [
  {
    tab: "How does Rently Work?",
    id: 1,
    isOpen: false,
    text: (
      <div className="font-medium text-[#6d6d6e] space-y-6">
        <p>
          At Rently, we offer access to premium residential solutions with
          options of monthly, quarterly and biannual subscription. Once you find
          a space you like, simply create a booking along with a few details
          about yourself. This request is then processed within a few hours.
        </p>
        <p>
          No payment is taken until the booking is accepted. We will charge you
          the rent upfront plus a one-off booking fee and security deposit. You
          will then receive a confirmation email with the details of your new
          space.
        </p>
      </div>
    ),
  },
  {
    tab: "Does Rently organise viewings?",
    id: 2,
    isOpen: false,
    text: (
      <div className="font-medium text-[#6d6d6e]">
        <p>Yes.</p>
      </div>
    ),
  },
  {
    tab: "Does Rently own the spaces listed?",
    id: 3,
    isOpen: false,
    text: (
      <div className="font-medium text-[#6d6d6e]">
        <p>
          No Rently does not own the spaces listed, as we have homeowners that
          list these spaces on our platform.
        </p>
      </div>
    ),
  },
];

const CommonQuestions = () => {
  const [faqs, setFaqs] = useState(faqsData);
  const displayFaq = (id) => {
    const updatedFaq = faqs.map((faq) => {
      return faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq;
    });

    setFaqs(updatedFaq);
  };

  return (
    <section className="bg-[#F9FAFD] w-full px-2 sm:px-5 lg:px-20 py-14 sm:py-20 space-y-20">
      <div>
        <div className="space-y-4">
          <h3 className="text-[#059A57] font-bold">COMMON QUESTIONS</h3>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <h1 className="text-black text-2xl sm:text-4xl font-bold">
              Frequently asked questions
            </h1>
            <p className="w-full sm:w-[75%] text-sm text-[#6d6d6e] font-semibold">
              Get quick answers to all your questions and concerns about Rently
              and Rently homes. Whether as a member, host or just a visitor, we
              will have an answer waiting for you.
            </p>
            <button className="bg-brightBlue py-4 px-10 text-white text-sm font-semibold rounded-full">
              Visit FAQS
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-8 sm:px-10 lg:px-0">
        {faqs.map((faq, index) => {
          const { tab, text, id, isOpen } = faq;
          return (
            <div
              key={index}
              className="space-y-6 border-b-2 border-[#E6E9FB] pb-5 cursor-pointer"
              onClick={() => displayFaq(id)}
            >
              <div className="flex justify-between">
                <h1 className={`text-lg font-bold m-0 ${isOpen ? "text-brightBlue" : "text-black" }`}>{tab}</h1>
                <div
                  className="flex justify-center items-center w-10 h-10 bg-[#E6E9FB] rounded-full"
                >
                  <BsChevronDown
                    size={18}
                    className={`font-extrabold text-black transition-all duration-300 ${isOpen && "rotate-180"}`}
                  />
                </div>
              </div>

              <div className={` ${isOpen ? "flex duration-500 transition-all" : "hidden"}`}>{text}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CommonQuestions