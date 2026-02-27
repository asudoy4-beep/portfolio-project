export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  impact: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart Spiro – Intelligent Respiratory Monitoring System",
    description:
      "An intelligent respiratory monitoring system using an ESP32 microcontroller with flow sensors and pressure transducers to track spirometry parameters — FEV1, FVC, and PEF — in real-time, transmitting data over MQTT to a Firebase cloud backend.",
    longDescription:
      "Built on the ESP32-WROOM-32 platform, Smart Spiro samples respiratory airflow at 100Hz using a differential pressure sensor and flow tube assembly. Computed spirometry indices (FEV1, FVC, PEF, FEV1/FVC ratio) are streamed via MQTT to Firebase Realtime Database, enabling remote clinician access and longitudinal tracking. The system runs a lightweight edge-inference model to flag abnormal breathing patterns before cloud upload — reducing latency for alert delivery to under 200ms.",
    tech: ["ESP32", "MQTT", "Firebase", "Sensors", "IoT", "Embedded C"],
    impact:
      "Enables real-time, cloud-backed respiratory monitoring with edge-inference alerting — reducing clinician response time to abnormal events by flagging anomalies within 200ms of detection.",
    featured: true,
  },
  {
    id: 2,
    title: "AI-Based Smart Food Spoilage Detection System",
    description:
      "A smart monitoring system using an array of VOC sensors (MQ-135, TGS2600) and a DHT22 environmental sensor to detect early signs of food spoilage, with a Python ML model trained on ethanol, ammonia, and H₂S gas signatures achieving 91% detection accuracy.",
    longDescription:
      "The system fuses readings from three gas sensors — MQ-135 for CO₂/NH₃, TGS2600 for hydrogen/ethanol, and a custom H₂S probe — alongside DHT22 temperature/humidity data. Features are extracted per 30-second windows and fed into a Random Forest classifier trained on 2,400 labeled samples across four spoilage categories. The ESP32 runs inference locally, logging predictions to ThingSpeak for trend visualization and triggering a buzzer alert when spoilage probability exceeds 75%.",
    tech: ["ESP32", "VOC Sensors", "Python", "Random Forest", "ThingSpeak", "Machine Learning"],
    impact:
      "Achieves 91% spoilage detection accuracy across four food categories, enabling proactive waste reduction in storage environments where spoilage typically goes undetected until visible.",
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
