import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import SocialLinks from "./SocialLinks";

const pfp = `${process.env.PUBLIC_URL}/profile.jpg`;
const logo = `${process.env.PUBLIC_URL}/logo192.png`;

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

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "premiumLight" : "premiumDark");
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-base-300/60 bg-base-100/70 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 px-6 py-4 lg:px-8"
          aria-label="Global"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="-m-1.5 flex cursor-pointer items-center gap-3 p-1.5 font-heading text-lg font-bold tracking-tight"
          >
            <img
              src={logo}
              alt=""
              className="h-9 w-9 rounded-full object-cover ring-2 ring-primary/40"
            />
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
              href={`${process.env.PUBLIC_URL}/salman_rn.pdf`}
              download="salman_rn.pdf"
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
                href={`${process.env.PUBLIC_URL}/salman_rn.pdf`}
                download="salman_rn.pdf"
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

              <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
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
                  href={`${process.env.PUBLIC_URL}/salman_rn.pdf`}
                  download="salman_rn.pdf"
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
                    <div className="font-heading text-xl font-bold sm:text-2xl">{stat.value}</div>
                    <div className="mt-1 text-[11px] opacity-75 sm:text-xs">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/25 via-secondary/15 to-accent/15 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-base-300/60 bg-base-200/40 shadow-2xl shadow-primary/10 backdrop-blur-xl">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={pfp}
                      alt="Salman Khan — React Native & Mobile App Developer"
                      className="h-full w-full object-cover object-top"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-100/90 via-transparent to-transparent" />
                  </div>

                  <div className="relative -mt-8 rounded-t-[1.75rem] bg-base-200/70 px-5 pb-5 pt-5 backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-sm font-semibold">
                        Open to opportunities
                      </span>
                      <span className="badge badge-success badge-outline badge-sm gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-success" />
                        Online
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm opacity-75">
                      Mobile apps, web apps, ASO & store publishing.
                    </p>
                    <div className="mt-4">
                      <SocialLinks variant="square" />
                    </div>
                  </div>
                </div>

                <div className="absolute -left-5 top-8 hidden rounded-2xl border border-base-300/60 bg-base-100/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
                  <p className="font-heading text-xl font-extrabold text-primary">7+</p>
                  <p className="text-[11px] font-medium opacity-70">Years Experience</p>
                </div>

                <div className="absolute -right-5 top-1/3 hidden rounded-2xl border border-base-300/60 bg-base-100/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
                  <p className="font-heading text-xl font-extrabold text-secondary">30+</p>
                  <p className="text-[11px] font-medium opacity-70">Apps Shipped</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
