"use client";
import PageLayout from "@/components/PageLayout";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useState } from "react";
import projectOne from "@/public/images/projectOne.png";
import projectTwo from "@/public/images/projectTwo.png";
import projectThree from "@/public/images/projectThree.png";
import projectFour from "@/public/images/projectFour.png";
import projectFive from "@/public/images/projectFive.png";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { ArrowUpRight, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
    {
        id: "01",
        title: "Landing Page for Escuela Roquer",
        category: "Front End",
        description:
            "Redesigned the official website for Escuela Roquer using Node.js and Express. Delivered a fully responsive design with clean, professional styling using Vanilla CSS. Integrated advanced email automation functionality with NodeMailer to enhance user communication. This project significantly boosted the institution's online presence and improved user engagement.",
        stack: ["NodeJS", "Express", "Vanilla CSS", "NodeMailer"],
        image: projectOne,
        liveUrl: "https://escuelaroquer.com/",
        githubUrl: "https://github.com/Blacklifth/web-roquer",
    },
    {
        id: "02",
        title: "Landing Page for Peonetas Chile",
        category: "Front End",
        description:
            "Developed a mobile-first, SEO-optimized landing page for Peonetas Chile, enhancing their digital visibility and customer reach. Leveraged Node.js and Express for backend functionality, combined with modern, responsive design using Vanilla CSS. Added email integration with NodeMailer to streamline user inquiries, resulting in a more accessible and user-friendly platform.",
        stack: ["NodeJS", "Express", "Vanilla CSS", "NodeMailer"],
        image: projectTwo,
        liveUrl: "https://www.peonetaschile.com/",
        githubUrl: "https://github.com/Blacklifth/Hemmopeonetas",
    },
    {
        id: "03",
        title: "Instrument Tracking Web Application",
        category: "Full stack",
        description:
            "Created a full-stack web application for managing and tracking instruments. Designed a dynamic and interactive frontend with React, and built a scalable backend using Prisma and MongoDB. Enhanced user experience through MaterialUI for modern, intuitive interfaces. The app features robust CRUD operations, ensuring seamless and efficient data management.",
        stack: ["React", "Prisma", "MongoDB", "MaterialUI"],
        image: projectThree,
        liveUrl:
            "https://github.com/Blacklifth/papageno-inventory/tree/development",
        githubUrl:
            "https://github.com/Blacklifth/papageno-inventory/tree/development",
    },
    {
        id: "04",
        title: "Attendance Management Web App",
        category: "Full stack",
        description:
            "Developed a secure and feature-rich attendance management web app as a capstone project. Utilized Next.js for a fast and optimized frontend, Tailwind CSS for responsive design, and NextAuth with JWT for secure user authentication. Integrated MongoDB as the database solution, ensuring scalability and reliability. A project built with agile methodologies to meet real-world demands.",
        stack: ["NextJS 14", "React", "NextAuth", "JWT", "Tailwind", "MongoDB"],
        image: projectFour,
        liveUrl: "https://pt-app-deploy-ten.vercel.app/login",
        githubUrl: "https://github.com/Blacklifth/ptApp-deploy",
    },
    {
        id: "05",
        title: "Personal Portfolio Website",
        category: "Front End",
        description:
            "Showcased web development expertise through a personal portfolio site built with Next.js and React. Designed with Tailwind CSS for sleek, responsive visuals and enhanced interactivity using Motion for smooth animations.Making the site both engaging and functional. This project highlights advanced front-end skills and demonstrates a strong focus on delivering professional-grade web solutions.",
        stack: ["NextJS 14", "React", "Tailwind", "Motion"],
        image: projectFive,
        liveUrl:
            "https://myportfolio-jzf3to0je-blacklifths-projects.vercel.app/",
        githubUrl: "https://github.com/Blacklifth/myportfolio",
    },
];

const WorkPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleSlideChange = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="py-6 md:py-12">
            <PageLayout>
                <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full"
                    onSelect={(index) => {
                        if (typeof index === "number") {
                            handleSlideChange(index);
                        }
                    }}
                >
                    <CarouselContent>
                        {projects?.map((project) => (
                            <CarouselItem key={project.id}>
                                <Card className="bg-bodyColor border-lightSky/20 ">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col md:flex-row md:items-center md:space-x-8 group">
                                            {/*Description */}
                                            <div className="w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
                                                <div className="space-y-3 md:space-y-6 mt-4 md:mt-0 ">
                                                    <h2 className="text-4xl md:text-8xl leading-none font-extrabold text-transparent text-outline ">
                                                        {project?.id}
                                                    </h2>
                                                    <h3 className="text-xl md:text-3xl font-bold leading-none text-white group-hover:text-lightSky hoverEffect">
                                                        {project?.category}{" "}
                                                        project
                                                    </h3>
                                                    <p className="text-white/60 text-sm md:text-base leading-6 md:leading-normal ">
                                                        {project?.description}
                                                    </p>
                                                    <ul className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 items-center">
                                                        {project?.stack?.map(
                                                            (item, index) => (
                                                                <li
                                                                    key={index}
                                                                    className="text-xs md:text-base text-lightSky/80"
                                                                >
                                                                    {item}
                                                                    {index !==
                                                                        project
                                                                            ?.stack
                                                                            ?.length -
                                                                            1 &&
                                                                        ","}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                    <Separator className="bg-gray-700" />
                                                    <div className="flex items-center space-x-4">
                                                        <TooltipProvider>
                                                            <Tooltip>
                                                                <TooltipTrigger
                                                                    asChild
                                                                >
                                                                    <Button
                                                                        variant="outline"
                                                                        size="icon"
                                                                        className="bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/20  hover:border-lightSky hover:text-hoverColor hoverEffect"
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                project?.liveUrl
                                                                            }
                                                                            target="_blank"
                                                                        >
                                                                            <ArrowUpRight />
                                                                            <span className="sr-only">
                                                                                View
                                                                                Live
                                                                                Project
                                                                            </span>
                                                                        </Link>
                                                                    </Button>
                                                                </TooltipTrigger>
                                                                <TooltipContent className="bg-white text-black font-semibold">
                                                                    <p>
                                                                        View
                                                                        Live
                                                                        Project
                                                                    </p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                        <TooltipProvider>
                                                            <Tooltip>
                                                                <TooltipTrigger
                                                                    asChild
                                                                >
                                                                    <Button
                                                                        variant="outline"
                                                                        size="icon"
                                                                        className="bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/20  hover:border-lightSky hover:text-hoverColor hoverEffect"
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                project?.githubUrl
                                                                            }
                                                                            target="_blank"
                                                                        >
                                                                            <GithubIcon />
                                                                            <span className="sr-only">
                                                                                View
                                                                                Github
                                                                                Repository
                                                                            </span>
                                                                        </Link>
                                                                    </Button>
                                                                </TooltipTrigger>
                                                                <TooltipContent className="bg-white text-black font-semibold">
                                                                    <p>
                                                                        View
                                                                        Github
                                                                        Repository
                                                                    </p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*Image*/}
                                            <div className="w-full md:w-1/2 order-1 md:order-2">
                                                <div className="relative h-64 md:h-96 bg-gray-700 rounded-lg overflow-hidden">
                                                    <Image
                                                        src={project?.image}
                                                        alt={project?.title}
                                                        fill
                                                        className="object-fill"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="absolute right-10 -bottom-8">
                        <CarouselPrevious className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white  hover:border-hoverColor p-5 hoverEffect" />
                        <CarouselNext className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white  hover:border-hoverColor p-5 hoverEffect" />
                    </div>
                </Carousel>
                <div className="text-transparent">{currentIndex}</div>
            </PageLayout>
        </div>
    );
};

export default WorkPage;
