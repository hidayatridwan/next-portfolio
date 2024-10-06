"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ProjectCard from "./ProjectCard";

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

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, velit,
            corporis pariatur earum neque repellendus, debitis corrupti expedita
            quaerat natus vel ex optio?
          </p>
          <Link href="/projects">
            <Button>See More</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slideperview={1}
            breakpoints={{
              640: { slidesPerView: 2 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            navigation
            pagination={{ clickable: true }}
          >
            {projectData.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
