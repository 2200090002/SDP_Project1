// src/App.js
import React, { useState } from 'react'; // This line should be only once
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import UserProfilePage from './components/UserProfilePage';
import WorkshopList from './components/WorkshopList';
import WorkshopCalendar from './components/WorkshopCalendar';
import Notifications from './components/Notifications';
import FavoriteWorkshops from './components/FavoriteWorkshops';
import FeedbackForm from './components/FeedbackForm';
import Testimonials from './components/Testimonials';
import FAQAccordion from './components/FAQAccordion';
import PlatformPage from './components/PlatformPage';
import MyWorkshopPage from './components/MyWorkshopPage';
import MyCalendar from './components/MyCalendar'; // Import the MyCalendar component
import WorkshopDetails from './components/WorkshopDetails';
import ExamplePage from './components/ExamplePage';
import VideoPage from './components/VideoPage';
import AdminPage from './components/AdminPage';
import ManageWorkshops from './components/ManageWorkshops';
import ManageUsers from './components/ManageUsers';
import ViewFeedback from './components/ViewFeedback';


import './styles/styles.css';
import './App.css'; // Import additional CSS if needed for MyCalendar

const workshops = [
  // Your workshops array here...
    {
      id: 1,
      title: 'Web Development Bootcamp',
      description: 'Learn full-stack web development with React and Node.js.',
      date: '2024-12-01',
      location: 'Online',
      videoUrl: 'https://example.com/video1.mp4',  // Example video URL
    },
    {
      id: 2,
      title: 'Data Science Workshop',
      description: 'Get hands-on experience with Python and machine learning.',
      date: '2024-12-15',
      location: 'Online',
      videoUrl: 'https://example.com/video2.mp4',  // Example video URL
    },
    {
      id: 3,
      title: 'Digital Marketing Masterclass',
      description: 'Master SEO, social media, and online marketing strategies.',
      date: '2024-12-22',
      location: 'Online',
      videoUrl: 'https://example.com/video3.mp4',  // Example video URL
    },
    {
      id: 4,
      title: 'Graphic Design Fundamentals',
      description: 'Learn the basics of graphic design using Adobe Photoshop.',
      date: '2024-12-29',
      location: 'Online',
      videoUrl: 'https://example.com/video4.mp4',  // Example video URL
    },
    {
      id: 5,
      title: 'Project Management Essentials',
      description: 'Understand project management methodologies and tools.',
      date: '2025-01-05',
      location: 'Online',
      videoUrl: 'https://example.com/video5.mp4',  // Example video URL
    },
    {
      id: 6,
      title: 'Cybersecurity Basics',
      description: 'Learn how to protect networks and data from cyber threats.',
      date: '2025-01-12',
      location: 'Online',
      videoUrl: 'https://example.com/video6.mp4',  // Example video URL
    },
    {
      id: 7,
      title: 'Introduction to Cloud Computing',
      description: 'Explore cloud services, deployment models, and architecture.',
      date: '2025-01-19',
      location: 'Online',
      videoUrl: 'https://example.com/video7.mp4',  // Example video URL
    },
    {
      id: 8,
      title: 'Mobile App Development with React Native',
      description: 'Create mobile applications for iOS and Android using React Native.',
      date: '2025-01-26',
      location: 'Online',
      videoUrl: 'https://example.com/video8.mp4',  // Example video URL
    },
    {
      id: 9,
      title: 'Blockchain for Beginners',
      description: 'Discover the fundamentals of blockchain technology and cryptocurrency.',
      date: '2025-02-02',
      location: 'Online',
      videoUrl: 'https://example.com/video9.mp4',  // Example video URL
    },
    {
      id: 10,
      title: 'Machine Learning with TensorFlow',
      description: 'Learn to build machine learning models with TensorFlow.',
      date: '2025-02-09',
      location: 'Online',
      videoUrl: 'https://example.com/video10.mp4',  // Example video URL
    },
    {
      id: 11,
      title: 'AI Ethics and Policy',
      description: 'Discuss the ethical and policy issues surrounding AI technology.',
      date: '2025-02-16',
      location: 'Online',
      videoUrl: 'https://example.com/video11.mp4',  // Example video URL
    },
    {
      id: 12,
      title: 'Advanced Java Programming',
      description: 'Deep dive into advanced topics of Java programming for software developers.',
      date: '2025-02-23',
      location: 'Online',
      videoUrl: 'https://example.com/video12.mp4',  // Example video URL
    },
    {
      id: 13,
      title: 'Front-End Development with Vue.js',
      description: 'Build dynamic user interfaces using Vue.js.',
      date: '2025-03-01',
      location: 'Online',
      videoUrl: 'https://example.com/video13.mp4',  // Example video URL
    },
    {
      id: 14,
      title: 'Game Development with Unity',
      description: 'Create 2D and 3D games with Unity and C#.',
      date: '2025-03-08',
      location: 'Online',
      videoUrl: 'https://example.com/video14.mp4',  // Example video URL
    },
    {
      id: 15,
      title: 'Big Data Analytics with Apache Spark',
      description: 'Process large datasets and perform analytics with Apache Spark.',
      date: '2025-03-15',
      location: 'Online',
      videoUrl: 'https://example.com/video15.mp4',  // Example video URL
    },
  ];
  
  const App = () => {
 
  return (
    <Router>
      <div className="App">
        <h1> online Workshop sessions</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/workshops" element={<WorkshopList workshops={workshops} />} />
          <Route path="/workshops/:id" element={<WorkshopDetails workshops={workshops} />} />
          <Route path="/calendar" element={<WorkshopCalendar />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQAccordion />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/myworkshop" element={<MyWorkshopPage />} />
          <Route path="/mycalendar" element={<MyCalendar />} />
          <Route path="/faq" element={<ExamplePage />} />
          <Route path="/example" element={<ExamplePage />} />
          <Route path="/favorite" element={<FavoriteWorkshops />} />
          <Route path="/favorite" element={<FavoriteWorkshops />} />
          <Route path="/video-page/:id" element={<VideoPage workshops={workshops} />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/manage-workshops" element={<ManageWorkshops />} />
          <Route path="/admin/manage-users" element={<ManageUsers />} />
          <Route path="/admin/view-feedback" element={<ViewFeedback />} />
          <Route path="/" element={<HomePage />} /> <Route path="/login" element={<LoginPage />} /> <Route path="/signup" element={<SignUpPage />} /> {/* Other routes */}

        </Routes>
      </div>
    </Router>
  );
};

export default App;
