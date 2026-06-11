import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_FILE = path.join(__dirname, "../src/data/storeDescriptions.json");

function extractAppleAppId(url) {
  if (!url) return null;
  const match = String(url).match(/id(\d+)/i);
  return match ? match[1] : null;
}

function extractAndroidPackageId(url) {
  if (!url) return null;
  try {
    return new URL(url).searchParams.get("id");
  } catch {
    return null;
  }
}

function cleanText(text) {
  if (!text) return "";
  return text
    .replace(/<[^>]+>/g, " ")
    .replace(/\\u0026/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

const PROMO_PATTERN =
  /^(try |download |get |start your free|free for \d|featured by|new look with)/i;

function splitSentences(text) {
  return (text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text])
    .map((s) => s.trim())
    .filter((s) => s.length > 18);
}

function optimizeDescription(raw, maxLen = 130) {
  const text = cleanText(raw);
  if (!text) return "";

  const sentences = splitSentences(text);
  const valueSentences = sentences.filter((s) => !PROMO_PATTERN.test(s));
  const pool = valueSentences.length ? valueSentences : sentences;

  let chosen = pool.find((s) => s.length >= 50 && s.length <= maxLen);
  if (!chosen) {
    chosen = pool.find((s) => s.length >= 40) || pool[0] || text;
  }

  if (chosen.length > maxLen) {
    let combined = "";
    for (const sentence of pool) {
      const next = combined ? `${combined} ${sentence}` : sentence;
      if (next.length <= maxLen) combined = next;
      else break;
    }
    chosen = combined || chosen;
  }

  if (chosen.length > maxLen) {
    chosen = chosen.slice(0, maxLen - 1).replace(/\s+\S*$/, "") + "…";
  }

  return chosen;
}

async function fetchAppleMeta(appId) {
  for (const country of ["us", "gb", "pk"]) {
    const res = await fetch(
      `https://itunes.apple.com/lookup?id=${appId}&country=${country}`
    );
    const data = await res.json();
    const app = data.results?.[0];
    if (!app?.description) continue;

    const description = cleanText(app.description);
    if (/[a-z]{3,}/i.test(description)) {
      return {
        subtitle: cleanText(app.subtitle),
        description,
        tagline: cleanText(app.trackName),
      };
    }
  }
  return null;
}

async function fetchAndroidMeta(packageId) {
  const url = `https://play.google.com/store/apps/details?id=${packageId}&hl=en`;
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      "Accept-Language": "en-US,en;q=0.9",
    },
  });
  const html = await res.text();

  const ogMatch = html.match(
    /<meta[^>]+property="og:description"[^>]+content="([^"]+)"/i
  );
  const ogDesc = ogMatch ? cleanText(ogMatch[1]) : "";

  const jsonMatch = html.match(/"description":"((?:\\.|[^"\\])*)"/);
  let fullDesc = "";
  if (jsonMatch) {
    fullDesc = cleanText(
      jsonMatch[1].replace(/\\n/g, " ").replace(/\\"/g, '"')
    );
  }

  return {
    subtitle: ogDesc,
    description: fullDesc || ogDesc,
  };
}

function pickBestDescription(meta) {
  if (!meta) return "";

  const sentences = splitSentences(meta.description || "");
  const valueSentences = sentences.filter((s) => !PROMO_PATTERN.test(s));

  const bestSentence =
    valueSentences.find((s) => s.length >= 45) ||
    sentences.find((s) => s.length >= 45) ||
    valueSentences[0] ||
    sentences[0];

  if (bestSentence) return bestSentence;
  if (meta.subtitle && meta.subtitle.length >= 30) return meta.subtitle;
  return meta.description || meta.subtitle || "";
}

const projects = [
  { name: "Cobone Deals & Special Offers", href: "https://apps.apple.com/us/app/cobone-deals-coupons/id1114440341", android: "https://play.google.com/store/apps/details?id=com.cobone.coboneapp" },
  { name: "Restaurants & Local Food bozt", href: "https://apps.apple.com/pk/app/restaurants-local-food-bozt/id1500087580" },
  { name: "STNDRD Workout & Fitness Plans", href: "https://apps.apple.com/om/app/stndrd-workout-fitness-plans/id1573298047", android: "https://play.google.com/store/apps/details?id=uni.cbum" },
  { name: "OrderLemon ( Available only in Belgium & Netherland)", href: "https://apps.apple.com/us/app/orderlemon/id6451381557", android: "https://play.google.com/store/apps/details?id=com.orderlemon" },
  { name: "vocn Veterinary TeleSpecialty", href: "https://apps.apple.com/pk/app/vocn/id1628430389", android: "https://play.google.com/store/apps/details?id=chat.vocn.org" },
  { name: "Parko", href: "https://apps.apple.com/pk/app/parko-al/id6740145359", android: "https://play.google.com/store/apps/details?id=com.parko.albania" },
  { name: "Readi Pacific", href: "https://apps.apple.com/pk/app/readi-pacific/id6740719509", android: "https://play.google.com/store/apps/details?id=com.readi.pacific" },
  { name: "My Drink Order", href: "https://apps.apple.com/pk/app/my-drink-order/id6443959789", android: "https://play.google.com/store/apps/details?id=com.hey_bartender" },
  { name: "Cobone Partner", href: "https://apps.apple.com/us/app/cobone-partner/id1115537561", android: "https://play.google.com/store/apps/details?id=com.cobone.merchantapp" },
  { name: "Advantage GCC", href: "https://apps.apple.com/us/app/advantage-gcc/id6752327813", android: "https://play.google.com/store/apps/details?id=com.advantagegcc.app" },
  { name: "CatPricePro", href: "https://apps.apple.com/pk/app/catpricepro/id6759843236", android: "https://play.google.com/store/apps/details?id=com.fedebenalua.catpricepro" },
  { name: "Boda - Yomecaso", href: "https://apps.apple.com/pk/app/boda-yomecaso/id6756235262", android: "https://play.google.com/store/apps/details?id=com.weddingplanner.boda.yomecaso" },
  { name: "Praynet", android: "https://play.google.com/store/apps/details?id=com.praynet.prayer" },
  { name: "Ritmo 101.9", href: "https://apps.apple.com/pk/app/ritmo-101-9/id6469441719" },
  { name: "Tradeando", href: "https://apps.apple.com/us/app/tradeando/id6755815321" },
  { name: "Mostagbalik", android: "https://play.google.com/store/apps/details?id=com.mostagbalik" },
  { name: "QR Scanner Generate", href: "https://apps.apple.com/pk/app/qr-scanner-generate/id6753979837" },
  { name: "MMPSites", href: "https://apps.apple.com/pk/app/mmpsites/id6447799556" },
  { name: "LocalList Live", href: "https://apps.apple.com/pk/app/locallist-live/id6760908956" },
  { name: "Socar Tracking", href: "https://apps.apple.com/pk/app/socar-tracking/id1141679676", android: "https://play.google.com/store/apps/details?id=com.socar3.be" },
  { name: "All Video Downloader & Player", android: "https://play.google.com/store/apps/details?id=com.videodownloader.videoplayer.scnsoft.videoder.tubex.statussaver.vidmate" },
  { name: "Universal Calculator", android: "https://play.google.com/store/apps/details?id=calculator.scientificcalculator.uniteconverter.statistics.maths.healthfitness" },
  { name: "Text Capture , Image to Text", android: "https://play.google.com/store/apps/details?id=com.photoscaner.imagetotextocr" },
  { name: "Ramadan 2026 – Prayer & Zikr", android: "https://play.google.com/store/apps/details?id=salman.khan.islamiczikar" },
  { name: "ABC 123 Kids: Learn & Play", android: "https://play.google.com/store/apps/details?id=com.kidseduacationalapp" },
  { name: "Daily Planner: To-Do List", android: "https://play.google.com/store/apps/details?id=com.todo.reminder.task.dailyplanner" },
];

const manifest = {};

for (const project of projects) {
  const appleId = extractAppleAppId(project.href);
  const packageId = extractAndroidPackageId(project.android);
  let raw = "";
  let source = null;

  if (appleId) {
    try {
      const meta = await fetchAppleMeta(appleId);
      raw = pickBestDescription(meta);
      if (raw) source = "apple";
    } catch (e) {
      console.warn(`Apple desc failed for ${project.name}:`, e.message);
    }
  }

  if (!raw && packageId) {
    try {
      const meta = await fetchAndroidMeta(packageId);
      raw = pickBestDescription(meta);
      if (raw) source = "android";
    } catch (e) {
      console.warn(`Android desc failed for ${project.name}:`, e.message);
    }
  }

  if (raw) {
    manifest[project.name] = {
      short: optimizeDescription(raw, 130),
      featured: optimizeDescription(raw, 200),
      source,
    };
    console.log(`✓ ${project.name} (${source})`);
    console.log(`  → ${manifest[project.name].short}`);
  } else {
    console.warn(`✗ No description for ${project.name}`);
  }

  await new Promise((r) => setTimeout(r, 350));
}

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(manifest, null, 2));
console.log(`\nSaved ${Object.keys(manifest).length} descriptions`);
