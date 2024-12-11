import React, { useState } from 'react';
import './FAQAccordion.css';

const FAQAccordion = ({ faqList = [] }) => {
  const [expandAll, setExpandAll] = useState(false);

  // Toggle the state of all FAQs
  const toggleAllFAQs = () => setExpandAll(!expandAll);

  return (
    <div className="faq-accordion">
      <h2>Frequently Asked Questions</h2>
      
      {faqList.length === 0 ? (
        <p>No FAQs available.</p>
      ) : (
        <>
          <button onClick={toggleAllFAQs} className="toggle-all">
            {expandAll ? 'Collapse All' : 'Expand All'}
          </button>
          {faqList.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
              expandAll={expandAll} 
            />
          ))}
        </>
      )}
    </div>
  );
};

const FAQItem = ({ question, answer, expandAll }) => {
  const [isOpen, setIsOpen] = useState(false);

  // If expandAll is updated, set FAQ to open or closed based on expandAll value
  React.useEffect(() => {
    setIsOpen(expandAll);
  }, [expandAll]);

  return (
    <div className="faq-item">
      <h4 onClick={() => setIsOpen(!isOpen)} className="faq-question">
        {question}
      </h4>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default FAQAccordion;
