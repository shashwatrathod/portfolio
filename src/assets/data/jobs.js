import React from "react";
import { IoLogoAndroid } from "react-icons/io5";

const jobs = [
  {
    jobTitle: "Software Engineer - Senior Associate",
    jobSubtitle: "New York Life Insurance Company",
    location: "New York, NY",
    type: "Full-time",
    date: "01/2024 - Present",
    description: [
      "Architected and delivered core platform features powering **70%+ of new insurance sales** for a massive user base.",
      "Led the development of a high-throughput, low-latency **ABAC microservice** in Go to enhance system security.",
      "Engineered an asynchronous **meeting summarizer** service using OpenAI Whisper and RAG for automated transcription.",
      "Spearheaded a platform-wide **quality initiative** through TDD and refactoring, significantly boosting system reliability."
    ],
    icon: (
      <img
        src="/images/logos/nyl.png"
        alt="NYL Logo"
        style={{ width: 40, height: 40, borderRadius: "50%" }}
      />
    ),
    useImage: true,
    iconStyle: {
      color: "white",
      background: "#dcb723",
    },
    technologies: ["Spring Boot", "Java", "Go", "React", "AWS", "Python"],
  },
  {
    jobTitle: "Software Engineer Co-op",
    jobSubtitle: "New York Life Insurance Company",
    location: "New York, NY",
    type: "Co-op",
    date: "01/2023 - 08/2023",
    description: [
      "Designed and implemented backend APIs for a high-traffic **Session Module**, unlocking vital customer history for thousands of agents.",
      "Bolstered **application reliability** by resolving critical defects and enhancing interaction analytics to drive data-led decisions.",
      "Modernized the codebase by refactoring legacy systems to **SOLID principles**, ensuring scalability and maintainability."
    ],
    icon: (
      <img
        src="/images/logos/nyl.png"
        alt="NYL Logo"
        style={{ width: 40, height: 40, borderRadius: "50%" }}
      />
    ),
    iconStyle: {
      color: "white",
      background: "#dcb723",
    },
    technologies: ["Spring Boot", "Java", "NodeJS", "React", "SQL"],
  },
  {
    jobTitle: "Teaching Assistant",
    jobSubtitle: "Northeastern University",
    location: "Boston, MA",
    type: "Part-time",
    date: "01/2022 - 12/2023",
    description: [
      "Mentored **350+ students** in advanced software engineering, guiding teams through the full lifecycle of building scalable, real-time applications.",
      "Provided technical leadership on **object-oriented design**, event-driven architecture, and sprint planning for complex semester-long projects.",
      "Evaluated and critiqued code quality, enforcing industry best practices in **TypeScript, React, and RESTful API design**."
    ],
    icon: (
      <img
        src="/images/logos/khoury.jpg"
        alt="Khoury Logo"
        style={{ width: 40, height: 40, borderRadius: "50%" }}
      />
    ),
    iconStyle: {
      color: "white",
      background: "#dcb723",
    },
    technologies: ["TypeScript", "Java", "OOP", "ExpressJS", "React"],
  },
  {
    jobTitle: "Software Developer Intern",
    jobSubtitle: "Nirmitee.io",
    location: "Remote",
    type: "Internship",
    date: "01/2021 - 05/2021",
    description: [
      "Engineered robust **FastAPI microservices** to deploy NLP and classification models, significantly enhancing the platform's information retrieval capabilities.",
      "Integrated **Agora RTC** to enable seamless real-time video communication and automated structured data extraction from complex documents."
    ],
    icon: (
      <img
        src="/images/logos/nirmitee.png"
        alt="Nirmitee Logo"
        style={{ width: 40, height: 40, borderRadius: "50%" }}
      />
    ),
    iconStyle: {
      color: "white",
      background: "#3877E1",
    },
    technologies: ["Python", "React", "TypeScript", "FastAPI", "AgoraRTC"],
  },
  {
    jobTitle: "AI/ML Analyst Intern",
    jobSubtitle: "Nirmitee.io",
    location: "Remote",
    type: "Internship",
    date: "09/2020 - 11/2020",
    description: [
      "Developed a high-performance **Python-MongoDB application** to streamline resource retrieval, optimizing data access patterns for the team.",
      "Deployed scalable REST APIs on **AWS EC2** to automate bulk data operations, reducing manual processing effort by **70%**."
    ],
    icon: (
      <img
        src="/images/logos/nirmitee.png"
        alt="Nirmitee Logo"
        style={{ width: 40, height: 40, borderRadius: "50%" }}
      />
    ),
    iconStyle: {
      color: "white",
      background: "#f44336",
    },
    technologies: ["Python", "FastApi", "MongoDB"],
  },
  {
    jobTitle: "Android Developer Intern",
    jobSubtitle: "Eople Internet Pvt Ltd",
    location: "Pune, India",
    type: "Internship",
    date: "07/2019 - 08/2019",
    description: [
      "Integrated **Android Location APIs** and Google Maps to create location-aware features with custom gesture controls.",
      "Built a responsive, intuitive UI/UX and leveraged **Firebase Realtime Database** to power dynamic, synchronized app experiences."
    ],
    icon: <IoLogoAndroid />,
    iconStyle: {
      color: "white",
      background: "#3DDC84",
    },
    technologies: ["Android", "Java", "Firebase"],
  },
];

export default jobs;
