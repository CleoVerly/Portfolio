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
  tagline: "I build fast, clean web products — from first sketch to production.",
  bio: "I'm a full-stack developer focused on building fast, reliable web apps. I like working end-to-end — designing the interface, writing the API, and shipping to production — and I sweat the small details and performance along the way.",
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
