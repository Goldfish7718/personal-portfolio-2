"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import {
  ArrowUpRightFromSquare,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Settings,
  User,
} from "lucide-react";
import { Separator } from "./ui/separator";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiClerk,
  SiDjango,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGooglegemini,
  SiHono,
  SiMongodb,
  SiShadcnui,
  SiStripe,
  SiZod,
} from "react-icons/si";
import { scrollToElement } from "./Navbar";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { SiPostgresql } from "react-icons/si";
import WordRotate from "./ui/word-rotate";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import projects from "@/data/projects.json";
import ProjectCard from "./ProjectCard";

const Hero = () => {
  return (
    <>
      {/* HERO */}
      <div className="h-screen flex flex-col items-center flex-grow" id="home">
        {/* LANDING PAGE */}
        <div className="mx-4 my-8 sm:my-0 text-left">
          <h1 className="mt-52 text-3xl lg:text-5xl text-purple-500 animate-fade-in">
            Crafting Digital Experiences
          </h1>
          <div className="flex flex-row items-center">
            <h1
              className="text-3xl lg:text-5xl mt-0.5 sm:mt-1 animate-fade-in text-purple-700"
              style={{ animationFillMode: "backwards", animationDelay: ".7s" }}>
              for &nbsp;
            </h1>
            <WordRotate
              words={["Brands", "Startups", "Companies"]}
              className="text-3xl lg:text-5xl mt-0.5 sm:mt-1 animate-fade-in text-purple-800"
            />
          </div>

          <p
            className="text-left py-4 text-sm sm:text-lg animate-fade-in"
            style={{ animationFillMode: "backwards", animationDelay: "1.4s" }}>
            Passionate Full Stack Web Developer based in India. Machine Learning
            | Blockchain | Open-source
          </p>

          <div className="z-10 flex items-center justify-start">
            <div
              className={cn(
                "group rounded-full border border-purple-500 bg-purple-200 text-base transition-all ease-in hover:cursor-pointer hover:bg-purple-400"
              )}>
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-purple-600 hover:duration-300">
                <span>✨ 600+ Contributions in 2024</span>
              </AnimatedShinyText>
            </div>
          </div>

          <div
            className="mt-6 flex flex-row mb-20 animate-fade-vertical-in"
            style={{ animationFillMode: "backwards", animationDelay: "2.1s" }}>
            <Button
              className="mr-3 w-50"
              onClick={() => scrollToElement("projects")}>
              View Projects
            </Button>
            <Button className="mr-3 w-50" variant="secondary" asChild>
              <Link href="https://github.com/goldfish7718">
                Github <Github size={18} className="mx-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* ABOUT ME */}
        <div className="mx-4 text-center" id="about-me">
          <h1 className="mt-20 text-3xl lg:text-5xl">
            Heyy There! I&apos;m Tejas!
          </h1>

          <div className="flex flex-col sm:flex-row md:mt-0 mt-6 ">
            <Card className="m-1 my-4 sm:m-4 md:m-6 md:my-12 sm:w-1/2 flex flex-col">
              <CardHeader>
                <CardTitle className="flex flex-row justify-center sm:justify-between">
                  About me <User size={24} className="mx-1" />
                </CardTitle>
              </CardHeader>
              <Separator />
              <CardContent className="p-4 text-center sm:text-left flex-grow">
                <p>
                  I am a full-stack web developer with a fervent passion for
                  machine learning and blockchain tech. Armed with a keen eye
                  for detail and a creative approach to problem-solving, I craft
                  seamless digital experiences that captivate users. My
                  enthusiasm for exploring the intricacies of machine learning
                  fuels my drive to innovate and push boundaries in both web
                  development and AI technology.
                </p>
              </CardContent>
            </Card>
            <Card className="m-1 my-4 sm:m-4 md:m-6 md:my-12 sm:w-1/2">
              <CardHeader>
                <CardTitle className="flex flex-row justify-center sm:justify-between">
                  Top Technologies <Settings size={24} className="mx-1" />
                </CardTitle>
              </CardHeader>
              <Separator />
              <CardContent className="p-4 grid grid-cols-3 grid-rows-5 gap-2 items-center sm:items-start">
                <div className="flex flex-row my-2">
                  <FaReact size={24} className="mx-2" /> React
                </div>
                <div className="flex flex-row my-2">
                  <TbBrandNextjs size={24} className="mx-2" /> Next.js
                </div>
                <div className="flex flex-row my-2">
                  <SiExpress size={24} className="mx-2" /> Express
                </div>
                <div className="flex flex-row my-2">
                  <SiMongodb size={24} className="mx-2" /> MongoDB
                </div>
                <div className="flex flex-row my-2">
                  <FaNodeJs size={24} className="mx-2" /> Node.js
                </div>
                <div className="flex flex-row my-2">
                  <SiPostgresql size={24} className="mx-2" /> Postgres
                </div>
                <div className="flex flex-row my-2">
                  <SiShadcnui size={24} className="mx-2" /> shadcn/ui
                </div>
                <div className="flex flex-row my-2">
                  <SiZod size={24} className="mx-2" /> Zod
                </div>
                <div className="flex flex-row my-2">
                  <SiClerk size={24} className="mx-2" /> Clerk
                </div>
                <div className="flex flex-row my-2">
                  <SiFastapi size={24} className="mx-2" /> FastAPI
                </div>
                <div className="flex flex-row my-2">
                  <SiStripe size={24} className="mx-2" /> Stripe
                </div>
                <div className="flex flex-row my-2">
                  <SiFlask size={24} className="mx-2" /> Flask
                </div>
                <div className="flex flex-row my-2">
                  <SiDjango size={24} className="mx-2" /> Django
                </div>
                <div className="flex flex-row my-2">
                  <SiGooglegemini size={24} className="mx-2" /> Gemini
                </div>
                <div className="flex flex-row my-2">
                  <SiHono size={24} className="mx-2" /> Hono
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* PROJECTS */}
        <div id="projects" className="text-center">
          <h1 className="mt-20 text-3xl lg:text-5xl">Noteable Projects</h1>

          <div className="flex flex-col md:flex-row m-2 mt-10 text-left">
            {projects.map((project, index) => (
              <ProjectCard {...project} />
            ))}
          </div>
        </div>

        {/* SOCIALS */}
        <div className="text-center pt-24 my-8 sm:my-0" id="socials">
          <div className="mx-2 sm:mx-16">
            <h1 className="text-3xl sm:text-4xl">
              Interested in working together?
              <br />
              Let&apos;s connect <span className="text-green-500">&&</span>{" "}
              build together!
            </h1>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 m-2 mt-10 sm:m-8 md:m-12">
            <Button
              className="p-8 m-2 sm:m-4 sm:p-16"
              variant="secondary"
              asChild>
              <Link href="https://twitter.com/tejas_jsx">
                <FaXTwitter size={24} className="mx-2" />X
              </Link>
            </Button>
            <Button
              className="p-8 m-2 sm:m-4 sm:p-16"
              variant="secondary"
              asChild>
              <Link href="https://instagram.com/tejasssssssss__">
                <Instagram className="mx-2" /> Instagram
              </Link>
            </Button>
            <Button
              className="p-8 m-2 sm:m-4 sm:p-16"
              variant="secondary"
              asChild>
              <Link href="https://github.com/goldfish7718">
                <Github className="mx-2" /> Github
              </Link>
            </Button>
            <Button
              className="p-8 m-2 sm:m-4 sm:p-16"
              variant="secondary"
              asChild>
              <Link href="https://bento.me/tejasnanoti">
                <User className="mx-2" /> Bento
              </Link>
            </Button>
            <Button
              className="p-8 m-2 sm:m-4 sm:p-16"
              variant="secondary"
              asChild>
              <Link href="https://www.linkedin.com/in/tejas-nanoti-23965823b/">
                <Linkedin className="mx-2" /> LinkedIn
              </Link>
            </Button>
            <Button
              className="p-8 m-2 sm:m-4 sm:p-16"
              variant="secondary"
              asChild>
              <Link href="mailto:tejasnanoti2@gmail.com">
                <Mail className="mx-2" /> Email
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-5 mb-10">
          <Button className="flex flex-row" asChild>
            <Link href="https://github.com/goldfish7718/personal-portfolio-2">
              Codebase on Github{" "}
              <ArrowUpRightFromSquare size={18} className="mx-1" />
            </Link>
          </Button>
        </div>

        {/* FOOTER */}
        <Separator />
        <div className="p-4">
          <p>Made With &lt;3 by Tejas</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
