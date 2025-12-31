"use client";

import { useState } from "react";
import style from "./FAQ.module.css";

const questionData = [
    {
        question: "What makes Vijay Overseas different from other jaggery brands?",
        answer:
            "Vijay Overseas jaggery is an unrefined sweetener made from sugarcane juice without sulphur, bleaching agents or artificial additives. It retains natural minerals like iron, calcium and magnesium, along with a rich caramel-like flavour that refined sugar loses during heavy processing.",
    },
    {
        question: "Is Vijay Overseas a manufacturer or a supplier?",
        answer:
            "Yes. Our jaggery is produced without the use of sulphur, chemical preservatives, artificial colours or flavours. We focus on traditional processing methods combined with modern hygiene standards to deliver clean, natural sweetness.",
    },
    {
        question: "Do you supply jaggery in bulk or for export?",
        answer:
            "We offer jaggery in classic bricks, cubes and bite-sized pieces. Pack sizes range from small consumer packs to bulk cartons starting from 5 kg, with options for 10 kg and 25 kg packs for retailers and wholesale buyers.",
    },
    {
        question: "How does Vijay Overseas ensure quality consistency?",
        answer:
            "Yes. We produce fusion jaggery variants blended with natural ingredients such as ginger, sesame, fennel and dry fruits. Custom blends can also be developed based on buyer requirements.",
    },
    {
        question: "Does Vijay Overseas support sustainable and ethical practices?",
        answer:
            "Jaggery provides quick yet steady energy and is often preferred by athletes as a natural alternative to refined sugar. It is commonly used before or after workouts to support endurance and recovery.",
    },
    {
        question: "Who typically works with Vijay Overseas?",
        answer:
            "Jaggery is still a form of sugar and should be consumed in moderation. People with diabetes are advised to consult their healthcare professional before including jaggery in their diet.",
    },
];


export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0); // first open by default

    const toggleItem = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className={style.section}>
            <h5>frequently asked questions</h5>
            <h2>
                Find quick answers about <span>Vijay Overseas</span>
            </h2>

            <div className={style.faqList}>
                {questionData.map((q, index) => {
                    const isOpen = index === activeIndex;

                    return (
                        <div
                            key={index}
                            className={`${style.faqItem} ${isOpen ? style.open : ""}`}
                        >
                            <button
                                className={style.question}
                                onClick={() => toggleItem(index)}
                                aria-expanded={isOpen}
                            >
                                {q.question}
                                <span className={style.icon}>{isOpen ? "−" : "+"}</span>
                            </button>

                            <div className={style.answerWrapper}>
                                <p className={style.answer}>{q.answer}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
