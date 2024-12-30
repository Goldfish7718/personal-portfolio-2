"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import Image from "next/image";
import { Badge } from "./ui/badge";
import { scrollToElement } from "./Navbar";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { SiPostgresql } from "react-icons/si";
import WordRotate from "./ui/word-rotate";

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
              <Separator />
              <CardFooter className="flex justify-center sm:justify-start">
                <Button className="mt-4" variant="outline" asChild>
                  <Link href="https://github.com/goldfish7718">
                    View Github Profile <Github size={18} className="mx-1" />
                  </Link>
                </Button>
              </CardFooter>
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
              <Separator />
              <CardFooter className="flex justify-center sm:justify-start">
                <Button className="mt-4" variant="outline" asChild>
                  <Link href="https://github.com/goldfish7718/Shelf-mates">
                    View MERN Stack Project{" "}
                    <ArrowUpRightFromSquare size={18} className="mx-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* PROJECTS */}
        <div id="projects" className="text-center">
          <h1 className="mt-20 text-3xl lg:text-5xl">Noteable Projects</h1>

          <div className="flex flex-col md:flex-row m-2 mt-10 text-left">
            {/* PROJECT SHELF-MATES */}
            <Card className="m-2 md:w-1/3 flex flex-col">
              <CardHeader className="flex flex-row justify-between items-center sm:flex-col lg:flex-row">
                <CardTitle>Shelf-mates</CardTitle>
                <Badge variant="secondary" className="sm:text-xs">
                  MERN Stack + Chakra UI
                </Badge>
              </CardHeader>
              <Separator />
              <CardContent className="p-2 flex-grow">
                <Image
                  alt="shelf-mates image"
                  className="mx-auto"
                  src="/shelf-mates.png"
                  width={400}
                  height={300}
                  objectFit="cover"
                />
                <Separator />

                <p>
                  Shelf Mates is an E-commerce Grocery Delivery platform with
                  customer and admin sides. Customers enjoy full CRUD operations
                  for profiles, carts, orders, reviews, and addresses. The admin
                  side boasts an Admin Dashboard with insightful data
                  visualizations using the Recharts library, offering
                  product-specific statistics like sales, ratings, and customer
                  feedback. The backend, powered by MongoDB and Express, hosts a
                  secure authentication system using JWT stored in cookies.
                </p>
              </CardContent>
              <Separator />
              <CardFooter className="flex flex-row p-3">
                <Button className="flex-grow m-2" asChild>
                  <Link href="https://github.com/Goldfish7718/shelf-mates">
                    <Github size={24} />
                  </Link>
                </Button>
                <Button className="flex-grow m-2" variant="secondary" asChild>
                  <Link href="https://shelfmates.vercel.app">
                    <ArrowUpRightFromSquare size={24} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* PROJECT Dev.hike */}
            <Card className="m-2 md:w-1/3 flex flex-col">
              <CardHeader className="flex flex-row justify-between items-center sm:flex-col lg:flex-row">
                <CardTitle>Dev.hike</CardTitle>
                <div className="flex sm:flex-row flex-col">
                  <Badge
                    variant="secondary"
                    className="mx-1 my-1 sm:my-0 sm:text-xs">
                    MERN Stack + shadcn/ui
                  </Badge>
                </div>
              </CardHeader>
              <Separator />
              <CardContent className="p-2 flex-grow">
                <Image
                  alt="dev.hike image"
                  className="mx-auto"
                  src="/devhike.png"
                  width={400}
                  height={300}
                  objectFit="cover"
                />
                <Separator />

                <p>
                  Dev.hike is a social media platform intended for software
                  developers and enthusiasts. Dev.hike will provide certain
                  features like posts, discussion forums and most importantly,
                  documenting their development journey. Dev.hike will be built
                  on the MERN stack with Shadcn-ui as the design system & Clerk
                  for powering authentication.{" "}
                </p>
              </CardContent>
              <Separator />
              <CardFooter className="flex flex-row p-3">
                <Button className="flex-grow m-2" asChild>
                  <Link href="https://github.com/Goldfish7718/Dev.hike">
                    <Github size={24} />
                  </Link>
                </Button>
                <Button className="flex-grow m-2" variant="secondary" asChild>
                  <Link href="https://devhike.vercel.app">
                    <ArrowUpRightFromSquare size={24} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* PROJECT BRANCH PROMPT */}
            <Card className="m-2 md:w-1/3 flex flex-col">
              <CardHeader className="flex flex-row justify-between items-center sm:flex-col lg:flex-row">
                <CardTitle>Brach-prompt</CardTitle>
                <Badge className="sm:text-xs" variant="secondary">
                  Next.js + shadcn/ui
                </Badge>
              </CardHeader>
              <Separator />
              <CardContent className="p-2 flex-grow">
                <Image
                  alt="branch-prompt image"
                  className="mx-auto"
                  src="/branch-prompt.png"
                  width={400}
                  height={300}
                  objectFit="cover"
                />
                <Separator />

                <p>
                  Branch-prompt is an online social platform which let&apos;s
                  students from my college post anonymous prompts anonymously!
                  This is a single-page applicationI built with Next.js,
                  Shadcn-UI & Tailwind CSS. It uses MongoDB for its primary
                  database. The platform is completely anonymous since it does
                  not collect name or hints about the user so Branch-prompt is
                  100% anonymous.
                </p>
              </CardContent>
              <Separator />
              <CardFooter className="flex flex-row p-3">
                <Button className="flex-grow m-2" asChild>
                  <Link href="https://github.com/Goldfish7718/branch-prompt">
                    <Github size={24} />
                  </Link>
                </Button>
                <Button className="flex-grow m-2" variant="secondary" asChild>
                  <Link href="https://branch-prompt.vercel.app">
                    <ArrowUpRightFromSquare size={24} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
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
