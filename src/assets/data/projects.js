import SpotifyStatsThumbnail from "../../assets/imgs/spotify-stats-thumb.png";
import ConwayThumbnail from "../../assets/imgs/conway-thumb.png";
import BalleyThumbnail from "../../assets/imgs/balley-thumb.png";
import PriceTrackerThumbnail from "../../assets/imgs/price-tracker-thumb.png";
import VODSThumbnail from "../../assets/imgs/vods-thumb.png";
import ReactIcon from "../../assets/imgs/react-icon.png";
import MUIcon from "../../assets/imgs/materialui-icon.png";
import SpotifyIcon from "../../assets/imgs/spotify-icon.png";
import HTMLIcon from "../../assets/imgs/html-icon.png";
import CSSIcon from "../../assets/imgs/css-icon.png";
import JSIcon from "../../assets/imgs/js-icon.png";
import CSIcon from "../../assets/imgs/c#-icon.png";
import UnityIcon from "../../assets/imgs/unity-icon.png";
import UWPIcon from "../../assets/imgs/uwp-icon.png";
import PythonIcon from "../../assets/imgs/python-icon.png";
import TFIcon from "../../assets/imgs/tf-icon.png";
import OpenCVIcon from "../../assets/imgs/opencv-icon.png";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxFill } from "react-icons/ri";
import { IoLogoGooglePlaystore } from "react-icons/io5";

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
  {
    title: "Game of Life",
    thumbnailSrc: ConwayThumbnail,
    technologies: [
      {
        icon: JSIcon,
        title: "JavaScript",
      },
      {
        icon: HTMLIcon,
        title: "HTML",
      },
      {
        icon: CSSIcon,
        title: "CSS",
      },
    ],
    links: [
      {
        icon: <FaGithub />,
        href: "https://github.com/shashwatrathod/conways-game-of-life",
        alt: "github repository",
        label: "View on github",
      },
      {
        icon: <RiShareBoxFill />,
        href: "https://conways-game-of-life-by-shash.herokuapp.com/",
        alt: "website",
        label: "Visit the website",
      },
    ],
    description:
      "The Game of Life is an evolution simulator game devised by John Conway. Each cell on the two-dimensional grid can either be dead or alive. The state of each cell in the next generation is decided by a set of rules. The interactions of these cells through the generations demonstrates cellular automaton 👨‍🔬 and also creates some spectacular looking patterns.",
  },
  {
    title: "Balley",
    thumbnailSrc: BalleyThumbnail,
    technologies: [
      {
        icon: UnityIcon,
        title: "Unity",
      },
      {
        icon: CSIcon,
        title: "C#",
      },
    ],
    links: [
      {
        icon: <IoLogoGooglePlaystore />,
        href: "https://play.google.com/store/apps/details?id=com.Teknack.Balley&hl=en_IN&gl=US",
        alt: "visit play store",
        label: "View on Google Play Store",
      },
    ],
    description:
      "Balley is a 2D hypercasual infinite-runner type game made using Unity. The goal is to stay alive for as long as possible, gain points by bouncing off the raised platforms and to collect coins and power-ups while you're at it. The game gets progressively difficult as the points increase & also features an in-game store from where players can buy skins and powerups.",
  },
  {
    title: "Amazon Price Tracker",
    thumbnailSrc: PriceTrackerThumbnail,
    technologies: [
      {
        icon: UWPIcon,
        title: "Universal Windows Platform",
      },
      {
        icon: CSIcon,
        title: "C#",
      },
    ],
    links: [
      {
        icon: <FaGithub />,
        href: "https://github.com/shashwatrathod/AmazonPriceTracker",
        alt: "github repository",
        label: "View on github",
      },
    ],
    description:
      "Amazon Price Tracker tracks the price of items you like on Amazon for you. It then alerts the user via a notification when the price of an item in the list equals or goes below the reasonable price set by the user. The app by default runs in the background and checks for changes in price of the items every 15 minutes. It achieves this functionality by the means of web scraping.",
  },
  {
    title: "Visual Occupancy Detection System",
    thumbnailSrc: VODSThumbnail,
    technologies: [
      {
        icon: PythonIcon,
        title: "Python",
      },
      {
        icon: TFIcon,
        title: "TF",
      },
      {
        icon: OpenCVIcon,
        title: "OpenCV",
      },
    ],
    links: [
      {
        icon: <FaGithub />,
        href: "https://github.com/shashwatrathod/VisualOccupancyDetectionSystem",
        alt: "github repository",
        label: "View on github",
      },
    ],
    description:
      "VODS for smart parking lot management distinguishes between empty and occupied parking spaces in a lot. It uses a CNN model trained on over 120k images. As the roads get more crammed up with cars, the practical implications of a low-cost system that can identify free spaces for the driver are huge in terms of time saved and pollution controlled.",
  },
];

export default projects;
