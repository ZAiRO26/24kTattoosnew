import React, { useState } from "react";

const faqs = [
  {
    question: "HOW CAN I BOOK AN APPOINTMENT?",
    answer:
      "To book an appointment at 24K Tattoo Hair & Oddities, fill out the form below and a member of our team will contact you immediately to talk through your tattoo idea.",
  },
  {
    question: "WHAT’S THE STUDIO’S ADDRESS?",
    answer: "24K Tattoo Hair & oddities — Road no 1, entry, near Nagarjuna Circle Road, opp. Mpm Times Square mall, Banjara Hills, near Florists, Hyderabad 500034",
  },
  {
    question: "WHAT SHOULD I EXPECT AT MY APPOINTMENT?",
    answer:
      "Before your tattoo appointment, expect to discuss your design idea, placement, and any preferences with your artist. Make sure to stay hydrated, eat a good meal, and avoid alcohol or blood thinners. Arrive on time with clean skin and comfortable clothing. Many clients also like to bring headphones and snacks!",
  },
  {
    question: "DO YOU TAKE WALK-INS?",
    answer:
      "Our artists currently work by appointment only. To request an appointment, please fill out the form below.",
  },
  {
    question: "IS THERE PARKING?",
    answer: "",
  },
  {
    question: "I'M COMING FROM OUT OF TOWN. WHERE SHOULD I STAY?",
    answer:
      "24K Tattoo Hair & Oddities is centrally located in the heart of hyderabad with many hotel & AirBnB options. Give us a call if you have questions about accommodations during your visit.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
  <div className="space-y-6">
      {faqs.map((faq, idx) => (
        <div key={idx}>
          <button
            className={`w-full flex justify-between items-center border border-soft-grey rounded-lg px-8 py-5 text-left text-2xl font-serif text-charcoal-text bg-deep-charcoal transition-colors duration-200 focus:outline-none ${openIndex === idx ? "border-accent-gold" : "border-soft-grey"}`}
            onClick={() => handleToggle(idx)}
          >
            <span>{faq.question}</span>
            <span className="ml-4 text-3xl font-bold">{openIndex === idx ? "–" : "+"}</span>
          </button>
          {openIndex === idx && faq.answer && (
            <div className="bg-deep-charcoal px-8 pt-4 pb-2 text-xl font-serif text-charcoal-text animate-fade-in border-l-2 border-accent-gold">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
