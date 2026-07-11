"use client";

const techStacks = [
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 13.5L9 9v7H7.5V7.5h1.8l6.2 8.5V7.5H17v8h-1.5z"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 24 24" fill="#3178C6" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="3" fill="#3178C6"/>
        <path d="M13.5 11.5H11v6H9.5v-6H7V10h6.5v1.5zM14 10h3c1.1 0 1.9.3 2.5.9.6.6.9 1.4.9 2.3 0 1-.3 1.8-.9 2.4-.6.6-1.4.9-2.5.9H15.5v2.5H14V10zm1.5 5h1c.6 0 1-.2 1.3-.5.3-.3.4-.7.4-1.2 0-.5-.1-.9-.4-1.2-.3-.3-.7-.5-1.3-.5h-1V15z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.3l7.5 4.1v8.2L12 20.7l-7.5-4.1V8.4L12 4.3z" fill="#68A063"/>
        <path d="M12 7a5 5 0 100 10A5 5 0 0012 7zm0 2a3 3 0 110 6 3 3 0 010-6z" fill="#68A063"/>
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2c-2.8 0-5 .6-5 2v2h5v1H5C3.3 7 2 8.8 2 11s1.3 4 3 4h1v-2.5C6 11 7.3 10 9 10h6c1.7 0 3-1.3 3-3V4c0-1.4-2.2-2-6-2zm-1 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill="#3776AB"/>
        <path d="M12 22c2.8 0 5-.6 5-2v-2h-5v-1h7c1.7 0 3-1.8 3-4s-1.3-4-3-4h-1v2.5c0 1.5-1.3 2.5-3 2.5H9c-1.7 0-3 1.3-3 3v3c0 1.4 2.2 2 6 2zm1-2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#FFD43B"/>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8 2 5 7 5 12c0 3.9 1.9 7.3 4.8 9.2L12 22l2.2-0.8C17.1 19.3 19 15.9 19 12 19 7 16 2 12 2zm0 18.5l-1-.4C8.8 18.6 7 15.5 7 12c0-4 2.4-8 5-8s5 4 5 8c0 3.5-1.8 6.6-4 8.1l-1 .4z" fill="#47A248"/>
        <path d="M12 4v16" stroke="#47A248" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="7" rx="7" ry="4" fill="none" stroke="#336791" strokeWidth="1.5"/>
        <path d="M5 7v5c0 2.2 3.1 4 7 4s7-1.8 7-4V7" fill="none" stroke="#336791" strokeWidth="1.5"/>
        <path d="M5 12v5c0 2.2 3.1 4 7 4s7-1.8 7-4v-5" fill="none" stroke="#336791" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 6h2v2h-2V6zm-3 0h2v2h-2V6zm-3 3h2v2H7V9zm3 0h2v2h-2V9zm3 0h2v2h-2V9zm3 0h2v2h-2V9zM7 6h2v2H7V6z" fill="#2496ED"/>
        <path d="M22 11.5c-.5-.4-1.6-.5-2.4-.3-.1-.8-.6-1.5-1.4-2l-.5-.3-.3.5c-.4.6-.5 1.6-.1 2.3-.2.1-.6.3-1.1.3H2.1c-.2 1.2.1 2.7 1 3.8.8 1 2 1.5 3.6 1.5 3.4 0 5.9-1.5 7.1-4.3.5 0 1.5 0 2-.9 0 0 .6-.9.2-1.6z" fill="#2496ED"/>
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 13.5l-3 5h3.5l.5-1.5h2l.5 1.5H14l-3-5H7zm1 1.5h2l-.5 1.5H8.5L8 15zm8-5.5c0-1.7-1.3-3-3-3-.4 0-.8.1-1.1.2C11.4 5.7 10.3 5 9 5 7.3 5 6 6.3 6 8c0 .2 0 .4.1.6C5.4 9 5 9.9 5 11c0 1.7 1.3 3 3 3h8c1.7 0 3-1.3 3-3 0-1.3-.8-2.4-2-2.8V9.5z" fill="#FF9900"/>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6c-2.7 0-4.4 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.1 4.1 2.1 2.7 0 4.4-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C15.2 7.1 14.1 6 12 6zm-5 6c-2.7 0-4.4 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.1 2.2 2.7 0 4.4-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C10.2 13.1 9.1 12 7 12z" fill="#38BDF8"/>
      </svg>
    ),
  },
  {
    name: "GraphQL",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L3 8.5v7L12 21l9-5.5v-7L12 3z" fill="none" stroke="#E10098" strokeWidth="1.5"/>
        <circle cx="12" cy="3" r="1.5" fill="#E10098"/>
        <circle cx="3" cy="8.5" r="1.5" fill="#E10098"/>
        <circle cx="21" cy="8.5" r="1.5" fill="#E10098"/>
        <circle cx="3" cy="15.5" r="1.5" fill="#E10098"/>
        <circle cx="21" cy="15.5" r="1.5" fill="#E10098"/>
        <circle cx="12" cy="21" r="1.5" fill="#E10098"/>
        <path d="M12 3v18M3 8.5l18 7M3 15.5l18-7" stroke="#E10098" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
  },
  {
    name: "Redis",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 15.5l10 4 10-4-10-4-10 4z" fill="#DC382D"/>
        <path d="M2 12l10 4 10-4-10-4L2 12z" fill="#FF6B6B"/>
        <path d="M2 8.5l10 4 10-4L12 4.5 2 8.5z" fill="#DC382D"/>
      </svg>
    ),
  },
  {
    name: "Flutter",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2L4 12l3 3 10-10-3-3z" fill="#54C5F8"/>
        <path d="M14 10l-7 7 3.5 3.5L14 17l3-3-3-4z" fill="#54C5F8"/>
        <path d="M10.5 16.5L14 20l3-3-3.5-3.5-3 3z" fill="#01579B"/>
      </svg>
    ),
  },
  {
    name: "Firebase",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 20l2-9-2-4 8 13H6z" fill="#FFA000"/>
        <path d="M14 20L8 11l2-7 4 16z" fill="#F57F17"/>
        <path d="M18 20L10 4l-2 7 10 9z" fill="#FFCA28"/>
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l8.5 4.5v9L12 22l-8.5-6.5v-9L12 2z" fill="none" stroke="#326CE5" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="2.5" fill="#326CE5"/>
        <path d="M12 5v3M12 16v3M5 8.5l2.5 1.5M16.5 14l2.5 1.5M5 15.5l2.5-1.5M16.5 10l2.5-1.5" stroke="#326CE5" strokeWidth="1.2"/>
      </svg>
    ),
  },
];

const Strip = ({
  items,
  direction,
  className,
}: {
  items: typeof techStacks;
  direction: "left" | "right";
  className?: string;
}) => {
  const doubled = [...items, ...items];

  return (
    <div className={`stacks-strip ${className ?? ""}`}>
      <div className={`stacks-track stacks-track--${direction}`} aria-hidden="true">
        {doubled.map((tech, i) => (
          <span key={i} className="stacks-item">
            <span className="stacks-item__icon">{tech.icon}</span>
            {tech.name}
            <span className="stacks-item__cross">✕</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default function Stacks() {
  return (
    <section id="stacks" className="s-stacks">
      <div className="stacks-bg" aria-hidden="true" />

      <div className="stacks-inner">
        <div className="row section-header stacks-header" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead">Our Tech Stack</h3>
            <h1 className="display-2">Technologies we master</h1>
          </div>
        </div>

        <div className="stacks-x-wrap">
          <Strip items={techStacks} direction="left"  className="" />
          <Strip items={techStacks} direction="right" className="" />
        </div>
      </div>
    </section>
  );
}
