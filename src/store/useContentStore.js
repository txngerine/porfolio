import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useContentStore = create(
  persist(
    (set) => ({
      // Hero Section
      marqueeText: "Akshay Ts -",
      heroTagline: "An independent Full Stack Developer based in Kochi, Kerala, building modern mobile applications, web platforms, and digital experiences.",
      heroHighlight: "30+ Apps & Digital Products Built",
      heroSubtext: "Flutter • MERN Stack • Firebase • Node.js • Android • iOS • Web",
      heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",

      // About Section
      aboutText: "I am a Full Stack Developer based in Kochi, Kerala, with experience building and publishing mobile applications and web platforms for startups, businesses, and personal products. Having completed over 30 applications across Android, iOS, and web, I specialize in creating scalable, high-performance solutions using Flutter, the MERN stack, Firebase, Node.js, and modern development practices. My passion lies in transforming ideas into intuitive digital products that solve real-world problems.",

      // Actions
      updateContent: (key, value) => set((state) => ({ ...state, [key]: value })),
    }),
    {
      name: 'portfolio-content-storage', // unique name for localStorage
    }
  )
);

export default useContentStore;
