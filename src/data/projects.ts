export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  featured: boolean;
  year: number;
  /** Optional screenshot/cover. Drop a file in /public/projects and set the path
   *  here (e.g. "/projects/olimversal.png"). Falls back to a placeholder. */
  image?: string;
}

export const projects: Project[] = [
  {
    id: "olimversal-academy",
    title: "Olimversal Academy",
    description:
      "Landing page platform pelatihan olimpiade sains dengan UI cinematic dan animasi yang halus.",
    longDescription:
      "Landing page untuk Olimversal Academy — platform pelatihan olimpiade sains. Dibangun dengan Next.js 15 (App Router), React 19, dan Tailwind CSS v4. Mengandalkan Framer Motion untuk mask reveal, coverflow carousel, scroll progress, dan animated counter, dengan tipografi Playfair Display + Plus Jakarta Sans.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/CleoVerly/Olimversal-Academy",
    category: "Web App",
    featured: true,
    year: 2026,
  },
  {
    id: "cat-meong-app",
    title: "Cat Meong — Meow Translate",
    description:
      "Web app PWA yang menganalisis suara kucing dan memprediksi emosinya dengan AI.",
    longDescription:
      "Aplikasi web cerdas untuk menerjemahkan vokalisasi kucing menjadi konteks emosional (Comfortable, Anxious, Hungry) menggunakan model AI. Mendukung rekam suara langsung dari mikrofon, upload audio, prediksi emosi, dan riwayat analisis. Dibangun sebagai PWA dengan React, TypeScript, dan Vite.",
    techStack: ["React", "TypeScript", "Vite", "PWA"],
    liveUrl: "https://cat-meong-app.vercel.app",
    githubUrl: "https://github.com/CleoVerly/cat-meong-app",
    category: "AI App",
    featured: true,
    year: 2026,
  },
  {
    id: "craftmit",
    title: "Craftmit",
    description:
      "Generator pesan commit otomatis dari git diff memakai AI, dengan UI neubrutalism interaktif.",
    longDescription:
      "Tool berbasis web yang memanfaatkan OpenRouter AI untuk membuat pesan commit yang rapi dan sesuai Conventional Commits langsung dari output git diff. Antarmuka neubrutalism yang bold dengan smart-swap UI untuk berpindah antara input diff dan hasil. Dibangun dengan React + Vite.",
    techStack: ["React", "Vite", "OpenRouter AI", "Tailwind CSS"],
    liveUrl: "https://craftmit-cv-team.vercel.app",
    githubUrl: "https://github.com/CleoVerly/Craftmit-CVTeam",
    category: "AI Tool",
    featured: true,
    year: 2026,
  },
  {
    id: "gamerecs",
    title: "GameRecs",
    description:
      "Sistem rekomendasi game Steam berbasis content-based filtering (TF-IDF & cosine similarity).",
    longDescription:
      "Aplikasi web yang merekomendasikan game Steam menggunakan content-based filtering. Mencari kemiripan berdasarkan genre, tag, dan kategori dengan TF-IDF dan cosine similarity. Mendukung pencarian fleksibel, filter genre, paginasi, dan rekomendasi acak. Backend Flask dengan UI Tailwind CSS + DaisyUI.",
    techStack: ["Python", "Flask", "scikit-learn", "Tailwind CSS"],
    githubUrl: "https://github.com/CleoVerly/Web-Recomendation-Games",
    category: "Machine Learning",
    featured: false,
    year: 2025,
  },
  {
    id: "crysense",
    title: "CrySense",
    description:
      "Klasifikasi suara tangisan bayi (lapar, sakit, tidak nyaman) dengan ML & Deep Learning.",
    longDescription:
      "Sistem klasifikasi suara tangisan bayi untuk mendeteksi kebutuhan bayi. Melakukan preprocessing audio, ekstraksi fitur (MFCC, Chroma, Spectral Contrast), augmentasi data, lalu melatih dan mengevaluasi model klasifikasi suara berbasis Machine Learning dan Deep Learning.",
    techStack: ["Python", "TensorFlow", "Librosa", "scikit-learn"],
    githubUrl: "https://github.com/CleoVerly/CrySense",
    category: "Machine Learning",
    featured: false,
    year: 2026,
  },
  {
    id: "bike-sharing-dashboard",
    title: "Bike Sharing Dashboard",
    description:
      "Dashboard analisis data peminjaman sepeda berdasarkan musim, waktu, dan tren.",
    longDescription:
      "Dashboard interaktif yang dibangun dengan Streamlit untuk menganalisis data peminjaman sepeda. Menyajikan tren berdasarkan musim, waktu, dan jumlah peminjaman melalui visualisasi data yang jelas.",
    techStack: ["Python", "Streamlit", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/CleoVerly/Data-Analysis-Bike-Sharing",
    category: "Data",
    featured: false,
    year: 2025,
  },
];

export const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
