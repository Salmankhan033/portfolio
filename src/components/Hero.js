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

const navigation = [
  { name: "About Me", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact Me", id: "contact" },
];

export default function Hero() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "premiumDark"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const handleToggle = (e) => {
    e.target.checked ? setTheme("premiumLight") : setTheme("premiumDark");
  };
  return (
    <div>
      <header className="fixed inset-x-0 top-0 z-50 bg-base-100/60 backdrop-blur-xl border-b border-base-300/60">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <p className="-m-1.5 p-1.5 font-semibold tracking-tight">
              Salman Khan
            </p>
          </div>
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
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-sm font-semibold leading-6 cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-current after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
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
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="hidden"
                onChange={handleToggle}
                checked={theme === "premiumLight"}
              />

              <SunIcon className="swap-off fill-current w-6 h-6" />
              <MoonIcon className="swap-on fill-current w-6 h-6" />
            </label>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-2/3 overflow-y-auto bg-base-100/70 backdrop-blur-2xl border-l border-base-300/60 px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <div className="-m-1.5 p-1.5">
                <label className="swap swap-rotate">
                  <input
                    type="checkbox"
                    className="hidden"
                    onChange={handleToggle}
                    checked={theme === "premiumLight"}
                  />
                  <SunIcon className="swap-off fill-current w-6 h-6" />
                  <MoonIcon className="swap-on fill-current w-6 h-6" />
                </label>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.id}
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 btn btn-ghost"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <a
                    href={`${process.env.PUBLIC_URL}/Updated-My-CV.pdf`}
                    download="Salman KHAN CV.pdf"
                    className=" -mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 btn btn-ghost"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <section className="pt-28 pb-16 sm:pt-32" data-aos="zoom-in">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold tracking-widest opacity-80">
                REACT NATIVE • MOBILE APPS • PERFORMANCE
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
                Salman Khan
              </h1>
              <div className="mt-5 text-xl sm:text-2xl">
                <TypeAnimation
                  sequence={[
                    "React Native Developer",
                    2000,
                    "Mobile Application Developer",
                    2000,
                    "Hybrid Mobile Application Developer",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </div>

              <p className="mt-6 max-w-2xl text-base leading-7 opacity-85">
                I build high-quality cross-platform apps for iOS and Android with
                strong focus on performance, clean code, and user experience.
              </p>

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
                <a
                  href={`${process.env.PUBLIC_URL}/Updated-My-CV.pdf`}
                  download="Salman KHAN CV.pdf"
                  className="btn btn-outline border-base-300/70"
                >
                  Download CV
                </a>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="btn btn-ghost"
                >
                  Let’s Talk
                </Link>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                <div className="rounded-2xl border border-base-300/60 bg-base-200/40 backdrop-blur-xl px-4 py-4">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-xs opacity-75">Years Experience</div>
                </div>
                <div className="rounded-2xl border border-base-300/60 bg-base-200/40 backdrop-blur-xl px-4 py-4">
                  <div className="text-2xl font-bold">30+</div>
                  <div className="text-xs opacity-75">Apps Delivered</div>
                </div>
                <div className="rounded-2xl border border-base-300/60 bg-base-200/40 backdrop-blur-xl px-4 py-4">
                  <div className="text-2xl font-bold">Top Rated</div>
                  <div className="text-xs opacity-75">Freelance</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/20 blur-2xl" />
                <div className="relative rounded-[2.25rem] border border-base-300/60 bg-base-200/40 backdrop-blur-xl p-6 shadow-2xl shadow-primary/10">
                  <div className="flex items-center justify-center">
                    <img
                      src={pfp}
                      alt="Salman Khan"
                      className="w-72 rounded-full ring-1 ring-base-300/70 shadow-2xl shadow-primary/20"
                    />
                  </div>

                  <div className="mt-6 rounded-2xl border border-base-300/60 bg-base-100/40 px-4 py-4">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">Available for work</div>
                      <div className="badge badge-success badge-outline">Online</div>
                    </div>
                    <div className="mt-1 text-sm opacity-80">
                      Open to remote roles and freelance projects.
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <button
                        className="btn btn-outline btn-sm border-base-300/70"
                        onClick={() =>
                          window.open(
                            "https://www.linkedin.com/in/salman-mobileappdev/",
                            "_blank"
                          )
                        }
                      >
                        LinkedIn
                      </button>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => window.open("mailto:salmankn033@gmail.com", "_blank")}
                      >
                        Email Me
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <button
                      className="btn btn-outline btn-square border-base-300/70"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/salman-mobileappdev/",
                          "_blank"
                        )
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="h-6 w-6"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </button>
                    <button
                      className="btn btn-outline btn-square border-base-300/70"
                      onClick={() =>
                        window.open("https://github.com/Salmankhan033", "_blank")
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        window.open("https://www.fiverr.com/pro_salman11", "_blank")
                      }
                      className="btn btn-outline btn-square border-base-300/70"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 19 24"
                      >
                        <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z" />
                        <circle cx="14.375" cy="1.875" r="1.875" />
                      </svg>
                    </button>
                    <button
                      className="btn btn-outline btn-square border-base-300/70"
                      onClick={() =>
                        window.open(
                          "https://www.upwork.com/freelancers/~0187e699b709695c45?mp_source=share",
                          "_blank"
                        )
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                        viewBox="0 -3 30 35"
                      >
                        <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z" />
                      </svg>
                    </button>
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
