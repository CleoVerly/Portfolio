import { personalInfo } from "@/data/personal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {currentYear}{" "}
            <span className="text-text-secondary">{personalInfo.name}</span>
            . All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Built with{" "}
            <span className="text-accent-bright">♥</span>{" "}
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
