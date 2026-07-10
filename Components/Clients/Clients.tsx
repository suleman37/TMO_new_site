export default function Clients() {
  return (
    <section id="clients" className="s-clients">
      <div className="row section-header" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead">Our Clients</h3>
          <h1 className="display-2">
            We has been honored to partner up with these clients
          </h1>
        </div>
      </div>
    
      <div className="row clients-outer" data-aos="fade-up">
        <div className="col-full">
          <div className="clients">
            <a href="#0" title="" className="clients__slide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/clients/client1-e01d34c5.png" alt="Client 1" />
            </a>
            <a href="#0" title="" className="clients__slide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/clients/client2-df53a914.png" alt="Client 2" />
            </a>
            <a href="#0" title="" className="clients__slide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/clients/client3-3bd3fb14.png" alt="Client 3" />
            </a>
            <a href="#0" title="" className="clients__slide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/clients/client4-707cc1fc.png" alt="Client 4" />
            </a>
            <a href="#0" title="" className="clients__slide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/clients/client5-b572a63d.png" alt="Client 5" />
            </a>
            <a href="#0" title="" className="clients__slide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/clients/client6-73def9a2.png" alt="Client 6" />
            </a>
            <a href="#0" title="" className="clients__slide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/clients/client7-fbce2808.png" alt="Client 7" />
            </a>
            <a href="#0" title="" className="clients__slide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/clients/client8-fb8f4c1b.png" alt="Client 8" />
            </a>
          </div>
        </div>
      </div>
    
      <div className="row clients-testimonials" data-aos="fade-up">
        <div className="col-full">
          <div className="testimonials">
            <div className="testimonials__slide">
              <p>
                The AI integration Tech Master Official implemented increased our
                customer satisfaction rates by 45%. Truly impressive work!
              </p>
    
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/avatars/user-01.jpg"
                alt="Adam Jonathan"
                className="testimonials__avatar"
              />
              <div className="testimonials__info">
                <span className="testimonials__name">Adam Jonathan</span>
                <span className="testimonials__pos">
                  Marketing Director, veekrypt
                </span>
              </div>
            </div>
    
            <div className="testimonials__slide">
              <p>
                Their team&apos;s expertise in cloud solutions has streamlined
                our operations and significantly reduced costs.
              </p>
    
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/avatars/user-02.jpg"
                alt="David Wilson"
                className="testimonials__avatar"
              />
              <div className="testimonials__info">
                <span className="testimonials__name">David Wilson</span>
                <span className="testimonials__pos">CTO, CloudNine</span>
              </div>
            </div>
    
            <div className="testimonials__slide">
              <p>
                We are thrilled with the custom software they developed. It
                perfectly meets our unique business needs and is very
                user-friendly.
              </p>
    
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/avatars/user-03.jpg"
                alt="Jessica Lee"
                className="testimonials__avatar"
              />
              <div className="testimonials__info">
                <span className="testimonials__name">Jessica Lee</span>
                <span className="testimonials__pos">
                  Operations Manager, ProCorp
                </span>
              </div>
            </div>
    
           
          </div>
        </div>
      </div>
    </section>
  );
}
