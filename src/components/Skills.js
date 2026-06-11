import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skillGroups = [
  {
    title: "React Native & Mobile",
    badge: "Mobile",
    badgeClass: "badge-primary badge-outline",
    skills: [
      "React Native",
      "Expo & EAS Build",
      "TypeScript",
      "React Navigation",
      "Redux Toolkit",
      "React Query",
      "Reanimated 3",
      "Gesture Handler",
      "Native Modules",
      "Push Notifications (FCM/APNs)",
      "Deep Linking",
      "Offline-First Apps",
      "Performance Optimization",
      "Lottie Animations",
    ],
  },
  {
    title: "Web & Frontend",
    badge: "Web",
    badgeClass: "badge-secondary badge-outline",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Responsive UI",
      "REST API Integration",
      "GraphQL Basics",
      "State Management",
      "Component Architecture",
      "Progressive Web Apps",
    ],
  },
  {
    title: "ASO & App Publishing",
    badge: "ASO",
    badgeClass: "badge-accent badge-outline",
    skills: [
      "App Store Optimization (ASO)",
      "Keyword Research & Ranking",
      "App Title & Subtitle Optimization",
      "Store Listing Copywriting",
      "Screenshot & Preview Strategy",
      "App Store Connect",
      "Google Play Console",
      "TestFlight & Beta Testing",
      "App Review Guidelines",
      "Localization for Stores",
      "Conversion Rate Optimization",
      "Competitor ASO Analysis",
    ],
  },
  {
    title: "Integrations & Backend",
    badge: "APIs",
    badgeClass: "badge-outline",
    skills: [
      "Firebase (Auth, Firestore, Cloud)",
      "Social Login (Google, Apple, Facebook)",
      "Stripe & In-App Payments",
      "Google Maps & Location APIs",
      "Socket.io / Real-time Chat",
      "Webhooks & Third-Party SDKs",
      "OAuth 2.0",
      "Cloudinary / Media Upload",
    ],
  },
  {
    title: "Tools & DevOps",
    badge: "Workflow",
    badgeClass: "badge-outline",
    skills: [
      "Git & GitHub",
      "Bitbucket",
      "CI/CD (GitHub Actions)",
      "Fastlane",
      "Jest & React Native Testing",
      "Debugging & Crashlytics",
      "Sentry Error Tracking",
      "Postman & API Testing",
      "Agile / Scrum",
      "Code Review & Documentation",
    ],
  },
  {
    title: "Product & Delivery",
    badge: "Delivery",
    badgeClass: "badge-outline",
    skills: [
      "UI/UX Implementation",
      "Figma to React Native",
      "MVP Development",
      "App Store Submission",
      "Play Store Release",
      "Cross-Platform Delivery",
      "Client Communication",
      "Bug-Free Releases",
    ],
  },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="py-24 sm:py-32" id="skills">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl leading-7 opacity-80">Explore my</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Skills
          </p>
          <p className="mt-4 text-sm leading-7 opacity-70 sm:text-base">
            React Native, web development, ASO, and end-to-end mobile app delivery
            from build to store launch.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-base-300/60 bg-base-200/60 backdrop-blur-xl p-6 shadow-xl shadow-primary/5"
              data-aos="zoom-in"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xl font-bold">{group.title}</p>
                <span className={`badge shrink-0 ${group.badgeClass}`}>
                  {group.badge}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((name) => (
                  <span
                    key={name}
                    className="badge badge-outline border-base-300/70 px-3 py-3 text-xs font-medium sm:text-sm"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
