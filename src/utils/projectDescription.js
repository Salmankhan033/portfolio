import storeDescriptions from "../data/storeDescriptions.json";

const FALLBACK =
  "A polished mobile experience built with modern tooling and store-ready delivery.";

function cleanText(text) {
  if (!text) return "";
  return text.replace(/\s+/g, " ").trim();
}

function optimizeLocalDescription(raw, maxLen = 130) {
  const text = cleanText(raw);
  if (!text) return "";

  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
  const first =
    sentences.map((s) => s.trim()).find((s) => s.length > 20) || text;

  if (first.length <= maxLen) return first;
  return first.slice(0, maxLen - 1).replace(/\s+\S*$/, "") + "…";
}

function isStrongDescription(text) {
  if (!text) return false;
  const cleaned = cleanText(text);
  if (cleaned.length < 45) return false;

  const latinLetters = (cleaned.match(/[A-Za-z]/g) || []).length;
  return latinLetters / cleaned.length >= 0.55;
}

export function getProjectDescription(project, variant = "short") {
  const maxLen = variant === "featured" ? 200 : 130;
  const storeEntry = storeDescriptions[project.name];
  const storeText = storeEntry?.[variant] || storeEntry?.short;
  const manual = optimizeLocalDescription(project.description, maxLen);

  if (isStrongDescription(storeText)) return storeText;
  if (isStrongDescription(manual)) return manual;
  if (storeText) return storeText;
  if (manual) return manual;

  return FALLBACK;
}
