import React from 'react';
import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';

function Footer() {
  return (
    <footer className='footer'>
      <div className='nav-cont pb-3 pt-2'>
        <ul className='footer-ul'>
          <li>
            <a
              href='https://github.com/peoplesm'
              target='_blank'
              rel='noreferrer noopener'
            >
              <Github className='icon' size={50} />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/peoplesm/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <Linkedin className='icon' size={50} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
