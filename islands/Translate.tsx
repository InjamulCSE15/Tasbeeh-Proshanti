import { useState } from "preact/hooks";

// 1. Define the allowed keys
type Language = "en" | "bn";

export default function Translate() {
  // 2. Tell useState to use that type
  const [lang, setLang] = useState<Language>("en");

  // 3. Explicitly type the content object
  const content: Record<
    Language,
    { title: string; desc: string; btn: string; toggle: string; font: string }
  > = {
    en: {
      title: "Welcome to Tasbeeh Proshanti",
      desc:
        "Connect with your spiritual journey through daily remembrance and peaceful reflection.",
      btn: "Get Started",
      toggle: "বাং",
      font: "font-english",
    },
    bn: {
      title: "তাসবীহ প্রশান্তিতে আপনাকে স্বাগতম",
      desc:
        "প্রতিদিনের জিকির এবং শান্ত প্রতিফলনের মাধ্যমে আপনার আধ্যাত্মিক যাত্রার সাথে যুক্ত হোন।",
      btn: "শুরু করুন",
      toggle: "En",
      font: "font-bengali",
    },
  };

  // Now TypeScript knows content[lang] is safe!
  const t = content[lang];
  return (
    <div
      class={`relative h-screen  bg-slate-900 w-full flex flex-col overflow-hidden bg-cover bg-center ${t.font}`}
      style="background-image: url('./assets/images/ssbg.png');"
    >
      <div class="absolute inset-0 bg-bg-black/60 z-0">
      </div>

      <button
        type="button"
        onClick={() => setLang(lang === "en" ? "bn" : "en")}
        class="absolute top-8 right-8 z-20 bg-white/20 hover:bg-white/30 text-white px-4 py-1 rounded-full border border-white/50 backdrop-blur-sm transition-all"
      >
        {t.toggle}
      </button>

      <div class="relative z-10 flex-grow flex flex-col justify-center items-center px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
          {t.title}
        </h1>

        <p class="text-white text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
          {t.desc}
        </p>
        <a
          href="/list"
          class="relative text-lg bg-green-500 hover:bg-green-600 text-white py-4 px-10 rounded-full font-bold shadow-2xl transition-transform active:scale-95"
        >
          <span class="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-ping">
          </span>
          <span class="relative z-10">{t.btn}</span>
        </a>
      </div>
    </div>
  );
}
