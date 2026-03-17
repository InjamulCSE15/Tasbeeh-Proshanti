import { useSignal } from "@preact/signals";
import { zikirData } from "../routes/api/zikirData.ts";

export default function TasbeehList() {
  const selectedId = useSignal<number | null>(null);

  return (
    <div class="relative z-10 pb-8">
      <h1 class="text-2xl sm:text-4xl text-white font-bold mb-8 font-bengali">
        জিকির নির্বাচন করুন
      </h1>
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {zikirData.map((zikir) => (
          <div
            key={zikir.id}
            onClick={() => {
              selectedId.value = zikir.id;
            }}
            class={`backdrop-blur-lg p-5 rounded-2xl border transition-all cursor-pointer ${
              selectedId.value === zikir.id
                ? "bg-green-600/30 border-green-400 ring-2 ring-green-400/50 scale-[1.02]"
                : "bg-transparent/30 border-slate-50/20 hover:border-slate-400 duration-500 hover:scale-105"
            }`}
          >
            <div class="flex justify-between items-start mb-2">
              <span
                class={`text-xs font-semibold px-2 py-1 rounded-full ${
                  selectedId.value === zikir.id
                    ? "bg-green-400 text-slate-700"
                    : "bg-white/80 backdrop-blur-sm text-slate-800"
                }`}
              >
                <span class="font-bengali">লক্ষ্য:</span> {zikir.target}
              </span>
              <span class="text-2xl font-arabic text-white" dir="rtl">
                {zikir.arabic}
              </span>
            </div>
            <h2
              class={`text-xl font-bold font-bengali ${
                selectedId.value === zikir.id ? "text-white" : "text-green-500"
              }`}
            >
              {zikir.latin}
            </h2>
            <p class="text-sm text-white/80 font-bengali italic">
              {zikir.meaning}
            </p>
          </div>
        ))}
      </div>

      {selectedId.value !== null && (
        <div class="flex justify-center mt-10">
          <a
            href={`/counter/${selectedId.value}`}
            class="w-full sm:w-1/3 py-4 bg-green-600 text-white font-bold rounded-full text-center shadow-xl font-bengali animate-pulse"
          >
            জিকির শুরু করুন
          </a>
        </div>
      )}

      <footer class="left-0 right-8 animate-pulse bottom-0 p-4 block lg:hidden">
        <div class="text-center">
          <p class="text-white text-sm">
            Developed by &nbsp;
            <a href="https://github.com/InjamulCSE15" class="text-blue-500">
              Injamul Alam
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
