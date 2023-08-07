import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Faq = () => {
  const [active, setActive] = useState(null);
  const question = [
    {
      id: 1,
      question: "What kind of sports courses do you offer?",
      answer:
        "We offer a wide range of sports courses, including but not limited to soccer, basketball, tennis, yoga, martial arts, and more. Our courses cater to beginners, intermediate, and advanced levels.",
    },
    {
      id: 2,
      question: "How do I enroll in a sports course?",
      answer:
        "Enrolling in a sports course is easy! Simply browse our course catalog, choose the course you're interested in, and click on the payment button. Follow the prompts to complete the enrollment process.",
    },
    {
      id: 3,
      question: "Are the courses suitable for all ages?",
      answer:
        "Yes, we offer courses for participants of all ages, from children to adults. Each course's description includes information about the recommended age group and skill level.",
    },
    {
      id: 4,
      question: "What is the duration of each course?",
      answer:
        "The duration of our sports courses varies depending on the specific course. You can find the course duration mentioned in the course details on our website.",
    },
    {
      id: 5,
      question: "Do I need any prior experience to join a course?",
      answer:
        "Our courses are designed to accommodate participants with varying levels of experience. Whether you're a complete beginner or an experienced athlete, you'll find courses suited to your skill level.",
    },
  ];

  const openItem = (itemId) => {
    setActive(itemId === active ? null : itemId);
  };

  return (
    <section id="faq" className="py-14">
      <div className="mycontainer">
        <div className="faqHeading">
          <h2 className="text-4xl font-semibold">FAQ</h2>
        </div>
        <Fade cascade duration={5000}>
          <div className="faqWrapper mt-6">
            {question.map((items) => {
              return (
                <div
                  key={items.id}
                  className="faqItems bg-white shadow-lg p-5 mb-6"
                >
                  <h3
                    onClick={() => openItem(items.id)}
                    className="text-2xl font-medium cursor-pointer flex items-center justify-between"
                  >
                    {items.question}
                    <span>
                      {active === items.id ? (
                        <FaAngleUp></FaAngleUp>
                      ) : (
                        <FaAngleDown></FaAngleDown>
                      )}
                    </span>
                  </h3>
                  {active === items.id && (
                    <p className="mt-3">{items.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Faq;
