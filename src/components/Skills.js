import { useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";

const frontend = [
  {
    name: "React Native",
    value: 90,
    icon: CheckCircleIcon,
  },
  {
    name: "JavaScript",
    value: 70,
    icon: CheckCircleIcon,
  },
  {
    name: "TypeScript",
    value: 75,
    icon: CheckCircleIcon,
  },
  {
    name: "React Hooks",
    value: 75,
    icon: CheckCircleIcon,
  },
  {
    name: "React Router",
    value: 65,
    icon: CheckCircleIcon,
  },
  {
    name: "React Redux",
    value: 85,
    icon: CheckCircleIcon,
  },
  {
    name: "Firebase",
    value: 70,
    icon: CheckCircleIcon,
  },
  {
    name: "Tailwind CSS",
    value: 65,
    icon: CheckCircleIcon,
  },
  {
    name: "Gesture Handler",
    value: 75,
    icon: CheckCircleIcon,
  },
  {
    name: "React Native Reanimated",
    value: 65,
    icon: CheckCircleIcon,
  },
  {
    name: "Testing & Debugging",
    value: 85,
    icon: CheckCircleIcon,
  },
  {
    name: "Lottie Animation",
    value: 95,
    icon: CheckCircleIcon,
  },
];
const Others = [
  {
    name: "Responsive Design",
    value: 100,
    icon: CheckCircleIcon,
  },
  {
    name: "GitHub",
    value: 95,
    icon: CheckCircleIcon,
  },
  {
    name: "BitBucket",
    value: 70,
    icon: CheckCircleIcon,
  },
  {
    name: "API Integration",
    value: 95,
    icon: CheckCircleIcon,
  },
  {
    name: "React hooks",
    value: 100,
    icon: CheckCircleIcon,
  },
  {
    name: "Push Notifications",
    value: 80,
    icon: CheckCircleIcon,
  },
  {
    name: "Google Map Api",
    value: 90,
    icon: CheckCircleIcon,
  },
  {
    name: "Payment Integration",
    value: 95,
    icon: CheckCircleIcon,
  },
  {
    name: "Third Party Libraries",
    value: 90,
    icon: CheckCircleIcon,
  },
  {
    name: "Google Play console management",
    value: 95,
    icon: CheckCircleIcon,
  },
  {
    name: "UI/UX Implementation",
    value: 95,
    icon: CheckCircleIcon,
  },
  {
    name: "REST APIs",
    value: 85,
    icon: CheckCircleIcon,
  },
  {
    name: "Version Control",
    value: 85,
    icon: CheckCircleIcon,
  },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const mobileStack = frontend
    .map((s) => s.name)
    .filter((name) =>
      [
        "React Native",
        "React Native Reanimated",
        "Gesture Handler",
        "Lottie Animation",
        "Firebase",
      ].includes(name)
    );

  const coreStack = frontend
    .map((s) => s.name)
    .filter((name) =>
      [
        "JavaScript",
        "TypeScript",
        "React Hooks",
        "React Redux",
        "React Router",
      ].includes(name)
    );

  const tooling = Others.map((s) => s.name).filter((name) =>
    [
      "GitHub",
      "BitBucket",
      "Version Control",
      "Testing & Debugging",
      "Third Party Libraries",
    ].includes(name)
  );

  const product = Others.map((s) => s.name).filter((name) =>
    [
      "API Integration",
      "REST APIs",
      "Push Notifications",
      "Payment Integration",
      "Google Map Api",
      "UI/UX Implementation",
      "Responsive Design",
      "Google Play console management",
    ].includes(name)
  );

  return (
    <div className="py-24 sm:py-32" id="skills">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl leading-7 opacity-80">Explore my</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Skills
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div
            className="rounded-3xl border border-base-300/60 bg-base-200/60 backdrop-blur-xl p-6 shadow-xl shadow-primary/5"
            data-aos="zoom-in"
          >
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Mobile Stack</p>
              <span className="badge badge-primary badge-outline">React Native</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {mobileStack.map((name) => (
                <span
                  key={name}
                  className="badge badge-outline border-base-300/70 px-4 py-3"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div
            className="rounded-3xl border border-base-300/60 bg-base-200/60 backdrop-blur-xl p-6 shadow-xl shadow-primary/5"
            data-aos="zoom-in"
          >
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Core Frontend</p>
              <span className="badge badge-secondary badge-outline">JS/TS</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {coreStack.map((name) => (
                <span
                  key={name}
                  className="badge badge-outline border-base-300/70 px-4 py-3"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div
            className="rounded-3xl border border-base-300/60 bg-base-200/60 backdrop-blur-xl p-6 shadow-xl shadow-primary/5"
            data-aos="zoom-in"
          >
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Product & Integrations</p>
              <span className="badge badge-accent badge-outline">Delivery</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {product.map((name) => (
                <span
                  key={name}
                  className="badge badge-outline border-base-300/70 px-4 py-3"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div
            className="rounded-3xl border border-base-300/60 bg-base-200/60 backdrop-blur-xl p-6 shadow-xl shadow-primary/5"
            data-aos="zoom-in"
          >
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Tooling</p>
              <span className="badge badge-outline">Workflow</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {tooling.map((name) => (
                <span
                  key={name}
                  className="badge badge-outline border-base-300/70 px-4 py-3"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
