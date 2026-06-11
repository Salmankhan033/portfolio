import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import pfp from "../avatar.png";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialLinks from "./SocialLinks";

const navigation = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Hero() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "premiumDark"
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "premiumLight" : "premiumDark");
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-base-300/60 bg-base-100/70 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
          aria-label="Global"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="-m-1.5 cursor-pointer p-1.5 text-lg font-bold tracking-tight"
          >
            Salman Khan
          </Link>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                activeClass="!opacity-100 after:!scale-x-100"
                className="cursor-pointer text-sm font-semibold leading-6 opacity-80 transition hover:opacity-100 relative w-fit block after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition after:duration-300 hover:after:scale-x-100"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-3">
            <a
              href={`${process.env.PUBLIC_URL}/Updated-My-CV.pdf`}
              download="Salman KHAN CV.pdf"
              className="btn btn-outline btn-sm border-base-300/70"
            >
              Download CV
            </a>
            <label className="swap swap-rotate cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                onChange={handleToggle}
                checked={theme === "premiumLight"}
                aria-label="Toggle theme"
              />
              <SunIcon className="swap-off h-6 w-6 fill-current" />
              <MoonIcon className="swap-on h-6 w-6 fill-current" />
            </label>
          </div>
        </nav>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto border-l border-base-300/60 bg-base-100/95 px-6 py-6 backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <label className="swap swap-rotate cursor-pointer">
                <input
                  type="checkbox"
                  className="hidden"
                  onChange={handleToggle}
                  checked={theme === "premiumLight"}
                  aria-label="Toggle theme"
                />
                <SunIcon className="swap-off h-6 w-6 fill-current" />
                <MoonIcon className="swap-on h-6 w-6 fill-current" />
              </label>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={closeMobileMenu}
                  className="block rounded-xl px-3 py-3 text-base font-semibold hover:bg-base-200/60"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={`${process.env.PUBLIC_URL}/Updated-My-CV.pdf`}
                download="Salman KHAN CV.pdf"
                className="block rounded-xl px-3 py-3 text-base font-semibold hover:bg-base-200/60"
              >
                Download CV
              </a>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24">
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8" data-aos="fade-up">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
                <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
                Available for freelance & remote work
              </div>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                Salman Khan
              </h1>

              <div className="mt-4 text-xl font-medium text-primary sm:text-2xl">
                <TypeAnimation
                  sequence={[
                    "React Native Developer",
                    1800,
                    "Mobile App Developer",
                    1800,
                    "React.js & Web Developer",
                    1800,
                    "ASO & Store Publishing Expert",
                    1800,
                  ]}
                  speed={45}
                  repeat={Infinity}
                />
              </div>

              <p className="mt-6 max-w-2xl text-base leading-8 opacity-80 sm:text-lg">
                I build high-quality cross-platform apps for iOS and Android —
                plus modern web experiences — with a focus on performance,
                clean architecture, and App Store / Play Store success.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["React Native", "React.js", "TypeScript", "ASO", "Expo"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-base-300/60 bg-base-200/50 px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="btn btn-primary"
                >
                  View Projects
                </Link>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="btn btn-outline border-base-300/70"
                >
                  Hire Me
                </Link>
                <a
                  href={`${process.env.PUBLIC_URL}/Updated-My-CV.pdf`}
                  download="Salman KHAN CV.pdf"
                  className="btn btn-ghost"
                >
                  Download CV
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 sm:gap-4">
                {[
                  { value: "7+", label: "Years Experience" },
                  { value: "30+", label: "Apps Delivered" },
                  { value: "Top Rated", label: "On Fiverr" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-base-300/60 bg-base-200/40 px-3 py-4 text-center backdrop-blur-xl sm:px-4"
                  >
                    <div className="text-xl font-bold sm:text-2xl">{stat.value}</div>
                    <div className="mt-1 text-[11px] opacity-75 sm:text-xs">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 blur-2xl" />
                <div className="relative rounded-[2.25rem] border border-base-300/60 bg-base-200/40 p-6 shadow-2xl shadow-primary/10 backdrop-blur-xl">
                  <div className="flex justify-center">
                    <img
                      src={pfp}
                      alt="Salman Khan"
                      className="h-64 w-64 rounded-full object-cover ring-2 ring-primary/30 shadow-2xl sm:h-72 sm:w-72"
                    />
                  </div>

                  <div className="mt-6 rounded-2xl border border-base-300/60 bg-base-100/40 px-4 py-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Open to opportunities</span>
                      <span className="badge badge-success badge-outline badge-sm">
                        Online
                      </span>
                    </div>
                    <p className="mt-2 text-sm opacity-75">
                      Mobile apps, web apps, ASO & store publishing.
                    </p>
                  </div>

                  <div className="mt-5 flex justify-center">
                    <SocialLinks variant="square" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
