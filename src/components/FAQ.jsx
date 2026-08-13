import { useState } from 'react';
import { faqs } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section reveal" id="faq" style={{ padding: '60px 0', background: '#FAFAFA' }}>
      <div className="container faq-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="section-title">Common Questions Before You Apply</h2>
        <div className="accordion">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item" style={{ marginBottom: '16px', background: '#fff', border: '1px solid #eaeaea', borderRadius: '8px' }}>
              <button 
                className="accordion-header" 
                aria-expanded={openIndex === index}
                onClick={() => toggleFAQ(index)}
                style={{ width: '100%', textAlign: 'left', padding: '20px', background: 'none', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}
              >
                {faq.question}
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="accordion-content" style={{ padding: '0 20px 20px 20px', fontSize: '15px', color: '#333' }}>
                  <p style={{ margin: 0 }}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
