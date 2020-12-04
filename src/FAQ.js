import React from 'react';

export const FAQ = () => {
    const faqs = [
        {
            question: "How do you make your doughnuts?",
            answer: "With lots of love, and a little bit of crazy"
        },
        {
            question: "Can you share your recipes?",
            answer: "Yep... for a million dollars!!"
        },
        {
            question: "Is React really that hard??",
            answer: "Nope. Just need to be patient with yourself!"
        }
    ]

    return (
        <>
            <h1>Frequently Asked Questions:</h1>
            {faqs.map((qa, index) => (
                <div key={index}>
                    <h2>{qa.question}</h2>
                    <h4>{qa.answer}</h4>
                </div>
            ))}
        </>
    )
}