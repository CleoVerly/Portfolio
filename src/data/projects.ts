export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl?: string;
  category: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Platform e-commerce modern dengan fitur real-time inventory dan payment gateway integration.",
    longDescription: "Full-stack e-commerce platform yang dibangun dengan Next.js dan Node.js. Fitur termasuk real-time inventory management, Stripe payment integration, admin dashboard, dan responsive design untuk semua device.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    imageUrl: "/projects/ecommerce.jpg",
    liveUrl: "https://example-ecommerce.vercel.app",
    githubUrl: "https://github.com/cleoverly/ecommerce",
    category: "Full-Stack",
    featured: true,
    year: 2026,
  },
  {
    id: "task-management",
    title: "TaskFlow — Project Manager",
    description: "Aplikasi manajemen proyek dengan Kanban board, real-time collaboration, dan analytics dashboard.",
    longDescription: "Aplikasi project management yang terinspirasi dari Trello dan Notion. Dibangun dengan React dan Firebase untuk real-time sync. Fitur drag-and-drop Kanban, time tracking, team collaboration, dan reporting analytics.",
    techStack: ["React", "Firebase", "TypeScript", "Framer Motion", "Chart.js"],
    imageUrl: "/projects/taskflow.jpg",
    liveUrl: "https://taskflow-app.vercel.app",
    githubUrl: "https://github.com/cleoverly/taskflow",
    category: "Web App",
    featured: true,
    year: 2025,
  },
  {
    id: "ai-image-generator",
    title: "PixelForge AI",
    description: "Web app untuk generate dan edit gambar menggunakan AI dengan antarmuka yang intuitif.",
    longDescription: "AI-powered image generation tool yang menggunakan DALL-E API. User bisa generate gambar dari text prompt, edit gambar existing, dan save ke gallery. Dibangun dengan Next.js dan menggunakan OpenAI API.",
    techStack: ["Next.js", "OpenAI API", "TypeScript", "Prisma", "Tailwind CSS"],
    imageUrl: "/projects/pixelforge.jpg",
    liveUrl: "https://pixelforge.vercel.app",
    category: "AI/ML",
    featured: true,
    year: 2025,
  },
  {
    id: "fitness-tracker",
    title: "FitPulse",
    description: "Fitness tracking app dengan workout planner, progress charts, dan social features.",
    longDescription: "Comprehensive fitness tracking application dengan custom workout builder, progress visualization, calorie tracker, dan social features untuk berbagi achievement. Mobile-first design dengan PWA support.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Chart.js", "PWA"],
    imageUrl: "/projects/fitpulse.jpg",
    liveUrl: "https://fitpulse-app.vercel.app",
    githubUrl: "https://github.com/cleoverly/fitpulse",
    category: "Web App",
    featured: false,
    year: 2025,
  },
  {
    id: "weather-dashboard",
    title: "SkyView Weather",
    description: "Dashboard cuaca interaktif dengan visualisasi data real-time dan forecast 7 hari.",
    longDescription: "Beautiful weather dashboard yang menggunakan OpenWeatherMap API. Fitur termasuk current conditions, 7-day forecast, interactive maps, air quality index, dan severe weather alerts.",
    techStack: ["React", "TypeScript", "OpenWeather API", "Mapbox", "Tailwind CSS"],
    imageUrl: "/projects/skyview.jpg",
    liveUrl: "https://skyview-weather.vercel.app",
    category: "Web App",
    featured: false,
    year: 2024,
  },
  {
    id: "portfolio-cms",
    title: "ContentHub CMS",
    description: "Headless CMS custom-built untuk mengelola konten website dan blog dengan mudah.",
    longDescription: "Custom headless CMS yang dibangun dari scratch menggunakan Node.js dan React. Features include rich text editor, media management, API generation, user roles, dan deployment automation.",
    techStack: ["Node.js", "React", "PostgreSQL", "Docker", "Redis", "GraphQL"],
    imageUrl: "/projects/contenthub.jpg",
    liveUrl: "https://contenthub-cms.vercel.app",
    githubUrl: "https://github.com/cleoverly/contenthub",
    category: "Full-Stack",
    featured: false,
    year: 2024,
  },
];

export const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
