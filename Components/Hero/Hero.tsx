"use client";

import { useEffect } from "react";
import { useHeroParallax } from "@/Components/Hero/useHeroParallax";

export default function Hero() {
  useHeroParallax();

  useEffect(() => {
    const line = document.querySelector(".home-content__line") as HTMLElement | null;
    if (!line) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;
      // progress goes 0 → 1 as user scrolls from 0 → viewport height
      const progress = Math.min(scrollY / maxScroll, 1);
      // translateY goes from -100% (hidden) to 0% (fully filled)
      const translateY = -100 + progress * 100;
      line.classList.add("scrolled");
      line.style.setProperty("--scroll-progress", `${translateY}%`);
    };

    // initialise on mount
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="s-home target-section"
      data-parallax="scroll"
      data-image-src="/images/hero-software-house.jpg"
      data-natural-width={3000}
      data-natural-height={2000}
      data-position-y="center"
      data-speed="0.35"
    >
      <div className="overlay" />
      <div className="shadow-overlay" />

      <div className="home-content">
        <div className="row home-content__main">
          <h3>Welcome to TechMasters</h3>

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
          <a href="https://www.facebook.com/profile.php?id=61559357555605" target="_blank" rel="noopener noreferrer">
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
          <a href="https://www.instagram.com/thetechmastersofficial/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram" aria-hidden="true" />
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/tech-masters-official" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin" aria-hidden="true" />
            <span>LinkedIn</span>
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
  );
}
