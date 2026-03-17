import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";

export default function CounterTasbeeh({ target }: { target: number }) {
  const count = useSignal(0);
  const showToast = useSignal(false);
  const showAlert = useSignal(false);
  const percentage = () => (count.value / target) * 100;

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // In Fresh, 'static' is the root, so we omit 'static' from the path
    const soundPath = "/assets/sounds/tap.mp3";
    audioRef.current = new Audio(soundPath);
    audioRef.current.preload = "auto";

    // Debugging: This will tell you if the path is wrong
    audioRef.current.onerror = () => {
      console.error(`Fresh could not find the sound file at: ${soundPath}. Check your static folder!`);
    };
  }, []);

  const handleTap = () => {
    if (count.value < target) {
      count.value++;
      // Play sound
      if (audioRef.current) {
        // Stop any currently playing sound and start from beginning
        audioRef.current.pause(); 
        audioRef.current.currentTime = 0;
        
        audioRef.current.play().catch((err) => {
          console.warn("Playback blocked or failed:", err);
        });
      }
      // Haptic feedback
      if (typeof window !== "undefined" && navigator.vibrate) {
        navigator.vibrate(50);
      }

      // Show toast when target is hit
      if (count.value === target) {
        showToast.value = true;
        setTimeout(() => {
          showToast.value = false;
        }, 3000); // Hide after 3s
      }
    }
  };

  const confirmReset = () => {
    showAlert.value = true;
  };

  const handleReset = () => {
    count.value = 0;
    showAlert.value = false;
  };

  return (
    <div class="flex flex-col items-center space-y-10">
      {/* Toast Notification (daisyUI) */}
      {showToast.value && (
        <div class="toast toast-top toast-center z-[100]">
          <div class="alert alert-success shadow-lg border-none bg-emerald-600 text-white">
            <span class="font-bengali text-lg">
              ✨ মাশাআল্লাহ! আপনার জিকির সম্পন্ন হয়েছে।
            </span>
          </div>
        </div>
      )}

      {/* Reset Alert Modal (daisyUI style) */}
      {showAlert.value && (
        <div class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
          <div class="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-2xl max-w-xs w-full text-center">
            <div class="flex justify-center pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff3b30"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white font-bengali mb-4">
              রিসেট করতে চান?
            </h3>
            <p class="text-slate-400 mb-6 font-bengali text-base">
              আপনার বর্তমান গণনা মুছে যাবে।
            </p>
            <div class="flex gap-3 justify-center">
              <button
                onClick={() => showAlert.value = false}
                class="btn btn-ghost text-white font-bengali px-8"
              >
                বাতিল
              </button>
              <button
                onClick={handleReset}
                class="btn btn-error bg-red-600 text-white font-bengali border-none px-8"
              >
                হ্যাঁ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Counter UI */}
      <div class="px-6 py-2 bg-emerald-800/40 rounded-full border border-emerald-500/30">
        <span class="font-bengali text-emerald-200">লক্ষ্য: {target} বার</span>
      </div>
      <div
        onClick={handleTap}
        class="my-6 lg:my-0 relative w-64 h-64 flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
      >
        <svg class="absolute inset-0 w-full h-full transform -rotate-90">
          <circle
            cx="128"
            cy="128"
            r="120"
            stroke="white"
            stroke-opacity="0.1"
            stroke-width="8"
            fill="transparent"
          />
          <circle
            cx="128"
            cy="128"
            r="120"
            stroke="#EAB308"
            stroke-width="8"
            fill="transparent"
            stroke-dasharray="754"
            stroke-dashoffset={754 - (754 * percentage()) / 100}
            stroke-linecap="round"
            class="transition-all duration-300"
          />
        </svg>
        <div class="text-center">
          <span class="text-8xl font-bold">{count.value}</span>
          <p class="text-white/40 font-bengali">ট্যাপ করুন</p>
        </div>
      </div>
      {count.value > 0 &&
        (
          <button
            class="font-bengali group relative inline-block text-sm font-medium text-white"
            onClick={confirmReset}
          >
            <span class="absolute inset-0 border rounded-full border-red-600">
            </span>
            <span class="block border rounded-full border-red-600 bg-red-600 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
              রিসেট করুন
            </span>
          </button>
        )}
    </div>
  );
}
