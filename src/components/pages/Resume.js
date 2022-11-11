export default function Resume() {
  return (
    <>
      <h2>
        Download My {}
        <a
          href='./assets/peoples-resume.pdf'
          download='Peoples-Resume.pdf'
          className='slide res-size'
        >
          Resume
        </a>
      </h2>

      <div className='row skill-list'>
        <div className='col-md-12 col-lg-5'>
          <h3>Front-end Proficiencies</h3>
          <ul>
            <li className='skills'>HTML</li>
            <li className='skills'>CSS</li>
            <li className='skills'>JavaScript</li>
            <li className='skills'>jQuery</li>
            <li className='skills'>Responsive Design</li>
            <li className='skills'>React</li>
            <li className='skills'>Bootstrap</li>
          </ul>
        </div>
        <div className='col-md-12 col-lg-5'>
          <h3>Back-end Proficiencies</h3>
          <ul>
            <li className='skills'>APIs</li>
            <li className='skills'>Node</li>
            <li className='skills'>Express</li>
            <li className='skills'>MySQL, Sequelize</li>
            <li className='skills'>MongoDB, Mongoose</li>
            <li className='skills'>REST</li>
            <li className='skills'>GraphQL</li>
          </ul>
        </div>
      </div>
    </>
  );
}
