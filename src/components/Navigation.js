import React from 'react';

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className='nav-cont'>
      <ul>
        <li className='slide'>
          <a
            href='#about'
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'active' : ''}
            title='About'
          >
            About Me
          </a>
        </li>
        <li className='slide'>
          <a
            href='#portfolio'
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'active' : ''}
            title='Portfolio'
          >
            Portfolio
          </a>
        </li>
        <li className='slide'>
          <a
            href='#resume'
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'active' : ''}
            title='Resume'
          >
            Resume
          </a>
        </li>
        <li className='slide'>
          <a
            href='#contact'
            onClick={() => handlePageChange('ContactForm')}
            className={currentPage === 'ContactForm' ? 'active' : ''}
            title='Contact Me'
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
