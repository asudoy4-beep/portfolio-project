export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Embedded Systems",
    skills: ["ESP32", "Sensors", "Embedded C/C++", "Microcontrollers"],
  },
  {
    category: "Programming",
    skills: ["Python", "C/C++", "JavaScript", "TypeScript"],
  },
  {
    category: "IoT",
    skills: ["ThingSpeak", "Firebase", "MQTT", "Cloud Connectivity"],
  },
  {
    category: "Data Analysis",
    skills: ["pandas", "Data Processing", "NumPy", "Predictive Modeling"],
  },
  {
    category: "Web",
    skills: ["Node.js", "React", "Next.js"],
  },
];
