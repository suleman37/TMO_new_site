export default function Footer() {
  return (
    <footer>
      <div className="row footer-main">
        <div className="col-six tab-full left footer-desc">
          <div className="footer-logo" style={{ 
            background: "none", 
            width: "auto", 
            height: "auto", 
            font: "inherit", 
            color: "#39b54a",
            fontSize: "2.2rem",
            fontFamily: "'montserrat-semibold', sans-serif",
            letterSpacing: "0.1rem",
            marginBottom: "2rem"
          }}>
            Tech Masters Official
          </div>
          Tech Masters Official is a software house delivering cutting-edge
          digital solutions — from AI integrations and cloud infrastructure to
          custom web and mobile applications. We partner with businesses to
          design, build, and scale technology that drives real results.
        </div>

        <div className="col-six tab-full right footer-subscribe">
          <h4>Stay Connected</h4>
          <p>
            Subscribe to get updates on our latest projects, tech insights,
            and service announcements delivered straight to your inbox.
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
            <span>© Copyright Tech Masters Official {new Date().getFullYear()}</span>
            <span>
              Follow us on{" "}
              <a href="https://www.facebook.com/profile.php?id=61559357555605" target="_blank" rel="noopener noreferrer">Facebook</a>
              {" · "}
              <a href="https://www.instagram.com/thetechmastersofficial/" target="_blank" rel="noopener noreferrer">Instagram</a>
              {" · "}
              <a href="https://www.linkedin.com/company/tech-masters-official" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
  );
}
