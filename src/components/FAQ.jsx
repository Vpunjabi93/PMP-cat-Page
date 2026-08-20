import { useState } from 'react';
import { faqs } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-container">
        <h2 className="section-title">Questions Worth Answering Before You Apply</h2>
        <div className="accordion">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item">
              <button
                className="accordion-header"
                aria-expanded={openIndex === index}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <div className="accordion-content" style={{ maxHeight: '500px' }}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
