import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProjectIcon from "./ProjectIcon";
import StoreButtons, { PlatformBadges } from "./StoreButtons";
import { parseTechStack, getProjectPlatforms } from "../utils/storeLinks";
import { getProjectDescription } from "../utils/projectDescription";

function Avatar({ src, alt }) {
  const [errored, setErrored] = useState(false);

  if (!src || src === "#" || errored) {
    return (
      <div className="w-14 h-14 rounded-full grid place-items-center border border-base-300/60 bg-base-100/30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 opacity-70"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.75 20.105a8.25 8.25 0 0 1 16.5 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5a18.683 18.683 0 0 1-7.813-1.7.75.75 0 0 1-.437-.695Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-14 h-14 rounded-full object-cover"
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setErrored(true)}
    />
  );
}

const projects = [
  {
    id: 1,
    name: "Cobone Deals & Special Offers",
    href: "https://apps.apple.com/us/app/cobone-deals-coupons/id1114440341",
    android:
      "https://play.google.com/store/apps/details?id=com.cobone.coboneapp",
    // imageSrc: VOcn,
    used: "React native, JavaScript, Notifications, Payments getways,Social auth,API integrations  ",
    description:
      "Cobone is your go-to platform for incredible offers and unforgettable experiences across the GCC. Whether it’s dining, travel, wellness, or entertainment, Cobone helps you enjoy more while saving big.",
  },
  {
    id: 2,
    name: "Restaurants & Local Food bozt",
    href: "https://apps.apple.com/pk/app/restaurants-local-food-bozt/id1500087580",
    used: "React Native, JavaScript, firebase Notifications, API integrations ",
    description:
      "Bōzt is your answer to, where to eat? with the help of restaurant recommendations from people you know and trust.",
  },
  {
    id: 3,
    name: "STNDRD Workout & Fitness Plans",
    href: "https://apps.apple.com/om/app/stndrd-workout-fitness-plans/id1573298047",
    android:
      "https://play.google.com/store/apps/details?id=uni.cbum&pcampaignid=web_share",
    // imageSrc: CbumFitness,
    used: "React Native, JavaScript etc",
    description:
      "Elevate your fitness journey with STNDRD, the premier app designed to help you unlock your full potential. Whether you’re aiming to build muscle, tone your body, or enhance overall fitness, STNDRD provides the tools, guidance, and motivation you need to achieve greatness.",
  },

 
  {
    id: 9,
    name: "OrderLemon ( Available only in Belgium & Netherland)",
    href: "https://apps.apple.com/us/app/orderlemon/id6451381557",
    android:
      "https://play.google.com/store/apps/details?id=com.orderlemon&pcampaignid=web_share",
    // imageSrc: OrderLemon,
    used: "React Native, TypeScript",
    description:
      "Sell via WhatsApp! Manage shops, staff, and orders with ease. Get a local WhatsApp number—no registration needed. Accessible on any device!",
  },

  {
    id: 12,
    name: "vocn Veterinary TeleSpecialty",
    href: "https://apps.apple.com/pk/app/vocn/id1628430389",
    android: "https://play.google.com/store/apps/details?id=chat.vocn.org",
    // imageSrc: VOcn,
    used: "React native, JavaScript ",
    description: `Vets On Call Network (VOCN) Specialists will help restore health to your beloved family pet!
Vets On Call Network was founded to be the go-to resource for Telehealth solutions including connecting Veterinarians (Vets) with Specialists virtually via a custom designed patient-centric telemedicine platform.
`,
  },
  {
    id: 12,
    name: "Parko",
    href: "https://apps.apple.com/pk/app/parko-al/id6740145359",
    android: "https://play.google.com/store/apps/details?id=com.parko.albania",
    // imageSrc: VOcn,
    used: "React native, JavaScript ",
    description: `Parko offers you the opportunity to earn money from your private parking spaces. If you own a parking space that sits unused for part of the time, you can list it on Parko and generate extra income!
Also, Parko allows you to easily find free parking spaces in the city, book them and pay them directly through our secure and fast system.`,
  },
  {
    id: 12,
    name: "Readi Pacific",
    href: "https://apps.apple.com/pk/app/readi-pacific/id6740719509",
    android: "https://play.google.com/store/apps/details?id=com.readi.pacific",
    // imageSrc: VOcn,
    used: "React native, JavaScript ",
    description: `Important emergency information for the Pacific Island region all in one place. Accurate and timely information from disaster response and recovery agencies for countries in the Pacific Island region. Over 70 different information sources covering Earthquake, Tsunami, Cyclone, Fire, Flood etc. Easy to access right when you need it. Be Readi!`,
  },
  {
    id: 8,
    name: "My Drink Order",
    href: "https://apps.apple.com/pk/app/my-drink-order/id6443959789",
    android: "https://play.google.com/store/apps/details?id=com.hey_bartender",
    used: "React native, JavaScript",
    description:
      "Skip the chaos with My Drink app! Browse popular drinks, customize orders, and show them to your bartender—no shouting needed. Order fast, enjoy quicker!",
  },
  {
    id: 12,
    name: "Cobone Partner",
    href: "https://apps.apple.com/us/app/cobone-partner/id1115537561",
    android:
      "https://play.google.com/store/apps/details?id=com.cobone.merchantapp",
    // imageSrc: VOcn,
    used: "React native, JavaScript ",
    description: "",
  },
  {
    id: 12,
    name: "Advantage GCC",
    href: "https://apps.apple.com/us/app/advantage-gcc/id6752327813",
    android:
      "https://play.google.com/store/apps/details?id=com.advantagegcc.app",
    // imageSrc: VOcn,
    used: "React native, JavaScript ",
    description: "",
  },
  {
    id: 12,
    name: "CatPricePro",
    href: "https://apps.apple.com/pk/app/catpricepro/id6759843236",
    android:
      "https://play.google.com/store/apps/details?id=com.fedebenalua.catpricepro",
    // imageSrc: VOcn,
    used: "React native, JavaScript ",
    description:
      "CatPrice Pro helps you manage products, customers, and purchases in one place. Create purchase records with item photos, apply discounts, and generate receipts you can print or export as a PDF.",
  },
  {
    id: 12,
    name: "Boda - Yomecaso",
    href: "https://apps.apple.com/pk/app/boda-yomecaso/id6756235262",
    android:"https://play.google.com/store/apps/details?id=com.weddingplanner.boda.yomecaso",
    // imageSrc: VOcn,
    used: "React native, JavaScript ",
    description:
      "Plan your dream wedding easily and efficiently. YoMeCaso is your personal assistant, guiding you every step of the way to the most special day of your life.",
  },
  {
    id: 12,
    name: "Praynet",
    href:"",
    android:"https://play.google.com/store/apps/details?id=com.praynet.prayer",
    // imageSrc: VOcn,
    used: "React native, JavaScript ",
    description:
      "Plan your dream wedding easily and efficiently. YoMeCaso is your personal assistant, guiding you every step of the way to the most special day of your life.",
  },
  {
    id: 12,
    name: "Ritmo 101.9",
    href:"https://apps.apple.com/pk/app/ritmo-101-9/id6469441719",
    android:"",
    // imageSrc: VOcn,
    used: "React native, JavaScript ",
    description:
      "Ritmo 101.9 by TPA Broadcasting delivers a powerful and immersive streaming experience for radio and TV content" },
  {
    id: 12,
    name: "Tradeando",
    href:"https://apps.apple.com/us/app/tradeando/id6755815321",
    android:"",
    // imageSrc: VOcn,
    used: "React native, JavaScript ",
    description:"Tradeando is the app designed for those who want to learn, analyze, and trade more clearly in the financial markets. Whether you're a beginner or an experienced trader, here you'll find tools that elevate your decision-making and keep you one step ahead."
  },
      
      {
    id: 7,
    name: "Mostagbalik",
    href: "",
    android:"https://play.google.com/store/apps/details?id=com.mostagbalik&pcampaignid=web_share",
    // imageSrc: Mostagbalik,
    used: "React native, JavaScript",
    description:
      "Mostagbalik is your 24/7 Academic Consultancy, guiding students to secure university acceptances and providing academic and career support. From choosing majors and applying to universities to assisting with visas, assignments, and job placements, we’re revolutionizing academic counseling. Soon, our app will make accessing services, applying to universities, and tracking paperwork easier than ever. Let us help you achieve your goals!",
  },
  {
    id: 12,
    name: "QR Scanner Generate",
    href: "https://apps.apple.com/pk/app/qr-scanner-generate/id6753979837",
    android: "",
    // imageSrc: VOcn,
    used: "React native, JavaScript ",
    description:
      "QR & Bar Scanner & Generator, Food analysis by photo - the fast, privacy-minded QR & barcode tool for everyday life.",
  },
  {
    id: 12,
    name: "MMPSites",
    href: "https://apps.apple.com/pk/app/mmpsites/id6447799556",
    android: "",
    // imageSrc: VOcn,
    used: "React native, JavaScript ",
    description: `The platform MMP Sites is just for the purpose of information of different sellers at this platform for the convenience of public. we provide information about the
different person connected with different fields of construction industry let the both ends meet`,
  },
  {
    id: 12,
    name: "LocalList Live",
    href: "https://apps.apple.com/pk/app/locallist-live/id6760908956",
    android: "",
    // imageSrc: VOcn,
    used: "React native, JavaScript ",
    description: `LocalList Live brings live auctions to your city.
Discover estate sales, garage sales, collectibles, furniture, electronics, tools, and more from sellers in your local community.
Browse live auctions happening near you, place bids in real time, win great deals, and pick up your items locally.
No shipping.
No waiting.
No marketplace meetups weeks later.`,
  },
  {
    id: 1,
    name: "Socar Tracking",
    href: "https://apps.apple.com/pk/app/socar-tracking/id1141679676",
    android: "https://play.google.com/store/apps/details?id=com.socar3.be",
    // imageSrc: Reko,
    used: "Expo, TypeScript etc",
    description:
      "SOCAR TRACKING is the application that will allow the best tracking service for al your vehicles expeditions with SOCAR SHIPPING AGENCY.",
  },
  {
    id: 8,
    name: "All Video Downloader & Player",
    href: "",
    android: "https://play.google.com/store/apps/details?id=com.videodownloader.videoplayer.scnsoft.videoder.tubex.statussaver.vidmate",
    imageSrc: "",
    used: "Java",
    description:
      "All Video Downloader & Player is a powerful all-in-one app designed to help you download videos, save media files, manage downloads, " },
  {
    id: 8,
    name: "Universal Calculator",
    href: "",
    android: "https://play.google.com/store/apps/details?id=calculator.scientificcalculator.uniteconverter.statistics.maths.healthfitness",
      imageSrc: "",
    used: "Java",
    description:
      "it’s a powerful all-in-one tool that combines a conversion calculator, unit converter, fitness & health calculators, pregnancy tools, math & scientific calculators, and a currency converter into one easy-to-use mobile app."
    },
  {
    id: 8,
    name: "Text Capture , Image to Text",
    href: "",
    android: "https://play.google.com/store/apps/details?id=com.photoscaner.imagetotextocr",
      imageSrc: "",
    used: "JAVA",
    description:"Image to Text (Text Capture) allows you to capture text from your device's camera. You can directly click a picture or pick it from a gallery and convert it into text."
    },
  {
    id: 8,
    name: "Ramadan 2026 – Prayer & Zikr",
    href: "",
    android: "https://play.google.com/store/apps/details?id=salman.khan.islamiczikar",
      imageSrc: "",
    used: "React Native",
    description:"Prayer & Zikr is a complete Islamic app designed to help Muslims around the world during the holy month of Ramadan. Ramadan is the ninth month of the Islamic calendar and a time of fasting, prayer, reflection, and devotion."    },
    {
    id: 8,
    name: "ABC 123 Kids: Learn & Play",
    href: "",
    android: "https://play.google.com/store/apps/details?id=com.kidseduacationalapp",
      imageSrc: "",
    used: "React Native",
    description:"ABC 123 Kids: Learn & Play is a fun and educational app designed to help kids learn and play. It is a great app for kids to learn and play."
  },
    {
    id: 8,
    name: "Daily Planner: To-Do List",
    href: "",
    android: "https://play.google.com/store/apps/details?id=com.todo.reminder.task.dailyplanner",
    imageSrc: "",
    used: "React Native",
    description:"It helps you manage your tasks, work and daily routine in one place. Set reminders, make to-do lists and stay organized every day."
    },
   
  ];
// fiverr review
const fiverrTestimonials = [
  {
    id: 1,
    name: "jajjan",
    title: "Norway",
    message:
      "Professional. Salman is also very polite and makes sure you get the product you want and expected. He has a good eye for details and delivers a bug free product.",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 2,
    name: "bourquingroup",
    title: "United States",
    message:
      "Salman has been an ongoing team member for over a year. We will continue to keep working with him. He works with us as customers point out ways to make the system better and helps insure the product’s success.",
    imageSrc:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/af826c757e20a28efb17d69b552c35c8-1650293568060/c40a5a75-18c0-4b09-ba7e-e4eb09b25c74.png",
  },
  {
    id: 3,
    name: "jajjan",
    title: "Norway",
    message: "Very good and polite guy. Helped me out and delivered perfect.",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 4,
    name: "olgafrance",
    title: "United States",
    message:
      "Salman is a great professional, easy to work with and he has wonderful comunicative skills. I’d definitely recommend him!",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 16,
    name: "mmm7m7mmm",
    title: "United States",
    message: "Had a great time again working with Salman!",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 5,
    name: "compmanis",
    title: "India",
    message: "Great work. Timely feedback.",
    imageSrc:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/fac2ba25545a86af03f8f1fdf0da64a5-1706527745987/03f9c510-1a82-452f-b888-c0a4cdec455d.jpg",
  },
  {
    id: 6,
    name: "mmm7m7mmm",
    title: "United States",
    message:
      "Salman is great to work with! Fast delivery and everything worked out great.",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 7,
    name: "bourquingroup",
    title: "United States",
    message:
      "Great job as always, takes the time to make sure the app is working the way I expect it too.",
    imageSrc:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/af826c757e20a28efb17d69b552c35c8-1650293568060/c40a5a75-18c0-4b09-ba7e-e4eb09b25c74.png",
  },
  {
    id: 8,
    name: "bilal_khan6633",
    title: "Pakistan",
    message:
      "Salman was fantastic to work with! His expertise in react native mobile app development was amazing throughout the project. Highly recommend his service to everyone, very professional!",
    imageSrc:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/58c349aed5b3f0b0051af669b2b8dd0d-1689146561319/f9c994f0-5dae-439b-92fd-d959f59f2f4f.png",
  },
  {
    id: 9,
    name: "pp_glc",
    title: "France",
    message:
      "I highly recommend Salman for React Native projects on Fiverr. Their exceptional coding skills and professionalism make them a valuable asset. Choose Salman for your project and experience their top-notch work!",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 10,
    name: "bourquingroup",
    title: "United States",
    message:
      "Salman has been great as we get feedback on the app, I was constantly making changes. Some vendors would get frustrated by the changes, he just made the app better for us. This is the third version he has built for us and we plan to keep using him.",
    imageSrc:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/af826c757e20a28efb17d69b552c35c8-1650293568060/c40a5a75-18c0-4b09-ba7e-e4eb09b25c74.png",
  },
  {
    id: 11,
    name: "saadhashmi",
    title: "Pakistan",
    message: "Superb Resource.",
    imageSrc:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/3883206/original/ani.jpg",
  },
  {
    id: 12,
    name: "saadhashmi",
    title: "Pakistan",
    message:
      "Super Professional and so Responsible resource. just give him the work and your problem is solved, coz he will surely complete the tasks before time.",
    imageSrc:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/3883206/original/ani.jpg",
  },
  {
    id: 13,
    name: "bourquingroup",
    title: "United States",
    message: "usefully app,",
    imageSrc:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/af826c757e20a28efb17d69b552c35c8-1650293568060/c40a5a75-18c0-4b09-ba7e-e4eb09b25c74.png",
  },
  {
    id: 14,
    name: "markkhanippbx",
    title: "Pakistan",
    message:
      "Salman is a nice person to work with. He is very cooperative and flexible, yet a professional person who knows what he is doing. It was a fantastic experience working with him and I look forward to working with him again in the future as well.",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 15,
    name: "bourquingroup",
    title: "United States",
    message:
      "Very easy to work with, and worked with me to get through several changes.",
    imageSrc:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/af826c757e20a28efb17d69b552c35c8-1650293568060/c40a5a75-18c0-4b09-ba7e-e4eb09b25c74.png",
  },
  {
    id: 17,
    name: "saadhashmi",
    title: "Pakistan",
    message: "owesum resource. plan to work alot with him in future.",
    imageSrc:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/3883206/original/ani.jpg",
  },
  {
    id: 18,
    name: "saadhashmi",
    title: "Pakistan",
    message: "thumbs up. he is very responsible with his great skills",
    imageSrc:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/3883206/original/ani.jpg",
  },
  {
    id: 19,
    name: "saadhashmi",
    title: "Pakistan",
    message:
      "Great Experience, Salman is tremendous. will use his service again",
    imageSrc:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/3883206/original/ani.jpg",
  },
  {
    id: 20,
    name: "maritheia_new",
    title: "Sri Lanka",
    message:
      "Very easy to work with and wrote beautiful code very quickly. Great communication throughout. I would absolutely work with her again",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 21,
    name: "andy172",
    title: "Taiwan",
    message:
      "Excellent experience, the seller has been really helpful and extremely nice, will work with him next time.",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 22,
    name: "linosa",
    title: "Cyprus",
    message: "vary good job",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 23,
    name: "linosa",
    title: "Cyprus",
    message: "Extremely cooperative and very good job.",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 24,
    name: "roberthyman",
    title: "United States",
    message:
      "Working with Salman was AMAZING. Even though English is not his primary language we worked together like a charm. He Took this project from the the beginning right until the end when the app was published and LIVE!!! I wish I could give him 10 stars. Thanks so much Salman.",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 25,
    name: "skyunion",
    title: "United Kingdom",
    message:
      "Good communication, friendly. Slight language barrier but nonetheless top notch 10/10.",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 26,
    name: "analyze_eyes",
    title: "Pakistan",
    message:
      "one of the Best app devolper ever seen. Deleiver more than a expectations. Must give him a try. highly recommended. Will Order Again.",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 27,
    name: "looperstudio",
    title: "India",
    message:
      "A friendly, professional, patient, and kind person, I advise everyone to deal with him and you will not regret him",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 28,
    name: "mohmadar",
    title: "Israel",
    message: "amazing he do everything thing.. fast work",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 29,
    name: "kirohallix",
    title: "Morocco",
    message:
      "Nice Sell,passionate about he's work and he knows how to do it good job recommended",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 30,
    name: "thechange_maker",
    title: "United States",
    message:
      "Very engaged, reasonable in terms of pricing and consistently asked clarifying questions to ensure he understood what I was making him to do.",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 31,
    name: "rmsoftsolutions",
    title: "India",
    message:
      "Thanks a lot, it's always a pleasure working with clients like you and knowing what they need. Thanks again!",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
  {
    id: 32,
    name: "hurma_javed00",
    title: "Pakistan",
    message: "Outstanding experience!",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SbSw7K9dZxfJm28QWM0Lch1iqbhKTD0Uyw&s",
  },
];
// up work review
const upworkTestimonials = [
  {
    id: 1,
    name: "eli klod",
    title: "Israel",
    message: "Great experience to work with",
    imageSrc:
      "https://e7.pngegg.com/pngimages/744/960/png-clipart-upwork-computer-icons-freelancer-others-miscellaneous-text-thumbnail.png",
  },
  {
    id: 2,
    name: "Aymen Ramlaoui",
    title: "United States",
    message:
      "Salman is an extremely skilled developer and really knows rocket chat very well, and aside from that he is great to work with, has great communication and stuck with a difficult task until the job was done, thank you Salman!",
    imageSrc:
      "https://www.upwork.com/profile-portraits/c1c5wy0TnbZBOD-8Q3Zn5xsbhYGWuRoxHOKpIhY8TrIQw0hmd1TXoiT8l-x5qx1EUq",
  },
  {
    id: 3,
    name: "Iqbal Khowaja",
    title: "United States",
    message:
      "Salman has been a great resource. His skills and cooperative nature is really appreciated. It was pleasure working with you Salman. Looking forward to hire you soon for our next projects.",
    imageSrc:
      "https://e7.pngegg.com/pngimages/744/960/png-clipart-upwork-computer-icons-freelancer-others-miscellaneous-text-thumbnail.png",
  },
  {
    id: 4,
    name: "Ethan Dorsey",
    title: "United States",
    message: "All good, Thanks!",
    imageSrc:
      "https://e7.pngegg.com/pngimages/744/960/png-clipart-upwork-computer-icons-freelancer-others-miscellaneous-text-thumbnail.png",
  },
  {
    id: 16,
    name: "Joseph Steele",
    title: "United States",
    message:
      "Salman delivered good work on this React Native project and I enjoyed working with him. I will likely have additional jobs for him in the future.",
    imageSrc:
      "https://e7.pngegg.com/pngimages/744/960/png-clipart-upwork-computer-icons-freelancer-others-miscellaneous-text-thumbnail.png",
  },
  {
    id: 5,
    name: "Syed Muhammad Ali Rizvi",
    title: "Pakistan",
    message:
      "I had a fantastic experience working with Salman Khan. They delivered top-notch work on time, understood my needs perfectly, and their quick responses made the project run smoothly. I highly recommend Salman Khan any project – they truly excel in professionalism and quality.",
    imageSrc:
      "https://www.upwork.com/profile-portraits/c11q5vihAjLlsu7zEDbWbEnpjxGAtBcxqOnEHnFdreUXltX67qKgI-8zjrHyttceLW",
  },
  {
    id: 6,
    name: "Nadia Shahid",
    title: "Pakistan",
    message:
      "Salman is very smart in terms of diagnosing the problem and getting that resolved. His dedication towards work is commendable.",
    imageSrc:
      "https://www.upwork.com/profile-portraits/c12JA9_ZwdJ5EDZLDlj3rJw-ksZwVP5Ka50AKT-QqXE-Jwm1VWF6-bBvBehDvVTXeS",
  },
  {
    id: 7,
    name: "wes borgman",
    title: "United States",
    message:
      "Salman was excellent to work with an very competent in his subject matter. He assisted when we ran into challenges and was always very responsive to help us overcome obstacles along the way! Would definitely use Salman again!",
    imageSrc:
      "https://e7.pngegg.com/pngimages/744/960/png-clipart-upwork-computer-icons-freelancer-others-miscellaneous-text-thumbnail.png",
  },
  {
    id: 8,
    name: "Houcine Boga",
    title: "Morocco",
    message: "great job, I recommend him.",
    imageSrc:
      "https://e7.pngegg.com/pngimages/744/960/png-clipart-upwork-computer-icons-freelancer-others-miscellaneous-text-thumbnail.png",
  },
];
const linkedinTestimonials = [
  {
    id: 1,
    name: "Scott Bourquin",
    title: " United States",
    message:
      "We have been working together for over a year and I continue to use Salman for the project. He has been easy to work with and responds quickly when I need changes.",
    imageSrc:
      "https://media.licdn.com/dms/image/v2/D5603AQFzMIXLsS9s7Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1677026946931?e=1739404800&v=beta&t=NwJdq2WJsKWBXNfPEimMAf1URF7REqtx0qYHNHfJqN4",
  },
  {
    id: 2,
    name: "Sieg Breugelmans",
    title: "Belgium ",
    message:
      "We have been working together for over a year and I continue to use Salman for the project. He has been easy to work with and responds quickly when I need changes.",
    imageSrc:
      "https://media.licdn.com/dms/image/v2/D4E03AQEcWtdySqx8Ug/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1686573266650?e=1739404800&v=beta&t=9phVRhmB-3Nt98gNA7AvXl04GIwbppk4LKUZlwSblGM",
  },
  {
    id: 3,
    name: "Koning Corgi",
    title: "Belgium",
    message: "Amazing colleague, dedicated and resourceful",
    imageSrc:
      "https://media.licdn.com/dms/image/v2/C4E03AQEOmd04fsSgdw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1598888100611?e=1739404800&v=beta&t=nALXTlUkZrh6Mni6-ZDg6Ewp_dyFHfxThQQS8OTjZxE",
  },
  {
    id: 4,
    name: "axel  musch",
    title: "Brussels Capital of Belgium",
    message:
      "Great to Work with Khan, Always fast to respond! Extensive knowledge about publishing an app to any major store. 👍",
    imageSrc:
      "https://media.licdn.com/dms/image/v2/C4E03AQGuoI2n59CShg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1659356549038?e=1739404800&v=beta&t=lXLp9xhmyR2bhPB0n8Dotua-RhAViMsaUZ6VmZgzBQ8",
  },

  {
    id: 5,
    name: "Ruvenss G Wilches",
    title: "Kasterlee, Flemish Region, Belgium",
    message:
      "He is an amazing transparent person, a hard worker, and very conscious about his own work, ready to step up to any challenge.",
    imageSrc:
      "https://media.licdn.com/dms/image/v2/D4E03AQF7QYmGudozJw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1673452520411?e=1739404800&v=beta&t=AgImlU5VDEUFp7Rb4jygbqxDXpvLmni3kE9_spRd6g0",
  },
  {
    id: 6,
    name: "Jasim Khan",
    title: "Pakistan",
    message:
      "alman has done an exceptional job. He delivered a full complex premium application from scratch to end! the quality of the app is among the highest in the market in term of design, quality and performance. I strongly recommend him",
    imageSrc:
      "https://media.licdn.com/dms/image/v2/C5103AQF5h88HaCHCjA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1585715448622?e=1739404800&v=beta&t=Nv_y3Klmu8qu3G8Ibbcz_kpvV_qos92KLVrXcpF8CQA",
  },
  {
    id: 7,
    name: "Bilal Khan",
    title: "Pakistan",
    message:
      "My experience working with Salman Khan was excellent. He is a professional React Native developer who created an amazing app for one of my client project. Salman Khan is an amazing individual with exceptional skills, very responsive, and incredibly kind. I highly recommend his services to anyone in need of top-notch development work. He won't disappoint; he is a top professional who consistently delivers excellent results!",
    imageSrc:
      "https://media.licdn.com/dms/image/v2/D4D35AQGeWAYyfbJ0Pw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1697177750249?e=1734631200&v=beta&t=7e-yBOCvR20ZmiW4cko0ITdbcwsMeHt-3ObrptMhQVI",
  },
  {
    id: 8,
    name: "Usman khan",
    title: "Pakistan",
    message:
      "Salman is one of the productive and sportive person he has a best knowldge to resolve bugs and issues i really enjoy to work with him",
    imageSrc:
      "https://media.licdn.com/dms/image/v2/D4D03AQEEdeCzY-nmnA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723785230212?e=1739404800&v=beta&t=XCknaTfSSK9EdgUmz-rF5yRwJ0Gb6xrIXPEhWWsYpak",
  },
];
function ProjectCard({ project, index, featured = false }) {
  const techTags = parseTechStack(project.used);
  const description = getProjectDescription(
    project,
    featured ? "featured" : "short"
  );

  if (featured) {
    return (
      <article
        className="group relative overflow-hidden rounded-3xl border border-base-300/60 bg-base-200/60 backdrop-blur-xl shadow-2xl shadow-primary/10 transition duration-300 hover:shadow-primary/20"
        data-aos="fade-up"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative grid gap-0 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col justify-center gap-6 border-b border-base-300/40 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="flex items-start gap-5">
              <ProjectIcon project={project} size="featured" />
              <div className="min-w-0 flex-1">
                <PlatformBadges project={project} />
                <h3 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                  {project.name}
                </h3>
              </div>
            </div>
            <p className="text-sm leading-7 opacity-80 sm:text-base">
              {description}
            </p>
            {techTags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {techTags.map((tag) => (
                  <span
                    key={tag}
                    className="badge badge-outline border-base-300/70 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <StoreButtons project={project} />
          </div>
          <div className="flex items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 p-8 sm:p-10">
            <div className="relative">
              <div className="absolute inset-0 scale-110 rounded-[2rem] bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
              <ProjectIcon
                project={project}
                size="featured"
                className="relative !h-40 !w-40 sm:!h-48 sm:!w-48 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-base-300/60 bg-base-200/60 backdrop-blur-xl shadow-xl shadow-primary/5 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
      data-aos="fade-up"
      data-aos-delay={(index % 4) * 50}
    >
      <div className="relative p-5 pb-0">
        <div className="flex items-start gap-4">
          <ProjectIcon project={project} />
          <div className="min-w-0 flex-1 pt-1">
            <PlatformBadges project={project} />
            <h3 className="mt-2 text-base font-bold leading-snug sm:text-lg">
              {project.name}
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 pt-4">
        <p className="line-clamp-3 flex-1 text-sm leading-6 opacity-75">
          {description}
        </p>
        {techTags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-base-300/40 px-2.5 py-1 text-[11px] font-medium opacity-90"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-5 border-t border-base-300/40 pt-4">
          <StoreButtons project={project} compact />
        </div>
      </div>
    </article>
  );
}

const FILTER_OPTIONS = [
  { id: "all", label: "All Apps" },
  { id: "both", label: "iOS & Android" },
  { id: "ios", label: "iOS Only" },
  { id: "android", label: "Android Only" },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(8);
  const [platformFilter, setPlatformFilter] = useState("all");

  const validProjects = projects.filter(Boolean);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleViewMore = () => {
    setVisibleProjects((prev) => prev + 8);
  };

  const filteredProjects = validProjects.filter((project) => {
    const { hasIos, hasAndroid } = getProjectPlatforms(project);
    if (platformFilter === "all") return true;
    if (platformFilter === "both") return hasIos && hasAndroid;
    if (platformFilter === "ios") return hasIos && !hasAndroid;
    if (platformFilter === "android") return hasAndroid && !hasIos;
    return true;
  });

  const featuredProject =
    filteredProjects.find((p) => getProjectPlatforms(p).hasIos && getProjectPlatforms(p).hasAndroid) ||
    filteredProjects[0];
  const gridProjects = filteredProjects.filter((p) => p !== featuredProject);

  const sliderSettings = {
    dots: true,
    infinite: fiverrTestimonials.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: fiverrTestimonials.length > 1,
    autoplaySpeed: 3000,
  };
  const sliderSettings2 = {
    dots: true,
    infinite: upworkTestimonials.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: upworkTestimonials.length > 1,
    autoplaySpeed: 3000,
  };
  const sliderSettings3 = {
    dots: true,
    infinite: linkedinTestimonials.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: linkedinTestimonials.length > 1,
    autoplaySpeed: 3000,
  };

  return (
    <div id="projects">
      <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="text-center lg:text-left">
          <h2 className="text-lg leading-7 opacity-80">Browse my recent</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Projects
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 opacity-70 sm:text-base">
            {validProjects.length} mobile apps shipped to the App Store and
            Google Play — tap a store badge to view the live listing.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => {
                setPlatformFilter(option.id);
                setVisibleProjects(8);
              }}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                platformFilter === option.id
                  ? "bg-primary text-primary-content shadow-lg shadow-primary/20"
                  : "border border-base-300/60 bg-base-200/60 hover:border-primary/40"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {featuredProject && (
          <div className="mt-10">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xl font-bold">Featured Project</p>
              <span className="badge badge-primary badge-outline">Highlight</span>
            </div>
            <ProjectCard project={featuredProject} featured />
            <div className="mt-6 flex justify-center lg:justify-start">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="btn btn-outline border-base-300/70"
              >
                Build Something Similar
              </Link>
            </div>
          </div>
        )}

        <div className="mt-14">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-xl font-bold">More Projects</p>
            <span className="badge badge-secondary badge-outline">
              {filteredProjects.length} apps
            </span>
          </div>
          {gridProjects.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-base-300/60 p-10 text-center opacity-70">
              No projects match this filter yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {gridProjects.slice(0, visibleProjects).map((project, index) => (
                <ProjectCard
                  key={`${project.name}-${index}`}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          )}
          {visibleProjects < gridProjects.length && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                className="btn btn-outline border-base-300/70"
                onClick={handleViewMore}
              >
                View More ({gridProjects.length - visibleProjects} remaining)
              </button>
            </div>
          )}
        </div>
        <div className="mt-32 mx-auto max-w-2xl text-center">
          <h2 className="text-xl leading-7 opacity-80">
            kind respect from clients
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Fiverr
          </p>
        </div>
        <div className="mt-10 rounded-3xl border border-base-300/60 bg-base-200/60 backdrop-blur-xl shadow-xl shadow-primary/5">
          <Slider {...sliderSettings}>
            {fiverrTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="text-center p-8">
                {/* Message */}
                <p className="text-lg italic mb-4">" {testimonial.message} "</p>
                <div className="flex justify-center mt-8 mb-2">
                  <Avatar src={testimonial.imageSrc} alt={testimonial.name} />
                </div>

                <div className="flex justify-center items-center">
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm opacity-70">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* upwork rewiew */}

        <div className="mt-32 mx-auto max-w-2xl text-center">
          <h2 className="text-xl leading-7 opacity-80">
            kind respect from clients
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Upwork Talent
          </p>
        </div>
        <div className="mt-10 rounded-3xl border border-base-300/60 bg-base-200/60 backdrop-blur-xl shadow-xl shadow-primary/5">
          <Slider {...sliderSettings2}>
            {upworkTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="text-center p-8">
                {/* Message */}
                <p className="text-lg italic mb-4">" {testimonial.message} "</p>
                <div className="flex justify-center mt-8 mb-2">
                  <Avatar src={testimonial.imageSrc} alt={testimonial.name} />
                </div>

                <div className="flex justify-center items-center">
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm opacity-70">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="mt-32 mx-auto max-w-2xl text-center">
          <h2 className="text-xl leading-7 opacity-80">
            kind respect from clients
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Linkedin
          </p>
        </div>
        <div className="mt-10 rounded-3xl border border-base-300/60 bg-base-200/60 backdrop-blur-xl shadow-xl shadow-primary/5">
          <Slider {...sliderSettings3}>
            {linkedinTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="text-center p-8">
                {/* Message */}
                <p className="text-lg italic mb-4">" {testimonial.message} "</p>
                <div className="flex justify-center mt-8 mb-2">
                  <Avatar src={testimonial.imageSrc} alt={testimonial.name} />
                </div>

                <div className="flex justify-center items-center">
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm opacity-70">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
