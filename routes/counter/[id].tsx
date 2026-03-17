import { PageProps } from "$fresh/server.ts";
import { zikirData } from "../api/zikirData.ts";
import CounterTasbeeh from "../../islands/CounterTasbeeh.tsx";

export default function CounterPage(props: PageProps) {
  const zikir = zikirData.find((z) => z.id === parseInt(props.params.id));
  if (!zikir) return <div>Data not found</div>;

  return (
    <div
      class="bg-slate-900 text-white flex flex-col items-center  bg-cover" 
      style="background-image: url('/assets/images/ssbg.png'); min-height: 100vh;"
    >
      <div class=" inset-0 bg-black/60 z-0" ></div>
      <div class="relative z-10 w-full max-w-md flex flex-col items-center">
        <header class="text-center mt-10">
          <h1 class="text-5xl font-arabic text-emerald-400 mb-4">
            {zikir.arabic}
          </h1>
          <h2 class="text-2xl font-bengali text-yellow-500 my-3">
            {zikir.latin}
          </h2>
        </header>
        <CounterTasbeeh target={zikir.target} />
        <a
          href="/list"
          class="my-8 text-slate-400 font-bengali flex items-center gap-2 text-sm font-medium transition hover:scale-110 hover:shadow-xl hover:text-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 14l-4 -4l4 -4" />
            <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
          </svg>
          লিস্টে ফিরে যান
        </a>
      </div>
    </div>
  );
}
