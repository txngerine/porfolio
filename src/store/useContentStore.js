import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useContentStore = create(
  persist(
    (set) => ({
      // Hero Section
      marqueeText: "Akshay Ts -",
      heroTagline: "an independent creative Designer & Developer based in Netherlands",
      heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",

      // About Section
      aboutText: "I am a Dutch digital designer and web developer with over 8 years of experience, specializing at the crossroads of design, animation, and web development. My broad expertise allows me to approach design challenges from multiple perspectives.",

      // Actions
      updateContent: (key, value) => set((state) => ({ ...state, [key]: value })),
    }),
    {
      name: 'portfolio-content-storage', // unique name for localStorage
    }
  )
);

export default useContentStore;
