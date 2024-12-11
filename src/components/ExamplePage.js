import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WorkshopList from './WorkshopList';
import FAQAccordion from './FAQAccordion';

const ExamplePage = () => {
  const [workshopsData, setWorkshopsData] = useState([]);
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    // Fetch workshops
    const fetchWorkshops = async () => {
      try {
        const response = await axios.get('/api/workshops');
        setWorkshopsData(response.data);
      } catch (error) {
        console.error("Error fetching workshops:", error);
      }
    };

    // Fetch FAQs (example API endpoint or static data)
    const fetchFAQs = async () => {
      try {
        const response = await axios.get('/api/faqs'); // Example endpoint
        setFaqData(response.data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
        // Fallback sample data
        setFaqData([
          { question: 'What is this platform about?', answer: 'This platform provides a wide range of workshops to enhance your skills.' },
          { question: 'How can I register for a workshop?', answer: 'You can register by clicking on the "Register" button on the workshop details page.' },
          { question: 'Are the workshops free?', answer: 'Some workshops are free, while others may require a fee.' },
          { question: 'How can I get a certificate?', answer: 'Certificates are provided after successful completion of workshops.' }
        ]);
      }
    };

    fetchWorkshops();
    fetchFAQs();
  }, []);

  return (
    <div>
      <h1>Available Workshops</h1>
      <WorkshopList workshops={workshopsData} />
      <FAQAccordion faqList={faqData} />
    </div>
  );
};

export default ExamplePage;
