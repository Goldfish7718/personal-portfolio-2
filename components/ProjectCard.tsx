import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRightFromSquare, Github } from "lucide-react";

type ProjectCardProps = {
  title: string;
  badge: string;
  image: string;
  description: string;
  github: string;
  link: string;
};

const ProjectCard = ({
  title,
  badge,
  image,
  description,
  github,
  link,
}: ProjectCardProps) => {
  return (
    <Card className="m-2 md:w-1/3 flex flex-col">
      <CardHeader className="flex flex-row justify-between items-center sm:flex-col lg:flex-row">
        <CardTitle>{title}</CardTitle>
        <Badge
          variant="secondary"
          className="sm:text-xs bg-purple-200 border-purple-500">
          {badge}
        </Badge>
      </CardHeader>
      <Separator />
      <CardContent className="p-2 flex-grow">
        <Image
          alt="shelf-mates image"
          className="mx-auto"
          src={image}
          width={400}
          height={300}
          // objectFit="cover"
        />
        <Separator />

        <p>{description}</p>
      </CardContent>
      <Separator />
      <CardFooter className="flex flex-row p-3">
        <Button className="flex-grow m-2" asChild>
          <Link href={github}>
            <Github size={24} />
          </Link>
        </Button>
        <Button className="flex-grow m-2" variant="secondary" asChild>
          <Link href={link}>
            <ArrowUpRightFromSquare size={24} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
