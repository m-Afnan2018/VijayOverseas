"use client";

import { useState } from "react";
import style from "./FAQ.module.css";

const questionData = [
    {
        question: "What makes Vijay Overseas different from other jaggery brands?",
        answer:
            "Vijay Overseas stands out through its focus on purity, consistency, and export-grade quality. Our jaggery is produced using carefully selected sugarcane, traditional processing methods, and strict quality checks to ensure a clean taste, rich aroma, and reliable standards across every batch.",
    },
    {
        question: "Is Vijay Overseas a manufacturer or a supplier?",
        answer:
            "Vijay Overseas operates as both a manufacturer and a supplier. We are directly involved in sourcing, processing, packaging, and distributing jaggery, which allows us to maintain quality control and offer dependable supply to domestic and international buyers.",
    },
    {
        question: "Do you supply jaggery in bulk or for export?",
        answer:
            "Yes, we supply jaggery in bulk quantities and cater to export requirements. Our packaging options include 5 kg, 10 kg, and 25 kg packs, designed to meet the needs of wholesalers, retailers, and overseas buyers.",
    },
    {
        question: "How does Vijay Overseas ensure quality consistency?",
        answer:
            "Quality consistency is ensured through standardized processing, hygienic manufacturing conditions, and routine quality checks at every stage. From raw material selection to final packaging, each batch is monitored to maintain uniform taste, texture, and purity.",
    },
    {
        question: "Does Vijay Overseas support sustainable and ethical practices?",
        answer:
            "Yes, Vijay Overseas supports sustainable and ethical practices by working closely with farmers, encouraging responsible sourcing, and minimizing unnecessary chemical processing. Our approach prioritizes long-term environmental balance and fair trade relationships.",
    },
    {
        question: "Who typically works with Vijay Overseas?",
        answer:
            "Vijay Overseas works with wholesalers, retailers, food manufacturers, exporters, and distributors who are looking for reliable, high-quality jaggery supply for both domestic markets and international trade.",
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
