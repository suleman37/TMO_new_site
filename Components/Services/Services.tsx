const services = [
  {
    icon: "icon-window",
    title: "Web Development",
    description:
      "Custom websites and web applications using the latest technologies and frameworks.",
  },
  {
    icon: "icon-mobile",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android devices.",
  },
  {
    icon: "icon-cloud",
    title: "Cloud Solutions",
    description:
      "Scalable and secure cloud infrastructure and migration services.",
  },
  {
    icon: "icon-lamp",
    title: "AI Integration",
    description:
      "Implement AI-powered features like chatbots, recommendation systems, and more.",
  },
  {
    icon: "icon-disk",
    title: "Database Management",
    description:
      "Design, optimization, and management of relational and NoSQL databases.",
  },
  {
    icon: "icon-settings",
    title: "Custom Software",
    description:
      "Tailor-made software solutions designed to meet your specific business needs.",
  },
];

export default function Services() {
  return (
    <section id="services" className="s-services">
      <div className="row section-header has-bottom-sep" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead">Our Services</h3>
          <h1 className="display-2">
            We offer a wide range of technology services to help businesses
            thrive in the digital age
          </h1>
        </div>
      </div>

      <div className="row services-list block-1-2 block-tab-full">
        {services.map((service) => (
          <div
            key={service.title}
            className="col-block service-item"
            data-aos="fade-up"
          >
            <div className="service-icon">
              <i className={service.icon} />
            </div>
            <div className="service-text">
              <h3 className="h2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
