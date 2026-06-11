import { useEffect } from "react";
import { Link } from "react-scroll";
import {
  MapPinIcon,
  ClockIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialLinks from "./SocialLinks";

const highlights = [
  {
    icon: RocketLaunchIcon,
    title: "30+ Apps Shipped",
    text: "Live on App Store & Google Play",
  },
  {
    icon: GlobeAltIcon,
    title: "Remote Worldwide",
    text: "Belgium, US, GCC & beyond",
  },
  {
    icon: ClockIcon,
    title: "Fast Turnaround",
    text: "Clear updates & on-time delivery",
  },
  {
    icon: MapPinIcon,
    title: "Based in Pakistan",
    text: "Working across time zones",
  },
];

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative py-24 sm:py-32" id="contact">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-lg leading-7 opacity-80">Ready to start?</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Let&apos;s Work Together
          </p>
          <p className="mt-4 text-sm leading-7 opacity-70 sm:text-base">
            Open for freelance projects and remote roles. Reach out on your
            preferred platform — I typically respond within 24 hours.
          </p>
        </div>

        <div
          className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
          data-aos="fade-up"
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-base-300/60 bg-base-200/50 p-4 text-center backdrop-blur-xl sm:p-5"
            >
              <item.icon className="mx-auto h-6 w-6 text-primary" />
              <p className="mt-3 text-sm font-bold">{item.title}</p>
              <p className="mt-1 text-xs opacity-70">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl" data-aos="zoom-in">
          <div className="rounded-3xl border border-base-300/60 bg-base-200/60 p-6 shadow-xl shadow-primary/5 backdrop-blur-xl sm:p-8">
            <div className="mb-6 text-center">
              <p className="text-xl font-bold">Connect with me</p>
              <p className="mt-2 text-sm opacity-70">
                Choose a platform below to discuss your next mobile or web project.
              </p>
            </div>
            <SocialLinks variant="cards" />
          </div>
        </div>

        <div
          className="mx-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          data-aos="fade-up"
        >
          <a
            href={`${process.env.PUBLIC_URL}/Updated-My-CV.pdf`}
            download="Salman KHAN CV.pdf"
            className="btn btn-primary"
          >
            Download CV
          </a>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="btn btn-outline border-base-300/70"
          >
            View My Work
          </Link>
        </div>
      </div>
    </section>
  );
}
