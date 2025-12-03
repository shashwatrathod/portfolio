import { FaGithub } from "react-icons/fa";
import { RiShareBoxFill } from "react-icons/ri";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const projects = [
  {
    title: "GoStoredis",
    thumbnailSrc: "/images/thumbnails/gostoredis_thumb.png",
    technologies: [
      {
        icon: "/images/icons/go-icon.png",
        title: "Go",
      },
      {
        icon: "/images/icons/redis-icon.png",
        title: "Redis",
      },
      {
        icon: "/images/icons/linux-icon.png",
        title: "Linux",
      },
    ],
    links: [
      {
        icon: <FaGithub />,
        href: "https://github.com/shashwatrathod/GoStoredis",
        alt: "github repository",
        label: "View on github",
      },
    ],
    description:
      "A high-performance, Redis-compatible server implementation in Go. Features an event-driven architecture using epoll for non-blocking I/O, supporting concurrent connections. Implements the RESP protocol, LRU eviction, and TTL-based expiration, offering a deep dive into database internals and system programming.",
  },
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
      // {
      //   icon: <RiShareBoxFill />,
      //   href: "https://your-spotify-stats.herokuapp.com/",
      //   alt: "website",
      //   label: "Visit the website",
      // },
    ],
    description:
      "A comprehensive dashboard visualizing your Spotify listening habits. Leverages the Spotify API to aggregate data on top artists and tracks, presented through a responsive MaterialUI interface. Features secure OAuth authentication and a robust Express backend.",
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
        href: "https://game-of-life.shashwatrathod.com/",
        alt: "website",
        label: "Visit the website",
      },
    ],
    description:
      "An interactive implementation of Conway's Game of Life. This zero-player cellular automaton simulates complex evolution patterns based on initial states. Built to demonstrate algorithmic efficiency and DOM manipulation in a pure JavaScript environment.",
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
      "A physics-based 2D infinite runner developed in Unity. Features dynamic obstacle generation, progressive difficulty scaling, and an integrated economy system. Optimized for mobile performance with smooth frame rates and responsive touch controls.",
  },
  // {
  //   title: "Amazon Price Tracker",
  //   thumbnailSrc: "/images/thumbnails/price-tracker-thumb.png",
  //   technologies: [
  //     {
  //       icon: "/images/icons/uwp-icon.png",
  //       title: "Universal Windows Platform",
  //     },
  //     {
  //       icon: "/images/icons/c%23-icon.png",
  //       title: "C#",
  //     },
  //   ],
  //   links: [
  //     {
  //       icon: <FaGithub />,
  //       href: "https://github.com/shashwatrathod/AmazonPriceTracker",
  //       alt: "github repository",
  //       label: "View on github",
  //     },
  //   ],
  //   description:
  //     "An automated background service that monitors product prices on Amazon. Utilizes efficient web scraping to track fluctuations and delivers real-time notifications when targets are met. Built as a Universal Windows Platform (UWP) app for seamless desktop integration.",
  // },
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
      "A computer vision solution for real-time parking management. Deploys a custom CNN model trained on 120k+ images to accurately detect space occupancy. Designed to reduce urban congestion by guiding drivers to available spots via an efficient, low-cost camera system.",
  },
  {
    title: "Portfolio",
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
      "A modern, high-performance portfolio website built with React and Sass. Features a custom 'Cinematic Minimalist' design system, responsive grid layouts, and subtle micro-interactions. Engineered for maintainability and a premium user experience.",
  },
];

export default projects;
