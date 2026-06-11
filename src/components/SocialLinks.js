const platforms = [
  {
    id: "linkedin",
    name: "LinkedIn",
    label: "Connect professionally",
    href: "https://www.linkedin.com/in/salman-mobileappdev/",
    color: "hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10",
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
      </svg>
    ),
  },
  {
    id: "github",
    name: "GitHub",
    label: "View repositories",
    href: "https://github.com/Salmankhan033",
    color: "hover:border-base-content/30 hover:bg-base-content/5",
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  },
  {
    id: "fiverr",
    name: "Fiverr",
    label: "Top Rated Seller",
    href: "https://www.fiverr.com/pro_salman11",
    color: "hover:border-success/40 hover:bg-success/10",
    icon: (
      <svg viewBox="0 0 19 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z" />
        <circle cx="14.375" cy="1.875" r="1.875" />
      </svg>
    ),
  },
  {
    id: "upwork",
    name: "Upwork",
    label: "Hire on Upwork",
    href: "https://www.upwork.com/freelancers/~0187e699b709695c45?mp_source=share",
    color: "hover:border-[#14A800]/40 hover:bg-[#14A800]/10",
    icon: (
      <svg viewBox="0 0 30 35" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z" />
      </svg>
    ),
  },
];

export default function SocialLinks({ variant = "icons", className = "" }) {
  if (variant === "cards") {
    return (
      <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${className}`}>
        {platforms.map((platform) => (
          <a
            key={platform.id}
            href={platform.href}
            target="_blank"
            rel="noreferrer"
            className={`group flex items-center gap-4 rounded-2xl border border-base-300/60 bg-base-100/40 p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg ${platform.color}`}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-base-300/50 bg-base-200/60">
              {platform.icon}
            </div>
            <div className="min-w-0">
              <p className="font-bold">{platform.name}</p>
              <p className="text-sm opacity-70">{platform.label}</p>
            </div>
            <span className="ml-auto text-lg opacity-40 transition group-hover:translate-x-0.5 group-hover:opacity-100">
              →
            </span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {platforms.map((platform) => (
        <a
          key={platform.id}
          href={platform.href}
          target="_blank"
          rel="noreferrer"
          aria-label={platform.name}
          title={platform.name}
          className={`btn btn-outline border-base-300/70 ${variant === "square" ? "btn-square" : "gap-2"}`}
        >
          {platform.icon}
          {variant === "labeled" && <span>{platform.name}</span>}
        </a>
      ))}
    </div>
  );
}
