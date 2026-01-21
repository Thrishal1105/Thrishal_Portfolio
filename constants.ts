
import { Project, Experience, Education, SkillCategory, Achievement } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Sales Forecasting of Overrated Products",
    category: "Data Science",
    image: "https://res.cloudinary.com/dalmvzwgj/image/upload/v1768214264/Gemini_Generated_Image_grx3vugrx3vugrx3_nu6eaa.png",
    description: "AI system that corrects biased ratings with NLP and improves demand forecasting via ML models in a Streamlit dashboard.",
    githubLink: "https://github.com/Thrishal1105/Sales-Forecasting-of-Overrated-Products.git",
    previewLink: "https://huggingface.co/spaces/Thrishal/sales-overrated-product-forecasting"
  },
  {
    id: 2,
    title: "Bus Tracking System",
    category: "IOT",
    image: "https://res.cloudinary.com/dalmvzwgj/image/upload/v1763902026/Gemini_Generated_Image_5jv8dh5jv8dh5jv8_yt5lpc.png",
    description: "Real-time IoT bus tracking application with admin dashboard and passenger mobile app.",
    githubLink: "https://github.com/Thrishal1105/Bus_Tracker.git",
    previewLink: "https://bus-tracker-deploy.vercel.app/"
  },
  {
    id: 3,
    title: "RAG Model Offline",
    category: "AI Application",
    image: "https://res.cloudinary.com/dalmvzwgj/image/upload/v1765953168/Gemini_Generated_Image_91g5ud91g5ud91g5_xchukt.png",
    description: "A secure, offline Retrieval-Augmented Generation system for querying documents without internet dependency.",
    githubLink: "https://github.com/Thrishal1105/RAG_Model_Offline.git"
  },
  {
    id: 4,
    title: "Interior Design",
    category: "Web Development",
    image: "https://res.cloudinary.com/dalmvzwgj/image/upload/v1765012455/unnamed_cqewdc.jpg",
    description: "A modern, responsive interior design portfolio website featuring gallery showcases and service details.",
    githubLink: "https://github.com/Thrishal1105/Interior-Design",
    previewLink: "https://interior-aesthetics.vercel.app/"
  },
  {
    id: 5,
    title: "AI-Post Generator",
    category: "AI Application",
    image: "https://res.cloudinary.com/dalmvzwgj/image/upload/v1763904435/Gemini_Generated_Image_6okz46okz46okz46_eladzn.png",
    description: "An automated content generation agent that leverages AI to create and optimize social media posts.",
    githubLink: "https://github.com/Thrishal1105/AI-Post-Generator.git",
    previewLink: "https://aistudio.google.com/apps/drive/1U5QmYg-Ax-DyDyty4Yd2pPanGkYV-Vo7?fullscreenApplet=true&showPreview=true&showAssistant=true"
  },
  {
    id: 6,
    title: "Virtual Clothes Try On AI",
    category: "AI Application",
    image: "https://res.cloudinary.com/dalmvzwgj/image/upload/v1763904434/Gemini_Generated_Image_919bvt919bvt919b_ivyklm.png",
    description: "An AI-powered application allowing users to virtually try on clothes using advanced computer vision techniques.",
    githubLink: "https://github.com/Thrishal1105/Virtual-Clothes-Try-On-AI.git",
    previewLink: "https://aistudio.google.com/apps/drive/1RMjtPqmScfw6euCCknWUyWPMdswNrwIM?fullscreenApplet=true&showPreview=true&showAssistant=true"
  },
  {
    id: 7,
    title: "Stock Prediction",
    category: "Machine Learning",
    image: "https://res.cloudinary.com/dalmvzwgj/image/upload/v1763904442/Gemini_Generated_Image_32il3z32il3z32il_vepboq.png",
    description: "A machine learning model designed to analyze historical stock data and predict future market trends with high accuracy.",
    githubLink: "https://github.com/Thrishal1105/Stock-Prediction.git"
  },
  {
    id: 8,
    title: "HR Data Analytics Dashboard",
    category: "Data Analysis",
    image: "https://res.cloudinary.com/dalmvzwgj/image/upload/v1763904434/Gemini_Generated_Image_d7ehqxd7ehqxd7eh_lcz1dx.png",
    description: "Interactive dashboard visualizing employee data, performance metrics, and attrition analysis to support HR decision-making.",
    githubLink: "https://github.com/Thrishal1105/HR-Data-Analytics-Dashboard.git"
  },
  {
    id: 9,
    title: "AI Automation",
    category: "AI Application",
    image: "https://res.cloudinary.com/dalmvzwgj/image/upload/v1765960852/OIP_roeyag.webp",
    description: "An intelligent automation agent built using n8n to streamline workflows and integrate AI capabilities into daily operations.",
    githubLink: "https://github.com/Thrishal1105/n8n_AI-Automation.git"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "Zignasa Hackathon 2024",
    category: "Hackathon",
    image: "https://res.cloudinary.com/dalmvzwgj/image/upload/v1765956008/OIP_sihu34.webp",
    description: "Participated in the AI-Driven Web Development Hackathon at MLR Institute, developing 'Swap Skills'—an innovative concept promoting mutual skill exchange and collaboration.",
    linkedinLink: "https://www.linkedin.com/posts/dharshanoj-thrishal_hackathon-ai-webdevelopment-activity-7281586279371165696-7Ysi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEyxm70BP6vVAsy7KB7SADsAhGkwElPlmKs"
  },
  {
    id: 2,
    title: "Smart Indian Hackathon 2025",
    category: "Hackathon",
    image: "https://res.cloudinary.com/dalmvzwgj/image/upload/v1765956698/Screenshot_2025-12-17_130014_h7nhoq.png",
    description: "Shortlisted for the Grand Finale of Smart India Hackathon 2025 with 'Team HackOpss', developing a Real-Time AI/ML-Based Phishing Detection System under the Blockchain & Cybersecurity theme.",
    linkedinLink: "https://www.linkedin.com/posts/dharshanoj-thrishal_smartindiahackathon-sih2025-cybersecurity-activity-7396528907937550336-xY2D?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEyxm70BP6vVAsy7KB7SADsAhGkwElPlmKs"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Python Developer Intern | Remote",
    company: "CodeSpeedy Tech",
    period: "2025 (Apr–May)",
    description: "Developed Python projects leveraging OpenCV for advanced computer vision and image processing, including implementations like Canny Edge Detection. Authored detailed technical articles and tutorials on CodersPacket, empowering learners to master real-world Python applications.",
    current: false
  }
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "CompSci and Eng.",
    institution: "JPNCE",
    period: "2026 ",
    description: "Current enrolled and pursuing B.Tech Computer Science and Engineering at Jayaprakash Narayan College of Engineering, Mahabubnagar."
  },
  {
    id: 2,
    degree: "CompSci and Eng.",
    institution: "GITS",
    period: "2023 ",
    description: "Enrolled and completed Diploma Computer Science and Engineering at Gayathri Institute of Technology and Science, Wanaparthy."
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "Frameworks / Libraries",
    skills: ["Bootstrap", "React.js", "Flutter", "NumPy", "Pandas"]
  },
  {
    category: "Database",
    skills: ["SQL"]
  },
  {
    category: "Developer Tools",
    skills: ["Git/GitHub", "VS Code", "Google Colab", "Cursor", "MS Excel", "Power BI"]
  }
];

export const SOFT_SKILLS: string[] = [
  "Communication skills",
  "Collaboration",
  "Time management",
  "Analytical thinking",
  "Problem-solving"
];
