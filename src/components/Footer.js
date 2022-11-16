import React from 'react';
import { Github, StackOverflow, Linkedin } from 'react-bootstrap-icons';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-cont pb-3 pt-2'>
        <ul className='footer-ul'>
          <li>
            <a
              href='https://github.com/peoplesm'
              target='_blank'
              rel='noreferrer noopener'
              title='GitHub'
            >
              <Github className='icon' size={50} />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/peoplesm/'
              target='_blank'
              rel='noreferrer noopener'
              title='LinkedIn'
            >
              <Linkedin className='icon' size={50} />
            </a>
          </li>
          <li>
            <a
              href='https://stackoverflow.com/users/19087710/matt?tab=profile'
              target='_blank'
              rel='noreferrer noopener'
              title='Stack Overflow'
            >
              <StackOverflow className='icon' size={50} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
