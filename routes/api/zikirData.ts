// Define the structure for a single Zikir item
export interface Zikir {
  id: number;
  latin: string;
  arabic: string;
  meaning: string;
  target: number;
}

// Export the array of data
export const zikirData = [
  { 
    id: 0, 
    latin: "সুবহানাল্লাহ", 
    arabic: "سُبْحَانَ اللَّهِ", 
    meaning: "আল্লাহ অতি পবিত্র", 
    target: 33 
  },
  { 
    id: 1, 
    latin: "আলহামদুলিল্লাহ", 
    arabic: "الْحَمْدُ لِلَّهِ", 
    meaning: "সমস্ত প্রশংসা আল্লাহর জন্য", 
    target: 33 
  },
  { 
    id: 2, 
    latin: "আল্লাহু আকবার", 
    arabic: "اللَّهُ أَكْبَرُ", 
    meaning: "আল্লাহ সবচেয়ে মহান", 
    target: 34 
  },
  { 
    id: 3, 
    latin: "লা ইলাহা ইল্লাল্লাহ", 
    arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ", 
    meaning: "আল্লাহ ছাড়া কোনো উপাস্য নেই", 
    target: 100 
  },
  { 
    id: 4, 
    latin: "সুবহান্নাল্লহি ওয়া বিহামদিহ", 
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.", 
    meaning: "আল্লাহর প্রশংসাসহ তাঁর পবিত্রতা ঘোষণা করছি", 
    target: 100 
  },
  { 
    id: 5, 
    latin: "আস্তাগফিরুল্লাহ", 
    arabic: "أَسْتَغْفِرُ اللَّهَ", 
    meaning: "আমি আল্লাহর কাছে ক্ষমা প্রার্থনা করছি", 
    target: 100 
  },
];