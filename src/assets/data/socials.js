import { ReactComponent as InstagramIcon } from "../svgs/Instagram_white.svg";
import { ReactComponent as GithubIcon } from "../svgs/Github_white.svg";
import { ReactComponent as MailIcon } from "../svgs/Mail_white.svg";
import { ReactComponent as LinkedinIcon } from "../svgs/LinkedIN_white.svg";

const socials = [
  {
    title: "Github",
    icon: <GithubIcon className="social-icon" />,
    username: "shashwatrathod",
    link: "https://github.com/shashwatrathod",
  },
  {
    title: "LinkedIN",
    icon: <LinkedinIcon className="social-icon" />,
    username: "shashwat-rathod",
    link: "https://www.linkedin.com/in/shashwat-rathod/",
  },
  {
    title: "Mail",
    icon: <MailIcon className="social-icon" />,
    username: "shashwatrathod22@gmail.com",
    link: "mailto:shashwatrathod22@gmail.com",
  },
  {
    title: "Instagram",
    icon: <InstagramIcon className="social-icon" />,
    username: "shashwatrathod_",
    link: "https://www.instagram.com/shashwatrathod_/",
  },
];

export default socials;
