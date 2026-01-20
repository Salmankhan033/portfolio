import { useEffect } from "react";
import {
  MapPinIcon,
  AtSymbolIcon,
  CalendarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import MainImage from "../projectImages/main-image.png";

const features = [
  {
    name: "Age:",
    description: "25 years old",
    icon: CalendarIcon,
  },
  {
    name: "Email:",
    description: " salmankn033@gmail.com",
    icon: AtSymbolIcon,
  },
  {
    name: "Location:",
    description: "Islamabad, Pakistan",
    icon: MapPinIcon,
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      <div className="mx-auto max-w-7xl px-0 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h2 className="text-lg leading-7 opacity-80">Get to know more</h2>
                <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
                  About Me
                </p>
                <p className="mt-6 text-lg leading-8" data-aos="fade-right">
                  I am a Computer Science graduate with a passion for mobile app
                  development using React Native. I am eager to immerse myself in
                  a dynamic and challenging work environment that fosters
                  continual improvement and learning. I am driven to contribute my
                  skills and dedication to propel both my personal growth and the
                  advancement of the company within the ever-evolving software
                  engineering industry.
                </p>
              </div>
            </div>
          </div>
          <div
            className="-ml-12 -mt-12 p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
            data-aos="fade-left"
          >
            <img
              className="w-[38rem] max-w-none rounded-3xl border border-base-300/60 shadow-2xl shadow-primary/10 sm:w-[57rem]"
              src={MainImage}
              alt="Person"
            />
          </div>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
            <div className="text-base leading-7">
              <div className="grid gap-x-6 sm:grid-cols-2">
                <div
                  className="mt-10 rounded-3xl border border-base-300/60 bg-base-200/60 backdrop-blur-xl p-6 shadow-xl shadow-primary/5"
                  data-aos="zoom-in"
                >
                  <BriefcaseIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
                  <h2 className=" text-2xl text-center font-bold tracking-tight">
                    Experience
                  </h2>
                  <p className="mt-3 list-item list-inside">
                    Mobile App Developer Fabulor,Kasterlee Antwerp,Belgium
                    (Current)
                  </p>
                  <p className="mt-3 list-item list-inside">
                    React Native Developer RGWIT,Belgium. (Current)
                  </p>
                  <p className="mt-3 list-item list-inside">
                    Mobile App Technical Team Lead Codistan
                    Ventures,Islamabad.Pakistan.
                  </p>
                  <p className="mt-3 list-item list-inside">
                    React Native Developer Smart Soft Studio ,Lahore,Pakistan.
                  </p>
                  <p className="mt-3 list-item list-inside">
                    React Native Fellows TECH NIH,ISLAMABAD,Pakistan.
                  </p>
                  <p className="mt-3 list-item list-inside">
                    React Native WeAreNova, ISLAMABAD,Pakistan.
                  </p>
                  <p className="mt-3 list-item list-inside">
                    Android Developer ZealSoul Technology limited, Bannu,
                    Pakistan.
                  </p>
                </div>
                <div
                  className="mt-10 rounded-3xl border border-base-300/60 bg-base-200/60 backdrop-blur-xl p-6 shadow-xl shadow-primary/5"
                  data-aos="zoom-in"
                >
                  <AcademicCapIcon
                    className="h-5 w-5 mx-auto"
                    aria-hidden="true"
                  />
                  <h2 className=" text-2xl text-center font-bold tracking-tigh">
                    Education
                  </h2>
                  <p className="mt-3 list-item list-inside">
                    BS Computer Science, University of Science & Technology Bannu,
                    KPK
                  </p>
                  <p className="mt-3 list-item list-inside">
                    Diploma in Information Technology
                  </p>
                  {/* <p className="mt-3 list-item list-inside">
                  Cisco IT Essentials
                </p> */}
                </div>
              </div>
              <dl
                className="mt-10 space-y-8 text-base leading-7 lg:max-w-none"
                data-aos="fade-right"
              >
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
