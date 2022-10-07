import { IoLogoAndroid } from "react-icons/io5";
import { GiBrain } from "react-icons/gi";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const jobs = [
  {
    jobTitle: "Teaching Assistant",
    jobSubtitle: "Northeastern University",
    date: "01/2022 - Present",
    description:
      "Administered office hours for over 350 students to solve queries regarding assignments, projects, React, Express, and TypeScript. Mentored student teams and assisted in planning sprints, creating an efficient object-oriented design to extend existing code-base, and developing front-end, back-end deliverables as part of the course project. Graded student submissions to enforce good object-oriented and coding practices.",
    icon: <HiOutlineDesktopComputer />,
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
      "Devised microservices leveraging FastAPI and Python to parse resumes enabling users to retrieve information about different sections in the document while working in an agile team. Designed, developed, and documented an end-to-end application to automate the task of loading and processing XML reference data, increasing efficiency of the process by 80% per client requirements. Developed frontend components for PWA using React and TypeScript that amounted to over 90% of the user facing code.",
    icon: <HiOutlineDesktopComputer />,
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
      "Designed and developed an application using Python and MongoDB to recover resource information using keywords from a central data store making it significantly easier for employees to access project data. Built and deployed APIs to bulk upload, edit, and retrieve data points leveraging EC2, reducing team’s efforts by 70%.",
    icon: <GiBrain />,
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
      "Worked on integrating Android's Location API with the application. Also added a Google Maps intent and implemented custom long press and touch actions on it. Implemented the UI/UX for several other intents. Worked with Firebase's real-time database and firestore.",
    icon: <IoLogoAndroid />,
    iconStyle: {
      color: "white",
      background: "#3DDC84",
    },
    technologies: ["Android", "Java", "Firebase"],
  },
];

export default jobs;
