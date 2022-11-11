export default function Home() {
  return (
    <>
      <div className='row about'>
        <h2>About Me</h2>
        <div className='col-lg-10'>
          Hi, I'm Matt, an aspiring Fullstack Developer. I graduated magna cum
          laude from the University of Colorado-Boulder in 2011 with a degree in
          Ecology and Evolutionary Biology with a teaching certificate in
          Secondary Science Education. I then worked as a wildland firefighter
          for the US Forest Service for nearly a decade, ultimately becoming a
          helicopter rappeler. This was a fun way to spend my twenties and
          taught me discipline, how to make decisions in high stress
          environments and managing people. I will have completed the full-stack
          programming bootcamp at the University of Denver in early December
          2022. With this new knowledge and skill set, I am excited to start a
          new chapter in computer programming.
        </div>
      </div>
      <div className='row about-img'>
        <div className='col-lg-5 center'>
          <img
            src='./assets/images/resume-pic.jpg'
            alt='me with darwin'
            className='pic'
          />
        </div>
        <div className='col-lg-5 center'>
          <img
            src='./assets/images/me-rap.jpg'
            alt='me with darwin'
            className='pic'
          />
        </div>
      </div>
    </>
  );
}
