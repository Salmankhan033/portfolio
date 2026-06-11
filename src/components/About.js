import { useEffect } from "react";
import {
  MapPinIcon,
  CalendarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import MainImage from "../projectImages/main-image.png";

const features = [
  { name: "Age", description: "25 years old", icon: CalendarIcon },
  { name: "Location", description: "Islamabad, Pakistan (Remote)", icon: MapPinIcon },
];

const experience = [
  { role: "Mobile App Developer", company: "Fabulor", location: "Kasterlee, Belgium", current: true },
  { role: "React Native Developer", company: "RGWIT", location: "Belgium", current: true },
  { role: "Mobile App Technical Team Lead", company: "Codistan Ventures", location: "Islamabad, Pakistan" },
  { role: "React Native Developer", company: "Smart Soft Studio", location: "Lahore, Pakistan" },
  { role: "React Native Developer", company: "Fellows TECH NIH", location: "Islamabad, Pakistan" },
  { role: "React Native Developer", company: "WeAreNova", location: "Islamabad, Pakistan" },
  { role: "Android Developer", company: "ZealSoul Technology", location: "Bannu, Pakistan" },
];

const education = [
  "BS Computer Science — University of Science & Technology Bannu, KPK",
  "Diploma in Information Technology",
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="relative px-6 py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-aos="fade-right">
            <h2 className="text-lg leading-7 opacity-80">Get to know more</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              About Me
            </p>
            <p className="mt-6 text-lg leading-8 opacity-85">
              Computer Science graduate and React Native specialist with 7+ years
              building production mobile apps for clients across Belgium, the US,
              GCC, and Pakistan. I deliver clean code, polished UI, and full
              store publishing — from MVP to live App Store & Play Store release.
            </p>

            <dl className="mt-8 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex items-center gap-3 rounded-xl border border-base-300/50 bg-base-200/40 px-4 py-3"
                >
                  <feature.icon className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider opacity-60">
                      {feature.name}
                    </dt>
                    <dd className="font-medium">{feature.description}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/10 blur-2xl" />
            <img
              className="relative w-full max-w-lg rounded-3xl border border-base-300/60 object-cover shadow-2xl shadow-primary/10 lg:ml-auto"
              src={MainImage}
              alt="Salman Khan at work"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div
            className="rounded-3xl border border-base-300/60 bg-base-200/60 p-6 shadow-xl shadow-primary/5 backdrop-blur-xl sm:p-8"
            data-aos="zoom-in"
          >
            <div className="flex items-center gap-3">
              <BriefcaseIcon className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {experience.map((job) => (
                <li
                  key={`${job.company}-${job.role}`}
                  className="relative border-l-2 border-primary/30 pl-4"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold">{job.role}</p>
                    {job.current && (
                      <span className="badge badge-primary badge-outline badge-sm">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm opacity-80">
                    {job.company} · {job.location}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-3xl border border-base-300/60 bg-base-200/60 p-6 shadow-xl shadow-primary/5 backdrop-blur-xl sm:p-8"
            data-aos="zoom-in"
          >
            <div className="flex items-center gap-3">
              <AcademicCapIcon className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {education.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-base-300/50 bg-base-100/30 px-4 py-3 text-sm leading-6"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
