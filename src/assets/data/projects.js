import { FaGithub } from "react-icons/fa";
import { RiShareBoxFill } from "react-icons/ri";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const projects = [
  {
    title: "Spotify Stats",
    thumbnailSrc: "/images/thumbnails/spotify-stats-thumb.png",
    technologies: [
      {
        icon: "/images/icons/react-icon.png",
        title: "ReactJS",
      },
      {
        icon: "/images/icons/materialui-icon.png",
        title: "MaterialUI",
      },
      {
        icon: "/images/icons/spotify-icon.png",
        title: "Spotify API",
      },
      {
        icon: "/images/icons/js-icon.png",
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
    thumbnailSrc: "/images/thumbnails/conway-thumb.png",
    technologies: [
      {
        icon: "/images/icons/js-icon.png",
        title: "JavaScript",
      },
      {
        icon: "/images/icons/html-icon.png",
        title: "HTML",
      },
      {
        icon: "/images/icons/css-icon.png",
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
        href: "https://conways-gol-shash.netlify.app/",
        alt: "website",
        label: "Visit the website",
      },
    ],
    description:
      "The Game of Life is an evolution simulator game devised by John Conway. Each cell on the two-dimensional grid can either be dead or alive. The state of each cell in the next generation is decided by a set of rules. The interactions of these cells through the generations demonstrates cellular automaton 👨‍🔬 and also creates some spectacular looking patterns.",
  },
  {
    title: "Balley",
    thumbnailSrc: "/images/thumbnails/balley-thumb.png",
    technologies: [
      {
        icon: "/images/icons/unity-icon.png",
        title: "Unity",
      },
      {
        icon: "/images/icons/c%23-icon.png",
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
    thumbnailSrc: "/images/thumbnails/price-tracker-thumb.png",
    technologies: [
      {
        icon: "/images/icons/uwp-icon.png",
        title: "Universal Windows Platform",
      },
      {
        icon: "/images/icons/c%23-icon.png",
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
    thumbnailSrc: "/images/thumbnails/vods-thumb.png",
    technologies: [
      {
        icon: "/images/icons/python-icon.png",
        title: "Python",
      },
      {
        icon: "/images/icons/tf-icon.png",
        title: "TF",
      },
      {
        icon: "/images/icons/opencv-icon.png",
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
  {
    title: "Porfolio",
    thumbnailSrc: "/images/thumbnails/portfolio-thumb.png",
    technologies: [
      {
        icon: "/images/icons/react-icon.png",
        title: "React",
      },
      {
        icon: "/images/icons/sass-icon.png",
        title: "Sass",
      },
      {
        icon: "/images/icons/js-icon.png",
        title: "JavaScript",
      },
      {
        icon: "/images/icons/html-icon.png",
        title: "HTML",
      },
      {
        icon: "/images/icons/css-icon.png",
        title: "CSS",
      },
    ],
    links: [
      {
        icon: <FaGithub />,
        href: "https://github.com/shashwatrathod/portfolio",
        alt: "github repository",
        label: "View on github",
      },
      {
        icon: <RiShareBoxFill />,
        href: "https://shashwatrathod.netlify.app/",
        alt: "website",
        label: "Visit the website",
      },
    ],
    description:
      "The portfolio is designed and developed from scratch taking some inspiration from designs on Dribble. The website is developed using ReactJS which allows for quick, efficient and consistent UI changes across the board. Designed in Figma, the website features a modern monochromatic design with an intuitive UX. ",
  },
];

export default projects;
