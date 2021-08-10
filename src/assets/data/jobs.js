import { IoLogoAndroid } from "react-icons/io5";
import { GiBrain } from "react-icons/gi";

const jobs = [
  {
    jobTitle: "AI/ML Analyst Intern",
    jobSubtitle: "Nirmitee.io",
    date: "09/2020 - 11/2020",
    description:
      "Developed and deployed a CRUD API for managing the training data. FastApi (Python) and Ajax were used for the development, MongoDB was used for data storage, and the API was deployed to an AWS EC2 instance using Docker. Also developed a smart chatbot using RASA that understands the user's intent and replies accordingly.",
    icon: <GiBrain />,
    iconStyle: {
      color: "white",
      background: "#f44336",
    },
    technologies: ["Python", "FastApi", "RASA", "MongoDB"],
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
