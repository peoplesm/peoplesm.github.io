import React from 'react';
import Navigation from './Navigation';

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <div className='header-bg'>
        <h1>Matt Peoples</h1>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </header>
  );
}
