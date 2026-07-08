export default function About() {
  return (
    <section id="about" className="s-about">
      <div className="row section-header has-bottom-sep" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead subhead--dark"></h3>
          <h1 className="display-1 display-1--light">We Are Digital Innovators</h1>
        </div>
      </div>
    
      <div className="row about-desc" data-aos="fade-up">
        <div className="col-full">
          <p>
          We help businesses transform ideas into powerful digital products through modern web development, mobile applications, AI solutions, and custom software. Our focus is on creating scalable, secure, and user-centered technology that delivers real business value.
        
          </p>
        </div>
      </div>
    
      <div
        className="row about-stats stats block-1-4 block-m-1-2 block-mob-full"
        data-aos="fade-up"
      >
        <div className="col-block stats__col ">
          <div className="stats__count">50+</div>
          <h5>Projects Completed</h5>
        </div>
        <div className="col-block stats__col">
          <div className="stats__count">50+</div>
          <h5>Happy Clients</h5>
        </div>
        <div className="col-block stats__col">
          <div className="stats__count">25+</div>
          <h5>Team Members</h5>
        </div>
        <div className="col-block stats__col">
          <div className="stats__count">5+</div>
          <h5>Years Experience</h5>
        </div>
      </div>
    
      <div className="about__line" />
    </section>
  );
}
