interface NavProps {
  activePath?: string;
}

export default function Navmenu({ activePath = "/" }: NavProps) {
  const closeDropdown = () => {
    if (globalThis.document) {
      (document.activeElement as HTMLElement)?.blur();
    }
  };

  // Helper function to handle active classes
  const getDockClass = (path: string) => 
    activePath === path ? "dock-active text-yellow-400" : "text-white";

  return (
    <section class="">
      {/* Desktop Navbar (Top) */}
      <div class="hidden lg:block">
        <div class="navbar fixed top-0 left-0 w-full z-50 bg-white border-b border-base-200">
          <div class="navbar-start">
            <div class="dropdown">
              <div tabIndex={0} role="button" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <ul tabIndex={0} class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow-lg border border-base-200">
                <li><a href="/" onClick={closeDropdown}>Home</a></li>
                <li><a href="/list" onClick={closeDropdown}>Tasbeeh List</a></li>
                <li><a href="#" onClick={closeDropdown}>Settings</a></li>
              </ul>
            </div>
          </div>
          <div class="navbar-center">
            <a href="/" class="btn btn-ghost text-xl normal-case text-green-600 font-bold font-bengali">তাসবীহ প্রশান্তি</a>
          </div>
          <div class="navbar-end">
            <button class="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dock (Bottom) */}
      <div class="block lg:hidden">
        <div class="dock dock-md bg-blue-900/80 text-white backdrop-blur-md z-50 border-t border-white/10">
          
          <a href="/" class={getDockClass("/")}>
            <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="1 11 12 2 23 11" />
                <path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" />
              </g>
            </svg>
            <span class="dock-label">Home</span>
          </a>

          <a href="/list" class={getDockClass("/list")}>
            <svg xmlns="http://www.w3.org/2000/svg" class="size-[1.2em]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 5h8M13 9h5M13 15h8M13 19h5" />
              <path d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
              <path d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
            </svg>
            <span class="dock-label font-bengali">লিস্ট</span>
          </a>

          <a href="#" >
            <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3" />
              <path d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z" />
            </svg>
            <span class="dock-label">Settings</span>
          </a>

        </div>
      </div>
    </section>
  );
}