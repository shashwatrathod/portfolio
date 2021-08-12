import SpotifyStatsThumbnail from "../../assets/imgs/spotify-stats-thumb.png";
import ReactIcon from "../../assets/imgs/react-icon.png";
import MUIcon from "../../assets/imgs/materialui-icon.png";
import SpotifyIcon from "../../assets/imgs/spotify-icon.png";
import JSIcon from "../../assets/imgs/js-icon.png";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxFill } from "react-icons/ri";

const projects = [
  {
    title: "Spotify Stats",
    thumbnailSrc: SpotifyStatsThumbnail,
    technologies: [
      {
        icon: ReactIcon,
        title: "ReactJS",
      },
      {
        icon: MUIcon,
        title: "MaterialUI",
      },
      {
        icon: SpotifyIcon,
        title: "Spotify API",
      },
      {
        icon: JSIcon,
        title: "Express",
      },
    ],
    links: [
      {
        icon: <FaGithub />,
        href: "https://github.com/shashwatrathod/spotify-stats",
        alt: "github repository",
        label: "View on github",
      },
      {
        icon: <RiShareBoxFill />,
        href: "https://your-spotify-stats.herokuapp.com/",
        alt: "website",
        label: "Visit the website",
      },
    ],
    description:
      "View your spotify top artists, top tracks and recently played tracks, all at one place! SpotifyStats connects with Spotify's API to show you your spotify usage data 📈. The app is built using MaterialUI for ReactJS and communicates to SpotifyAPI via a secured Express backend. Developed using the best practices in Authentication and Authorization.",
  },
];

export default projects;
