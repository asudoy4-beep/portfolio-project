export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  impact: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart Spiro – Intelligent Respiratory Monitoring System",
    description:
      "An intelligent respiratory monitoring system using sensors and embedded hardware to track breathing patterns and enable real-time monitoring.",
    tech: ["ESP32", "Sensors", "IoT", "Embedded Systems"],
    impact:
      "Demonstrates intelligent health monitoring using embedded systems.",
    featured: true,
  },
  {
    id: 2,
    title: "AI-Based Smart Food Spoilage Detection System",
    description:
      "A smart monitoring system using VOC sensors and environmental data to detect early signs of food spoilage.",
    tech: ["ESP32", "VOC Sensors", "Python", "Machine Learning"],
    impact: "Helps reduce food waste through intelligent monitoring.",
    featured: true,
  },
  {
    id: 3,
    title: "Early Flood Warning System",
    description:
      "A predictive monitoring system using environmental data analysis and Python.",
    tech: ["Python", "pandas", "Data Analysis"],
    impact: "Supports environmental monitoring and disaster preparedness.",
    featured: false,
  },
  {
    id: 4,
    title: "ESP32 Environmental Monitoring System",
    description:
      "Cloud-connected environmental monitoring system using ESP32 and sensors.",
    tech: ["ESP32", "ThingSpeak", "Firebase"],
    impact: "Provides real-time environmental monitoring.",
    featured: false,
  },
];
