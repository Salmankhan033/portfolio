import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "../src/projectImages/auto");

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

function extractAppleAppId(url) {
  if (!url) return null;
  const match = String(url).match(/id(\d+)/i);
  return match ? match[1] : null;
}

function extractAndroidPackageId(url) {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    return parsed.searchParams.get("id");
  } catch {
    return null;
  }
}

async function fetchAppleIcon(appId) {
  const res = await fetch(`https://itunes.apple.com/lookup?id=${appId}`);
  const data = await res.json();
  const artwork =
    data.results?.[0]?.artworkUrl512 || data.results?.[0]?.artworkUrl100;
  return artwork || null;
}

async function fetchAndroidIcon(packageId) {
  const url = `https://play.google.com/store/apps/details?id=${packageId}`;
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    },
  });
  const html = await res.text();
  const match = html.match(
    /https:\/\/play-lh\.googleusercontent\.com\/[a-zA-Z0-9_-]+/
  );
  return match ? match[0] : null;
}

async function downloadImage(imageUrl, destPath) {
  const res = await fetch(imageUrl);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(destPath, buffer);
}

// Projects mirrored from Projects.js (icon fetch only)
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

fs.mkdirSync(OUT_DIR, { recursive: true });

const manifest = {};

for (const project of projects) {
  const slug = slugify(project.name);
  const appleId = extractAppleAppId(project.href);
  const packageId = extractAndroidPackageId(project.android);
  let iconUrl = null;
  let source = null;

  if (appleId) {
    try {
      iconUrl = await fetchAppleIcon(appleId);
      if (iconUrl) source = "apple";
    } catch (e) {
      console.warn(`Apple fetch failed for ${project.name}:`, e.message);
    }
  }

  if (!iconUrl && packageId) {
    try {
      iconUrl = await fetchAndroidIcon(packageId);
      if (iconUrl) source = "android";
    } catch (e) {
      console.warn(`Android fetch failed for ${project.name}:`, e.message);
    }
  }

  if (iconUrl) {
    const ext = iconUrl.includes(".png") ? "png" : "jpg";
    const filename = `${slug}.${ext}`;
    const dest = path.join(OUT_DIR, filename);
    try {
      await downloadImage(iconUrl, dest);
      manifest[project.name] = `./auto/${filename}`;
      console.log(`✓ ${project.name} (${source})`);
    } catch (e) {
      console.warn(`Download failed for ${project.name}:`, e.message);
    }
  } else {
    console.warn(`✗ No icon for ${project.name}`);
  }

  await new Promise((r) => setTimeout(r, 300));
}

fs.writeFileSync(
  path.join(OUT_DIR, "manifest.json"),
  JSON.stringify(manifest, null, 2)
);
console.log(`\nSaved ${Object.keys(manifest).length} icons to ${OUT_DIR}`);
