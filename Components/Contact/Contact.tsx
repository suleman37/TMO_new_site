export default function Contact() {
  return (
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
            <h3 className="h6 hide-on-fullwidth" style={{ fontSize: "2rem", fontWeight: 700, color: "#0d1b2a", marginBottom: "0.6rem" }}>
              Contact Information
            </h3>
            <p style={{ color: "#6b7280", marginBottom: "2.4rem", fontSize: "1.5rem" }}>
              Here are the ways you can reach us directly.
            </p>

            {/* Location */}
            <div className="cinfo" style={{ marginBottom: "2rem" }}>
              <h5 style={{ color: "#0d1b2a", fontWeight: 700, marginBottom: "0.3rem", fontSize: "1.5rem" }}>Our Location</h5>
              <p style={{ color: "#4b5563", fontSize: "1.4rem", margin: 0 }}>Street 3, Baldia Town, Karachi, Pakistan</p>
            </div>

            {/* Email */}
            <div className="cinfo" style={{ marginBottom: "2rem" }}>
              <h5 style={{ color: "#0d1b2a", fontWeight: 700, marginBottom: "0.3rem", fontSize: "1.5rem" }}>Email Us</h5>
              <p style={{ color: "#4b5563", fontSize: "1.4rem", margin: 0 }}>
                admin@techmastersofficial.com<br />
                techmastersofficial@gmail.com
              </p>
            </div>

            {/* WhatsApp */}
            <div className="cinfo" style={{ marginBottom: "2rem" }}>
              <h5 style={{ color: "#0d1b2a", fontWeight: 700, marginBottom: "0.3rem", fontSize: "1.5rem" }}>Whatsapp</h5>
              <p style={{ color: "#4b5563", fontSize: "1.4rem", margin: 0 }}>+92 (307) 188-1156</p>
            </div>

            {/* Business Hours */}
            <div className="cinfo" style={{ marginBottom: "2rem" }}>
              <h5 style={{ color: "#0d1b2a", fontWeight: 700, marginBottom: "0.3rem", fontSize: "1.5rem" }}>Business Hours</h5>
              <p style={{ color: "#4b5563", fontSize: "1.4rem", margin: 0 }}>
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
            </div>

            <ul className="contact-social">
              <li>
                <a href="https://www.facebook.com/profile.php?id=61559357555605" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/thetechmastersofficial/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/tech-masters-official" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin" aria-hidden="true" />
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
  );
}
