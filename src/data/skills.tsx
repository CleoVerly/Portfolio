import React from 'react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiLaravel, 
  SiPhp, 
  SiNodedotjs, 
  SiPython, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb, 
  SiGit 
} from 'react-icons/si';

export interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number; // 1-100
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    description: "Building beautiful, responsive interfaces",
    skills: [
      { name: "React.js", icon: <SiReact />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
      { name: "TypeScript", icon: <SiTypescript />, level: 88 },
      { name: "JavaScript", icon: <SiJavascript />, level: 92 },
    ],
  },
  {
    category: "Backend",
    description: "Scalable server-side solutions",
    skills: [
      { name: "Laravel", icon: <SiLaravel />, level: 85 },
      { name: "PHP", icon: <SiPhp />, level: 88 },
      { name: "Node.js", icon: <SiNodedotjs />, level: 82 },
      { name: "Python", icon: <SiPython />, level: 78 },
    ],
  },
  {
    category: "Database & Tools",
    description: "Data management & workflow",
    skills: [
      { name: "MySQL", icon: <SiMysql />, level: 85 },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 80 },
      { name: "MongoDB", icon: <SiMongodb />, level: 75 },
      { name: "Git", icon: <SiGit />, level: 90 },
    ],
  },
];
