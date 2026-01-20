import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Function to collect form data
  const handleSubmit = (event) => {
    event.preventDefault();

    const firstName = event.target["first-name"].value;
    const lastName = event.target["last-name"].value;
    const email = event.target["email"].value;
    const message = event.target["message"].value;

    const subject = "Contact Form Submission";
    const body = `Full Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`;

    const mailtoLink = `mailto:salmankn033@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    const opened = window.open(mailtoLink, "_blank");
    if (!opened) {
      window.location.href = mailtoLink;
    }
  };

  return (
    <div className="py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl leading-7 opacity-80">Get in touch</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Contact Me
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-2" data-aos="zoom-in">
          <div className="rounded-3xl border border-base-300/60 bg-base-200/60 backdrop-blur-xl p-6 shadow-xl shadow-primary/5">
            <p className="text-xl font-bold">Let’s build something great</p>
            <p className="mt-2 text-sm opacity-80">
              Send a message with your project details. I usually reply within 24 hours.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-base-300/60 bg-base-100/30 p-4">
                <div className="text-xs font-semibold tracking-widest opacity-70">EMAIL</div>
                <a
                  className="mt-1 block font-semibold hover:underline"
                  href="mailto:salmankn033@gmail.com"
                >
                  salmankn033@gmail.com
                </a>
              </div>
              <div className="rounded-2xl border border-base-300/60 bg-base-100/30 p-4">
                <div className="text-xs font-semibold tracking-widest opacity-70">LOCATION</div>
                <div className="mt-1 font-semibold">Pakistan (Remote)</div>
              </div>
              <div className="rounded-2xl border border-base-300/60 bg-base-100/30 p-4">
                <div className="text-xs font-semibold tracking-widest opacity-70">SOCIAL</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    className="btn btn-outline btn-sm border-base-300/70"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/salman-mobileappdev/",
                        "_blank"
                      )
                    }
                    type="button"
                  >
                    LinkedIn
                  </button>
                  <button
                    className="btn btn-outline btn-sm border-base-300/70"
                    onClick={() => window.open("https://github.com/Salmankhan033", "_blank")}
                    type="button"
                  >
                    GitHub
                  </button>
                  <button
                    className="btn btn-outline btn-sm border-base-300/70"
                    onClick={() => window.open("https://www.fiverr.com/pro_salman11", "_blank")}
                    type="button"
                  >
                    Fiverr
                  </button>
                  <button
                    className="btn btn-outline btn-sm border-base-300/70"
                    onClick={() =>
                      window.open(
                        "https://www.upwork.com/freelancers/~0187e699b709695c45?mp_source=share",
                        "_blank"
                      )
                    }
                    type="button"
                  >
                    Upwork
                  </button>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-base-300/60 bg-base-200/60 backdrop-blur-xl p-6 shadow-xl shadow-primary/5"
          >
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    required
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-xl border border-base-300/70 bg-base-100/70 px-3.5 py-2 text-current shadow-sm focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    required
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-xl border border-base-300/70 bg-base-100/70 px-3.5 py-2 text-current shadow-sm focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    required
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-xl border border-base-300/70 bg-base-100/70 px-3.5 py-2 text-current shadow-sm focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    required
                    id="message"
                    rows={5}
                    className="block w-full rounded-xl border border-base-300/70 bg-base-100/70 px-3.5 py-2 text-current shadow-sm focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
