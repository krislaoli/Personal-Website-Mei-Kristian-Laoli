"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Celebs Minds",
    description:
      "The app is designed with a user-friendly interface, making it easy for users to play and navigate through the interesting questions. I ensure that users can enjoy a smooth experience with a clear and responsive scoring system as well as additional features such as leaderboards to motivate healthy competition among players.",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/krislaoli/Trivia-Games",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Circle APP",
    description:
      "This is Circle, a website that I have created, as a social media inspired by the threads application Twitter/X, which has features such as Post thread, Follow user and unfollow, Search user, Edit profile",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/krislaoli/Circle-App-Front-End",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Hummanoid AI Web",
    description:
      "I was inspired to create this website due to the increasing use of robots to replace human jobs in the current technology era. Therefore, I have developed this website for the sale of robots, which can showcase features such as purchasing.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/krislaoli/Humanoid-AI-Product",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Todo Ways",
    description:
      "This Android application is designed to introduce training/study, this application is also made with several dynamic features",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/krislaoli/ToDo-Ways",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
