# 📿 Tasbeeh Proshanti (তসবীহ প্রশান্তি)

A modern, high-performance **Progressive Web App (PWA)** built to provide a seamless spiritual experience. This project leverages the **Deno Fresh** islands architecture to deliver a near-zero JavaScript overhead while maintaining a highly interactive user experience.

---

## 🚀 Technical Highlights

* **Islands Architecture:** Utilizes Fresh's unique rendering pattern where only the counter and list interactions are "hydrated" as client-side JavaScript.
* **State Management:** Powered by **Preact Signals** for efficient, fine-grained updates to the UI without unnecessary re-renders.
* **Haptic Feedback:** Native `navigator.vibrate` API integration to provide physical confirmation on every count, mimicking a physical Tasbeeh.
* **Cinematic UI:** Styled with **Tailwind CSS** and **daisyUI**, featuring a dark-themed, glassmorphic design optimized for mobile devices.
* **Dynamic Routing:** Implemented using Fresh's file-based routing with dynamic parameters (`/counter/[id]`).

---

## 🛠️ Features

- [x] **Splash Screen:** Engaging entry point with a "Get Started" flow.
- [x] **Smart Zikir Selection:** A curated list of Zikir with Arabic, Transliteration, and Meanings.
- [x] **Interactive Counter:** Circular progress indicator with target-tracking logic.
- [x] **Smart Notifications:** daisyUI Toasts and Alerts for goal completion and reset confirmations.
- [x] **Responsive Dock:** Mobile-first bottom navigation for easy access on small devices.

---

## 📂 Project Structure

```text
├── api/
│   └── zikirData.ts       # Centralized Zikir information & targets
├── components/
│   └── Navmenu.tsx        # Hybrid Desktop/Mobile navigation
├── islands/
│   ├── TasbeehList.tsx    # Reactive selection logic (Signals)
│   └── CounterTasbeeh.tsx  # Haptic counter & progress UI
├── routes/
│   ├── index.tsx          # Splash Screen (Home)
│   ├── list.tsx           # Zikir selection route
│   └── counter/[id].tsx   # Dynamic counting route
└── static/
    └── assets/            # Visual assets & cinematic backgrounds
```

# Preview
![Tasbeeh Proshanti App Preview](https://github.com/InjamulCSE15/Tasbeeh-Proshanti/blob/main/static/assets/images/tasbeeh-proshanti-preview.png)
<a href='https://injamulcse15.github.io/ngScoreBoard/'>View Live Demo</a>

# Getting Started

Your new Fresh project is ready to go. You can follow the Fresh "Getting
Started" guide here: https://fresh.deno.dev/docs/getting-started

### Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```
deno task start
```
