import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import ContactForm from './pages/ContactForm';

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  //Rendering based on one value so switch works well and looks cleaner than if/else
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      case 'ContactForm':
        return <ContactForm />;
      default:
        return <Home />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}
