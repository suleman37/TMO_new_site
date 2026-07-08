import Scripts from "./Scripts";

export default function Home() {
  return (
    <>
      {/* header
      ================================================== */}
      <header className="s-header">
        <div className="header-logo">
          <a className="site-logo" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="Homepage" />
          </a>
        </div>

        <nav className="header-nav">
          <a href="#0" className="header-nav__close" title="close">
            <span>Close</span>
          </a>

          <div className="header-nav__content">
            <h3>Navigation</h3>

            <ul className="header-nav__list">
              <li className="current">
                <a className="smoothscroll" href="#home" title="home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about" title="about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#services" title="services">
                  Services
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#works" title="works">
                  Works
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#clients" title="clients">
                  Clients
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact" title="contact">
                  Contact
                </a>
              </li>
            </ul>

            <p>
              Perspiciatis hic praesentium nesciunt. Et neque a dolorum{" "}
              <a href="#0">voluptatem</a> porro iusto sequi veritatis libero enim.
              Iusto id suscipit veritatis neque reprehenderit.
            </p>

            <ul className="header-nav__social">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-behance" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble" />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <a className="header-menu-toggle" href="#0">
          <span className="header-menu-text">Menu</span>
          <span className="header-menu-icon" />
        </a>
      </header>

      {/* home
      ================================================== */}
      <section
        id="home"
        className="s-home target-section"
        data-parallax="scroll"
        data-image-src="/images/hero-bg.jpg"
        data-natural-width={3000}
        data-natural-height={2000}
        data-position-y="center"
      >
        <div className="overlay" />
        <div className="shadow-overlay" />

        <div className="home-content">
          <div className="row home-content__main">
            <h3>Welcome to Glint</h3>

            <h1>
              We are a creative group <br />
              of people who design <br />
              influential brands and <br />
              digital experiences.
            </h1>

            <div className="home-content__buttons">
              <a href="#contact" className="smoothscroll btn btn--stroke">
                Start a Project
              </a>
              <a href="#about" className="smoothscroll btn btn--stroke">
                More About Us
              </a>
            </div>
          </div>

          <div className="home-content__scroll">
            <a href="#about" className="scroll-link smoothscroll">
              <span>Scroll Down</span>
            </a>
          </div>

          <div className="home-content__line" />
        </div>

        <ul className="home-social">
          <li>
            <a href="#0">
              <i className="fa fa-facebook" aria-hidden="true" />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-twitter" aria-hidden="true" />
              <span>Twiiter</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-instagram" aria-hidden="true" />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-behance" aria-hidden="true" />
              <span>Behance</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-dribbble" aria-hidden="true" />
              <span>Dribbble</span>
            </a>
          </li>
        </ul>
      </section>

      {/* about
      ================================================== */}
      <section id="about" className="s-about">
        <div className="row section-header has-bottom-sep" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead subhead--dark">Hello There</h3>
            <h1 className="display-1 display-1--light">We Are Glint</h1>
          </div>
        </div>

        <div className="row about-desc" data-aos="fade-up">
          <div className="col-full">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt.
            </p>
          </div>
        </div>

        <div
          className="row about-stats stats block-1-4 block-m-1-2 block-mob-full"
          data-aos="fade-up"
        >
          <div className="col-block stats__col ">
            <div className="stats__count">127</div>
            <h5>Awards Received</h5>
          </div>
          <div className="col-block stats__col">
            <div className="stats__count">1505</div>
            <h5>Cups of Coffee</h5>
          </div>
          <div className="col-block stats__col">
            <div className="stats__count">109</div>
            <h5>Projects Completed</h5>
          </div>
          <div className="col-block stats__col">
            <div className="stats__count">102</div>
            <h5>Happy Clients</h5>
          </div>
        </div>

        <div className="about__line" />
      </section>

      {/* services
      ================================================== */}
      <section id="services" className="s-services">
        <div className="row section-header has-bottom-sep" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead">What We Do</h3>
            <h1 className="display-2">
              We’ve got everything you need to launch and grow your business
            </h1>
          </div>
        </div>

        <div className="row services-list block-1-2 block-tab-full">
          <div className="col-block service-item" data-aos="fade-up">
            <div className="service-icon">
              <i className="icon-paint-brush" />
            </div>
            <div className="service-text">
              <h3 className="h2">Brand Identity</h3>
              <p>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
                ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
                veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
                voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>

          <div className="col-block service-item" data-aos="fade-up">
            <div className="service-icon">
              <i className="icon-group" />
            </div>
            <div className="service-text">
              <h3 className="h2">Illustration</h3>
              <p>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
                ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
                veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
                voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>

          <div className="col-block service-item" data-aos="fade-up">
            <div className="service-icon">
              <i className="icon-megaphone" />
            </div>
            <div className="service-text">
              <h3 className="h2">Marketing</h3>
              <p>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
                ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
                veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
                voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>

          <div className="col-block service-item" data-aos="fade-up">
            <div className="service-icon">
              <i className="icon-earth" />
            </div>
            <div className="service-text">
              <h3 className="h2">Web Design</h3>
              <p>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
                ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
                veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
                voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>

          <div className="col-block service-item" data-aos="fade-up">
            <div className="service-icon">
              <i className="icon-cube" />
            </div>
            <div className="service-text">
              <h3 className="h2">Packaging Design</h3>
              <p>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
                ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
                veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
                voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>

          <div className="col-block service-item" data-aos="fade-up">
            <div className="service-icon">
              <i className="icon-lego-block" />
            </div>
            <div className="service-text">
              <h3 className="h2">Web Development</h3>
              <p>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
                ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
                veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
                voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* works
      ================================================== */}
      <section id="works" className="s-works">
        <div className="intro-wrap">
          <div
            className="row section-header has-bottom-sep light-sep"
            data-aos="fade-up"
          >
            <div className="col-full">
              <h3 className="subhead">Recent Works</h3>
              <h1 className="display-2 display-2--light">
                We love what we do, check out some of our latest works
              </h1>
            </div>
          </div>
        </div>

        <div className="row works-content">
          <div className="col-full masonry-wrap">
            <div className="masonry">
              <div className="masonry__brick" data-aos="fade-up">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a
                      href="/images/portfolio/gallery/g-shutterbug.jpg"
                      className="thumb-link"
                      title="Shutterbug"
                      data-size="1050x700"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/portfolio/lady-shutterbug.jpg"
                        srcSet="/images/portfolio/lady-shutterbug.jpg 1x, /images/portfolio/lady-shutterbug@2x.jpg 2x"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="item-folio__text">
                    <h3 className="item-folio__title">Shutterbug</h3>
                    <p className="item-folio__cat">Branding</p>
                  </div>

                  <a
                    href="https://www.behance.net/"
                    className="item-folio__project-link"
                    title="Project link"
                  >
                    <i className="icon-link" />
                  </a>

                  <div className="item-folio__caption">
                    <p>
                      Vero molestiae sed aut natus excepturi. Et tempora numquam.
                      Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="masonry__brick" data-aos="fade-up">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a
                      href="/images/portfolio/gallery/g-woodcraft.jpg"
                      className="thumb-link"
                      title="Woodcraft"
                      data-size="1050x700"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/portfolio/woodcraft.jpg"
                        srcSet="/images/portfolio/woodcraft.jpg 1x, /images/portfolio/woodcraft@2x.jpg 2x"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="item-folio__text">
                    <h3 className="item-folio__title">Woodcraft</h3>
                    <p className="item-folio__cat">Web Design</p>
                  </div>

                  <a
                    href="https://www.behance.net/"
                    className="item-folio__project-link"
                    title="Project link"
                  >
                    <i className="icon-link" />
                  </a>

                  <div className="item-folio__caption">
                    <p>
                      Vero molestiae sed aut natus excepturi. Et tempora numquam.
                      Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="masonry__brick" data-aos="fade-up">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a
                      href="/images/portfolio/gallery/g-beetle.jpg"
                      className="thumb-link"
                      title="The Beetle Car"
                      data-size="1050x700"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/portfolio/the-beetle.jpg"
                        srcSet="/images/portfolio/the-beetle.jpg 1x, /images/portfolio/the-beetle@2x.jpg 2x"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="item-folio__text">
                    <h3 className="item-folio__title">The Beetle</h3>
                    <p className="item-folio__cat">Web Development</p>
                  </div>

                  <a
                    href="https://www.behance.net/"
                    className="item-folio__project-link"
                    title="Project link"
                  >
                    <i className="icon-link" />
                  </a>

                  <div className="item-folio__caption">
                    <p>
                      Vero molestiae sed aut natus excepturi. Et tempora numquam.
                      Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="masonry__brick" data-aos="fade-up">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a
                      href="/images/portfolio/gallery/g-grow-green.jpg"
                      className="thumb-link"
                      title="Grow Green"
                      data-size="1050x700"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/portfolio/grow-green.jpg"
                        srcSet="/images/portfolio/grow-green.jpg 1x, /images/portfolio/grow-green@2x.jpg 2x"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="item-folio__text">
                    <h3 className="item-folio__title">Grow Green</h3>
                    <p className="item-folio__cat">Branding</p>
                  </div>

                  <a
                    href="https://www.behance.net/"
                    className="item-folio__project-link"
                    title="Project link"
                  >
                    <i className="icon-link" />
                  </a>

                  <div className="item-folio__caption">
                    <p>
                      Vero molestiae sed aut natus excepturi. Et tempora numquam.
                      Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="masonry__brick" data-aos="fade-up">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a
                      href="/images/portfolio/gallery/g-guitarist.jpg"
                      className="thumb-link"
                      title="Guitarist"
                      data-size="1050x700"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/portfolio/guitarist.jpg"
                        srcSet="/images/portfolio/guitarist.jpg 1x, /images/portfolio/guitarist@2x.jpg 2x"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="item-folio__text">
                    <h3 className="item-folio__title">Guitarist</h3>
                    <p className="item-folio__cat">Web Design</p>
                  </div>

                  <a
                    href="https://www.behance.net/"
                    className="item-folio__project-link"
                    title="Project link"
                  >
                    <i className="icon-link" />
                  </a>

                  <div className="item-folio__caption">
                    <p>
                      Vero molestiae sed aut natus excepturi. Et tempora numquam.
                      Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="masonry__brick" data-aos="fade-up">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a
                      href="/images/portfolio/gallery/g-palmeira.jpg"
                      className="thumb-link"
                      title="Palmeira"
                      data-size="1050x700"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/portfolio/palmeira.jpg"
                        srcSet="/images/portfolio/palmeira.jpg 1x, /images/portfolio/palmeira@2x.jpg 2x"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="item-folio__text">
                    <h3 className="item-folio__title">Palmeira</h3>
                    <p className="item-folio__cat">Web Design</p>
                  </div>

                  <a
                    href="https://www.behance.net/"
                    className="item-folio__project-link"
                    title="Project link"
                  >
                    <i className="icon-link" />
                  </a>

                  <div className="item-folio__caption">
                    <p>
                      Vero molestiae sed aut natus excepturi. Et tempora numquam.
                      Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* clients
      ================================================== */}
      <section id="clients" className="s-clients">
        <div className="row section-header" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead">Our Clients</h3>
            <h1 className="display-2">
              Glint has been honored to partner up with these clients
            </h1>
          </div>
        </div>

        <div className="row clients-outer" data-aos="fade-up">
          <div className="col-full">
            <div className="clients">
              <a href="#0" title="" className="clients__slide">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/clients/apple.png" alt="" />
              </a>
              <a href="#0" title="" className="clients__slide">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/clients/atom.png" alt="" />
              </a>
              <a href="#0" title="" className="clients__slide">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/clients/blackberry.png" alt="" />
              </a>
              <a href="#0" title="" className="clients__slide">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/clients/dropbox.png" alt="" />
              </a>
              <a href="#0" title="" className="clients__slide">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/clients/envato.png" alt="" />
              </a>
              <a href="#0" title="" className="clients__slide">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/clients/firefox.png" alt="" />
              </a>
              <a href="#0" title="" className="clients__slide">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/clients/joomla.png" alt="" />
              </a>
              <a href="#0" title="" className="clients__slide">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/clients/magento.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="row clients-testimonials" data-aos="fade-up">
          <div className="col-full">
            <div className="testimonials">
              <div className="testimonials__slide">
                <p>
                  Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio
                  nam accusantium ipsum. Laudantium quia consequatur molestias
                  delectus culpa facere hic dolores aperiam. Accusantium quos qui
                  praesentium corpori. Excepturi nam cupiditate culpa doloremque
                  deleniti repellat.
                </p>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/avatars/user-01.jpg"
                  alt="Author image"
                  className="testimonials__avatar"
                />
                <div className="testimonials__info">
                  <span className="testimonials__name">Tim Cook</span>
                  <span className="testimonials__pos">CEO, Apple</span>
                </div>
              </div>

              <div className="testimonials__slide">
                <p>
                  Excepturi nam cupiditate culpa doloremque deleniti repellat.
                  Veniam quos repellat voluptas animi adipisci. Nisi eaque
                  consequatur. Quasi voluptas eius distinctio. Atque eos maxime.
                  Qui ipsam temporibus quisquam vel.
                </p>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/avatars/user-05.jpg"
                  alt="Author image"
                  className="testimonials__avatar"
                />
                <div className="testimonials__info">
                  <span className="testimonials__name">Sundar Pichai</span>
                  <span className="testimonials__pos">CEO, Google</span>
                </div>
              </div>

              <div className="testimonials__slide">
                <p>
                  Repellat dignissimos libero. Qui sed at corrupti expedita
                  voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                  Autem eaque officia cum exercitationem sunt voluptatum accusamus.
                  Quasi voluptas eius distinctio.
                </p>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/avatars/user-02.jpg"
                  alt="Author image"
                  className="testimonials__avatar"
                />
                <div className="testimonials__info">
                  <span className="testimonials__name">Satya Nadella</span>
                  <span className="testimonials__pos">CEO, Microsoft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact
      ================================================== */}
      <section id="contact" className="s-contact">
        <div className="overlay" />
        <div className="contact__line" />

        <div className="row section-header" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead">Contact Us</h3>
            <h1 className="display-2 display-2--light">
              Reach out for a new project or just say hello
            </h1>
          </div>
        </div>

        <div className="row contact-content" data-aos="fade-up">
          <div className="contact-primary">
            <h3 className="h6">Send Us A Message</h3>

            <form
              name="contactForm"
              id="contactForm"
              method="post"
              action=""
              noValidate
            >
              <fieldset>
                <div className="form-field">
                  <input
                    name="contactName"
                    type="text"
                    id="contactName"
                    placeholder="Your Name"
                    minLength={2}
                    required
                    aria-required="true"
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <input
                    name="contactEmail"
                    type="email"
                    id="contactEmail"
                    placeholder="Your Email"
                    required
                    aria-required="true"
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <input
                    name="contactSubject"
                    type="text"
                    id="contactSubject"
                    placeholder="Subject"
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <textarea
                    name="contactMessage"
                    id="contactMessage"
                    placeholder="Your Message"
                    rows={10}
                    cols={50}
                    required
                    aria-required="true"
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <button className="full-width btn--primary">Submit</button>
                  <div className="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1" />
                      <div className="bounce2" />
                      <div className="bounce3" />
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>

            <div className="message-warning">
              Something went wrong. Please try again.
            </div>

            <div className="message-success">
              Your message was sent, thank you!
              <br />
            </div>
          </div>

          <div className="contact-secondary">
            <div className="contact-info">
              <h3 className="h6 hide-on-fullwidth">Contact Info</h3>

              <div className="cinfo">
                <h5>Where to Find Us</h5>
                <p>
                  1600 Amphitheatre Parkway
                  <br />
                  Mountain View, CA
                  <br />
                  94043 US
                </p>
              </div>

              <div className="cinfo">
                <h5>Email Us At</h5>
                <p>
                  contact@glintsite.com
                  <br />
                  info@glintsite.com
                </p>
              </div>

              <div className="cinfo">
                <h5>Call Us At</h5>
                <p>
                  Phone: (+63) 555 1212
                  <br />
                  Mobile: (+63) 555 0100
                  <br />
                  Fax: (+63) 555 0101
                </p>
              </div>

              <ul className="contact-social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-behance" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* footer
      ================================================== */}
      <footer>
        <div className="row footer-main">
          <div className="col-six tab-full left footer-desc">
            <div className="footer-logo" />
            Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec,
            egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh
            pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor
            accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
          </div>

          <div className="col-six tab-full right footer-subscribe">
            <h4>Get Notified</h4>
            <p>
              Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae
              aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt
              iusto porro.
            </p>

            <div className="subscribe-form">
              <form id="mc-form" className="group" noValidate>
                <input
                  type="email"
                  name="EMAIL"
                  className="email"
                  id="mc-email"
                  placeholder="Email Address"
                  required
                />
                <input type="submit" name="subscribe" value="Subscribe" />
                <label htmlFor="mc-email" className="subscribe-message" />
              </form>
            </div>
          </div>
        </div>

        <div className="row footer-bottom">
          <div className="col-twelve">
            <div className="copyright">
              <span>© Copyright Glint 2017</span>
              <span>
                Site Template by{" "}
                <a href="https://www.colorlib.com/">Colorlib</a>
              </span>
            </div>

            <div className="go-top">
              <a className="smoothscroll" title="Back to Top" href="#top">
                <i className="icon-arrow-up" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* photoswipe background
      ================================================== */}
      <div aria-hidden="true" className="pswp" role="dialog" tabIndex={-1}>
        <div className="pswp__bg" />
        <div className="pswp__scroll-wrap">
          <div className="pswp__container">
            <div className="pswp__item" />
            <div className="pswp__item" />
            <div className="pswp__item" />
          </div>

          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              <div className="pswp__counter" />
              <button className="pswp__button pswp__button--close" title="Close (Esc)" />
              <button className="pswp__button pswp__button--share" title="Share" />
              <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />
              <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />
              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip" />
            </div>
            <button
              className="pswp__button pswp__button--arrow--left"
              title="Previous (arrow left)"
            />
            <button
              className="pswp__button pswp__button--arrow--right"
              title="Next (arrow right)"
            />
            <div className="pswp__caption">
              <div className="pswp__caption__center" />
            </div>
          </div>
        </div>
      </div>

      {/* preloader
      ================================================== */}
      <div id="preloader">
        <div id="loader">
          <div className="line-scale-pulse-out">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>

      <Scripts />
    </>
  );
}
