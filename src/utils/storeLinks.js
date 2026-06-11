export function extractAppleAppId(url) {
  if (!url || typeof url !== "string" || !url.trim()) return null;
  const match = url.match(/id(\d+)/i);
  return match ? match[1] : null;
}

export function extractAndroidPackageId(url) {
  if (!url || typeof url !== "string" || !url.trim()) return null;
  try {
    return new URL(url).searchParams.get("id");
  } catch {
    return null;
  }
}

export function getProjectPlatforms(project) {
  const hasIos = Boolean(extractAppleAppId(project.href) || project.href?.includes("apps.apple.com"));
  const hasAndroid = Boolean(extractAndroidPackageId(project.android));
  return { hasIos, hasAndroid };
}

export function getPlatformLabel(project) {
  const { hasIos, hasAndroid } = getProjectPlatforms(project);
  if (hasIos && hasAndroid) return "iOS & Android";
  if (hasIos) return "iOS";
  if (hasAndroid) return "Android";
  return "Mobile";
}

export async function fetchAppleIconUrl(appId) {
  const res = await fetch(`https://itunes.apple.com/lookup?id=${appId}`);
  const data = await res.json();
  return (
    data.results?.[0]?.artworkUrl512 ||
    data.results?.[0]?.artworkUrl100 ||
    null
  );
}

export function parseTechStack(used) {
  if (!used || typeof used !== "string") return [];
  return used
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 4);
}
