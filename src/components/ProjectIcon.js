import { useState, useEffect } from "react";
import {
  extractAppleAppId,
  fetchAppleIconUrl,
} from "../utils/storeLinks";
import iconManifest from "../projectImages/auto/manifest.json";

const autoIcons = require.context("../projectImages/auto", false, /\.(png|jpe?g)$/);
const cachedIconUrls = {};
autoIcons.keys().forEach((key) => {
  const filename = key.replace("./", "");
  cachedIconUrls[filename] = autoIcons(key);
});

function getCachedIcon(projectName) {
  const manifestPath = iconManifest[projectName];
  if (!manifestPath) return null;
  const filename = manifestPath.split("/").pop();
  return cachedIconUrls[filename] || null;
}

function AppIconPlaceholder({ name }) {
  const initial = (name || "A").charAt(0).toUpperCase();
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20">
      <span className="text-3xl font-black text-primary/80 sm:text-4xl">
        {initial}
      </span>
    </div>
  );
}

export default function ProjectIcon({ project, className = "", size = "card" }) {
  const [remoteUrl, setRemoteUrl] = useState(null);
  const [failed, setFailed] = useState(false);

  const localImage =
    project.imageSrc && project.imageSrc !== "" ? project.imageSrc : null;
  const cachedUrl = getCachedIcon(project.name);

  const sizeClasses =
    size === "featured"
      ? "h-28 w-28 sm:h-32 sm:w-32"
      : "h-16 w-16 sm:w-[4.5rem] sm:h-[4.5rem]";

  useEffect(() => {
    if (localImage || cachedUrl) return;

    let cancelled = false;

    async function loadIcon() {
      const appleId = extractAppleAppId(project.href);
      if (!appleId) return;

      try {
        const url = await fetchAppleIconUrl(appleId);
        if (!cancelled && url) setRemoteUrl(url);
      } catch {
        /* placeholder will show */
      }
    }

    loadIcon();
    return () => {
      cancelled = true;
    };
  }, [project.href, localImage, cachedUrl, project.name]);

  const src = !failed ? localImage || cachedUrl || remoteUrl : null;

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-[22%] border border-base-300/50 bg-base-100 shadow-lg shadow-primary/10 ring-1 ring-white/10 ${sizeClasses} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={`${project.name} icon`}
          className="h-full w-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
      ) : (
        <AppIconPlaceholder name={project.name} />
      )}
    </div>
  );
}
