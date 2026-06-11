function AppleIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.48-.12-1.06.464-2.21 1.065-2.93.72-.85 1.97-1.48 3.1-1.63zM20.88 17.17c-.436 1.01-1.014 1.94-1.735 2.79-.91 1.07-1.96 2.27-3.37 2.29-1.28.02-1.69-.76-3.16-.76-1.47 0-1.93.74-3.14.78-1.99.08-3.51-2.01-4.42-3.07-2.4-2.92-4.24-8.27-1.77-11.87 1.22-1.76 3.39-2.87 5.74-2.9 1.29-.03 2.51.87 3.16.87.65 0 2.22-1.07 3.74-.91.64.03 2.44.26 3.59 1.98-3.14 1.91-2.63 6.15.52 7.4z" />
    </svg>
  );
}

function PlayIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3.6 2.4A1.2 1.2 0 0 0 2.4 3.6v16.8a1.2 1.2 0 0 0 1.8 1.04l14.4-8.4a1.2 1.2 0 0 0 0-2.08L3.6 2.4z" />
    </svg>
  );
}

function StoreButton({ href, variant, compact = false }) {
  const isApple = variant === "apple";
  const label = isApple ? "App Store" : "Google Play";
  const sublabel = isApple ? "Download on the" : "Get it on";

  if (compact) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition hover:scale-[1.02] ${
          isApple
            ? "bg-neutral text-neutral-content hover:bg-neutral/90"
            : "bg-success/15 text-success hover:bg-success/25"
        }`}
        aria-label={`${label} – open in new tab`}
      >
        {isApple ? <AppleIcon className="w-3.5 h-3.5" /> : <PlayIcon className="w-3.5 h-3.5" />}
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-w-[9.5rem] items-center gap-2.5 rounded-xl px-4 py-2.5 text-left transition hover:scale-[1.02] hover:shadow-lg ${
        isApple
          ? "bg-neutral text-neutral-content hover:bg-neutral/90"
          : "border border-success/30 bg-success/10 text-base-content hover:bg-success/20"
      }`}
      aria-label={`${label} – open in new tab`}
    >
      {isApple ? <AppleIcon /> : <PlayIcon className="text-success" />}
      <span className="leading-tight">
        <span className="block text-[10px] font-medium uppercase tracking-wide opacity-70">
          {sublabel}
        </span>
        <span className="block text-sm font-bold">{label}</span>
      </span>
    </a>
  );
}

export default function StoreButtons({ project, compact = false }) {
  const iosUrl = project.href?.trim();
  const androidUrl = project.android?.trim();
  const hasIos = Boolean(iosUrl);
  const hasAndroid = Boolean(androidUrl);

  if (!hasIos && !hasAndroid) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${compact ? "" : "gap-3"}`}>
      {hasIos && <StoreButton href={iosUrl} variant="apple" compact={compact} />}
      {hasAndroid && (
        <StoreButton href={androidUrl} variant="android" compact={compact} />
      )}
    </div>
  );
}

export function PlatformBadges({ project }) {
  const iosUrl = project.href?.trim();
  const androidUrl = project.android?.trim();
  const hasIos = Boolean(iosUrl);
  const hasAndroid = Boolean(androidUrl);

  if (!hasIos && !hasAndroid) return null;

  return (
    <div className="flex flex-wrap gap-1.5">
      {hasIos && (
        <span className="badge badge-sm border-0 bg-neutral/90 text-neutral-content font-medium">
          iOS
        </span>
      )}
      {hasAndroid && (
        <span className="badge badge-sm border-0 bg-success/20 text-success font-medium">
          Android
        </span>
      )}
      {true && (
        <span className="badge badge-sm badge-primary badge-outline font-medium">
          Cross-platform
        </span>
      )}
    </div>
  );
}
