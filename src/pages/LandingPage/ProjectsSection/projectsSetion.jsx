import React from "react";
import "./projectsSection.scss";
import Project1 from "../../../assets/imgs/project-1.png";
import JSIcon from "../../../assets/imgs/js-icon.png";
import TechChip from "../../../components/TechChip/techChip";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxFill } from "react-icons/ri";
import ProjectCard from "../../../components/ProjectCard/projectCard";
import Slide from "react-reveal/Slide";

const ProjectsSection = () => {
  return (
    <>
      <section id="projects">
        <div className="projects-container">
          <Slide up>
            <div className="projects-title-container">
              <div className="projects-title">Projects</div>
              <div className="projects-subtitle">Featured Work</div>
            </div>
          </Slide>

          <div className="projects-grid">
            <Slide up>
              <ProjectCard
                thumbnailSrc={Project1}
                title="Portfolio"
                technologies={[
                  { icon: JSIcon, title: "JS" },
                  { icon: JSIcon, title: "JS" },
                  { icon: JSIcon, title: "JS" },
                ]}
                links={[
                  { href: "#", icon: <FaGithub /> },
                  { href: "#", icon: <RiShareBoxFill /> },
                ]}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum nobis ipsa accusamus ipsum ratione, reprehenderit dolorem facilis iste quos, molestiae aliquid quam ducimus ex culpa porro totam amet illo! Maiores, dolorum laborum rerum provident saepe nihil temporibus molestias. Temporibus, excepturi ipsa. Dolores aperiam, veniam incidunt mollitia quia sapiente? Hic?"
              />
            </Slide>
            <Slide up>
              <ProjectCard
                thumbnailSrc={Project1}
                title="Portfolio"
                technologies={[
                  { icon: JSIcon, title: "JS" },
                  { icon: JSIcon, title: "JS" },
                  { icon: JSIcon, title: "JS" },
                ]}
                links={[
                  { href: "#", icon: <FaGithub /> },
                  { href: "#", icon: <RiShareBoxFill /> },
                ]}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum nobis ipsa accusamus ipsum ratione, reprehenderit dolorem facilis iste quos, molestiae aliquid quam ducimus ex culpa porro totam amet illo! Maiores, dolorum laborum rerum provident saepe nihil temporibus molestias. Temporibus, excepturi ipsa. Dolores aperiam, veniam incidunt mollitia quia sapiente? Hic?"
              />
            </Slide>
            <Slide up>
              <ProjectCard
                thumbnailSrc={Project1}
                title="Portfolio"
                technologies={[
                  { icon: JSIcon, title: "JS" },
                  { icon: JSIcon, title: "JS" },
                  { icon: JSIcon, title: "JS" },
                ]}
                links={[
                  { href: "#", icon: <FaGithub /> },
                  { href: "#", icon: <RiShareBoxFill /> },
                ]}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum nobis ipsa accusamus ipsum ratione, reprehenderit dolorem facilis iste quos, molestiae aliquid quam ducimus ex culpa porro totam amet illo! Maiores, dolorum laborum rerum provident saepe nihil temporibus molestias. Temporibus, excepturi ipsa. Dolores aperiam, veniam incidunt mollitia quia sapiente? Hic?"
              />
            </Slide>
            <Slide up>
              <ProjectCard
                thumbnailSrc={Project1}
                title="Portfolio"
                technologies={[
                  { icon: JSIcon, title: "JS" },
                  { icon: JSIcon, title: "JS" },
                  { icon: JSIcon, title: "JS" },
                ]}
                links={[
                  { href: "#", icon: <FaGithub /> },
                  { href: "#", icon: <RiShareBoxFill /> },
                ]}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum nobis ipsa accusamus ipsum ratione, reprehenderit dolorem facilis iste quos, molestiae aliquid quam ducimus ex culpa porro totam amet illo! Maiores, dolorum laborum rerum provident saepe nihil temporibus molestias. Temporibus, excepturi ipsa. Dolores aperiam, veniam incidunt mollitia quia sapiente? Hic?"
              />
            </Slide>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
