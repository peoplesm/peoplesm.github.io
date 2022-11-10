export default function Resume() {
  return (
    <>
      <h2>
        Download My{' '}
        <a href='./assets/peoples-resume.pdf' download='Peoples-Resume.pdf'>
          Resume
        </a>
      </h2>
      <div className='row skill-list'>
        <div className='col-md-12 col-lg-5'>
          <ul>
            <h3>Front-end Proficiencies</h3>
            <li>HTML</li>
            <li className='list'>CSS</li>
            <li className='list'>JavaScript</li>
            <li className='list'>jQuery</li>
            <li className='list'>Responsive Design</li>
            <li className='list'>React</li>
            <li className='list'>Bootstrap</li>
          </ul>
        </div>
        <div className='col-md-12 col-lg-5'>
          <ul>
            <h3 className='res'>Back-end Proficiencies</h3>
            <li className='list'>APIs</li>
            <li className='list'>Node</li>
            <li className='list'>Express</li>
            <li className='list'>MySQL, Sequelize</li>
            <li className='list'>MongoDB, Mongoose</li>
            <li className='list'>REST</li>
            <li className='list'>GraphQL</li>
          </ul>
        </div>
      </div>
    </>
  );
}
