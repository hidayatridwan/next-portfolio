"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { Elsie_Swash_Caps } from "next/font/google";

const projectData = [
  {
    image: "/work/1.png",
    category: "react js",
    name: "Next Portfolio",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "https://github.com",
    github: "https://github.com",
  },
  {
    image: "/work/2.png",
    category: "php",
    name: "Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "https://github.com",
    github: "https://github.com",
  },
  {
    image: "/work/3.png",
    category: "golang",
    name: "AIRBNB CLONE",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "https://github.com",
    github: "https://github.com",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "JS Portfolio",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "https://github.com",
    github: "https://github.com",
  },
  {
    image: "/work/2.png",
    category: "php",
    name: "Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "https://github.com",
    github: "https://github.com",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [projects, setProjects] = useState(projectData);

  const handleFilter = (category) => {
    if (category === "all projects") {
      setProjects(projectData);
    } else {
      const filteredData = projectData.filter(
        (project) => project.category === category
      );
      setProjects(filteredData);
    }
  };

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue="all projects" className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-[640px] mb-12 mx-auto md:border dark:border-none">
            {uniqueCategories.map((category, index) => (
              <TabsTrigger
                key={index}
                value={category}
                onClick={() => handleFilter(category)}
                className="capitalize w-[162px] md:w-auto"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
