import { Github } from 'react-bootstrap-icons';

export default function Portfolio() {
  return (
    <>
      <h2>Portfolio</h2>
      <div className='row project-row'>
        <div className='card'>
          <div className='card-img'>
            <a
              href='https://mythic-plus-team.herokuapp.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <img
                src='./assets/images/mplus-ss.png'
                class='card-img-top'
                alt='Mythic+ App'
              />
            </a>
          </div>
          <div className='card-body'>
            <div className='project-title'>
              <h4 className='card-title'>Mythic+ Team Maker</h4>
              <a
                href='https://github.com/peoplesm/mythic-plus-team'
                target='_blank'
                rel='noreferrer noopener'
              >
                <Github className='icon ms-2' size={50} />
              </a>
            </div>
            <p className='card-text pt-2'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='card-img'>
            <a
              href='https://peoplesm.github.io/magic-app/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <img
                src='./assets/images/magic-ss.png'
                class='card-img-top'
                alt='Magic App'
              />
            </a>
          </div>
          <div className='card-body'>
            <div className='project-title'>
              <h4 className='card-title'>Magic App</h4>
              <a
                href='https://github.com/peoplesm/magic-app'
                target='_blank'
                rel='noreferrer noopener'
              >
                <Github className='icon ms-2' size={50} />
              </a>
            </div>
            <p className='card-text pt-2'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='card-img'>
            <a
              href='https://peoplesm.github.io/weather-dashboard/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <img
                src='./assets/images/weather-ss.png'
                class='card-img-top'
                alt='Weather Dashboard'
              />
            </a>
          </div>
          <div className='card-body'>
            <div className='project-title'>
              <h4 className='card-title'>Weather Dashboard</h4>
              <a
                href='https://github.com/peoplesm/weather-dashboard'
                target='_blank'
                rel='noreferrer noopener'
              >
                <Github className='icon ms-2' size={50} />
              </a>
            </div>
            <p className='card-text pt-2'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='card-img'>
            <a
              href='https://guarded-chamber-72241.herokuapp.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <img
                src='./assets/images/tech-blog-ss.png'
                class='card-img-top'
                alt='Tech Blog'
              />
            </a>
          </div>
          <div className='card-body'>
            <div className='project-title'>
              <h4 className='card-title'>Tech Blog</h4>
              <a
                href='https://github.com/peoplesm/tech-blog'
                target='_blank'
                rel='noreferrer noopener'
              >
                <Github className='icon ms-2' size={50} />
              </a>
            </div>
            <p className='card-text pt-2'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='card-img'>
            <a
              href='https://blooming-retreat-74088.herokuapp.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <img
                src='./assets/images/jate-ss.png'
                class='card-img-top'
                alt='Text Editor App'
              />
            </a>
          </div>
          <div className='card-body'>
            <div className='project-title'>
              <h4 className='card-title'>PWA Text Editor</h4>
              <a
                href='https://github.com/peoplesm/pwa-text-editor'
                target='_blank'
                rel='noreferrer noopener'
              >
                <Github className='icon ms-2' size={50} />
              </a>
            </div>
            <p className='card-text pt-2'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='card-img'>
            <a
              href='https://evening-escarpment-24555.herokuapp.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <img
                src='./assets/images/note-taker-ss.png'
                class='card-img-top'
                alt='Note Taker App'
              />
            </a>
          </div>
          <div className='card-body'>
            <div className='project-title'>
              <h4 className='card-title'>Note Taker App</h4>
              <a
                href='https://github.com/peoplesm/note-taker'
                target='_blank'
                rel='noreferrer noopener'
              >
                <Github className='icon ms-2' size={50} />
              </a>
            </div>
            <p className='card-text pt-2'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
