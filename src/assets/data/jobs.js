import { IoLogoAndroid } from "react-icons/io5";

const jobs = [
  {
    jobTitle: "Software Engineer - Senior Associate",
    jobSubtitle: "New York Life Insurance Company",
    date: "01/2024 - Present",
    description:
      "Engineered and enhanced critical APIs and core features for the GuideMe sales platform, significantly impacting over 60% of new insurance sales and supporting thousands of agents nationwide. Also led the design and implementation of a vital Attribute-Based Access Control (ABAC) microservice to bolster application security and developed a novel policy editing system for business users. Additionally, contributed to launching new insurance products and spearheaded data unification efforts across multiple systems, improving data integrity and operational efficiency.",
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
    technologies: ["Spring Boot", "Java", "NodeJS", "React", "SQL", "Python"],
  },
  {
    jobTitle: "Software Engineer Co-op",
    jobSubtitle: "New York Life Insurance Company",
    date: "01/2023 - 08/2023",
    description:
      "Architected and delivered backend APIs for a new Session module, providing agents with crucial customer history and enriching interaction analytics. Drove significant improvements in application reliability by resolving critical defects and championed code quality by refactoring key areas to SOLID principles, enhancing system maintainability.",
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
    date: "01/2022 - 12/2022, 08/2023 - 12/2023",
    description:
      "TA'd a 350+ student software engineering course centered on building a real-time multiplayer game like Among Us using TypeScript, React, Express, WebSockets, and RESTful APIs. Mentored teams on object-oriented design, sprint planning, and debugging. Graded code for quality and architecture, requiring deep understanding of event-driven systems and scalable full-stack development.",
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
    date: "01/2021 - 05/2021",
    description:
      "Enhanced information retrieval by developing robust FastAPI services for various NLP & classification models, Agora RTC video calls, and structure data extraction from unstructured PDF documents.",
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
    date: "09/2020 - 11/2020",
    description:
      "Developed a Python-MongoDB app to retrieve project resources via keyword search, streamlining data access. Built and deployed REST APIs on EC2 for bulk data operations, reducing manual effort by 70% and improving team productivity.",
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
    date: "07/2019 - 08/2019",
    description:
      "Integrated Android Location API and Google Maps intent with custom long press and touch actions. Built intuitive UI/UX for multiple app intents. Worked with Firebase Realtime Database and Firestore to support dynamic, real-time data features.",
    icon: <IoLogoAndroid />,
    iconStyle: {
      color: "white",
      background: "#3DDC84",
    },
    technologies: ["Android", "Java", "Firebase"],
  },
];

export default jobs;
