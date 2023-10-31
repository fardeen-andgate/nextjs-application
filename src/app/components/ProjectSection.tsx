"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "NodeJs Calculator",
    description: "Nodejs calculator Project Using Typescript",
    image: "/assets/pictures/project1.jpg",
    tag: ["All", "Node"],
    gitUrl:
      "https://github.com/fardeen-andgate/Q1-calculator-using-typescript-and-node-js",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "NodeJs Currency Converter",
    description: "NodeJs Currency Converter Using Typescript",
    image: "/assets/pictures/project2.jpg",
    tag: ["All", "Node"],
    gitUrl: "https://github.com/fardeen-andgate/Q1-currency-converter",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "NodeJs Todo",
    description: "NodeJs TODO using Typescript",
    image: "/assets/pictures/project3.jpg",
    tag: ["All", "Node"],
    gitUrl:
      "https://github.com/fardeen-andgate/Q1-todo-using-typescript-with-nodejs",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "NodeJs ATM",
    description: "NodeJs ATM using Typescript",
    image: "/assets/pictures/project4.png",
    tag: ["All", "Node"],
    gitUrl: "https://github.com/fardeen-andgate/Q1-atm-using-typescript-nodejs",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "NodeJs Student Management System",
    description: "NodeJs OOP Using Typescript",
    image: "/assets/pictures/project5.png",
    tag: ["All", "Node"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 6,
    title: "NextJs Portfolio Web Application",
    description: "Elegant Portfolio Web Application With NextJs And Typescript",
    image: "/assets/pictures/project6.png",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "#",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag));

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-2">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Node"
          isSelected={tag === "Node"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
