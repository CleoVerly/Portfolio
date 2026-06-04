export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  stats: {
    label: string;
    value: string;
  }[];
}

export const personalInfo: PersonalInfo = {
  name: "CLEOVERLY",
  title: "Full-Stack Developer",
  tagline: "Crafting digital experiences that inspire and innovate",
  bio: "Seorang developer yang passionate dalam membangun aplikasi web modern dengan perhatian terhadap detail dan user experience. Berpengalaman dalam membangun solusi end-to-end dari konsep hingga deployment, dengan fokus pada performa dan estetika.",
  email: "misteragus46@gmail.com",
  socials: {
    github: "https://github.com/cleoverly",
    linkedin: "https://www.linkedin.com/in/muhammad-agusriansyah",
    //twitter: "https://twitter.com/cleoverly",
    instagram: "https://instagram.com/ianlevz",
  },
  stats: [
    { label: "Projects Completed", value: "20+" },
    { label: "Years Experience", value: "4+" },
    { label: "Technologies", value: "15+" },
    { label: "Cups of Coffee", value: "∞" },
  ],
};
