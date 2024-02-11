"use client"

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"  
import { Button } from './ui/button'
import { ArrowUpRightFromSquare, Badge, Github, Settings, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Separator } from './ui/separator'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiExpress, SiMongodb } from 'react-icons/si'

const Hero = () => {

    const router = useRouter()

  return (
    <>
        {/* HERO */}
        <div className='h-screen flex flex-col items-center flex-grow'>
            <div className='mx-4 text-center'>
                <h1 className='mt-40 text-3xl lg:text-5xl dark:text-gray-400 text-gray-800'>Crafting Digital Experiences</h1>
                <h1 className='text-3xl lg:text-5xl mt-0.5 sm:mt-1'>for Brands & Startups</h1>
            </div>

            <div className='pt-8 sm:mx-24'>
                <p className='text-center text-sm sm:text-lg'>
                    Passionate Full Stack Web Developer based in India. Freelancer. Open-source contributor & to-be Machine Learning Enginner!
                </p>
            </div>

            <div className='mt-6 mx-8 flex flex-row'>
                <Button className='mx-3 w-50'>View Projects <ArrowUpRightFromSquare size={18} className='mx-1' /></Button>
                <Button className='mx-3 w-50' variant='secondary' onClick={() => router.push('https://github.com/goldfish7718')}>Github <Github size={18} className='mx-1' /></Button>
            </div>


            {/* ABOUT ME */}
            <div className='mx-4 text-center'>
                <h1 className='mt-40 text-3xl lg:text-5xl'>Heyy There! I'm Tejas!</h1>

                <div className='flex flex-col sm:flex-row'>
                    <Card className='m-4 sm:m-8 md:my-12 md:w-1/2'>
                        <CardHeader>
                            <CardTitle className='flex flex-row justify-center sm:justify-between'>About me <User size={24} className='mx-1' /></CardTitle>
                        </CardHeader>
                        <Separator />
                        <CardContent className='p-4 text-center sm:text-left'>
                            <p>
                                I am a dynamic full-stack web developer with a fervent passion for machine learning. Armed with a keen eye for detail and a creative approach to problem-solving, I craft seamless digital experiences that captivate users. My enthusiasm for exploring the intricacies of machine learning fuels my drive to innovate and push boundaries in both web development and AI technology.                            
                            </p>
                        </CardContent>
                        <Separator />
                        <CardFooter className='flex justify-center sm:justify-start'>
                            <Button className='mt-4' variant='outline' onClick={() => router.push('https://github.com/goldfish7718')}>View Github Profile <Github size={18} className='mx-1' /></Button>
                        </CardFooter>
                    </Card>
                    <Card className='m-4 sm:m-8 md:my-12 md:w-1/2'>
                        <CardHeader>
                            <CardTitle className='flex flex-row justify-center sm:justify-between'>Top Technologies <Settings size={24} className='mx-1' /></CardTitle>
                        </CardHeader>
                        <Separator />
                        <CardContent className='p-4 text-center sm:text-left'>
                            <div className='flex flex-row my-2'><FaReact size={24} className='mx-2' /> React</div>
                            <div className='flex flex-row my-2'><TbBrandNextjs size={24} className='mx-2' /> Next.js</div>
                            <div className='flex flex-row my-2'><SiExpress size={24} className='mx-2' /> Express</div>
                            <div className='flex flex-row my-2'><SiMongodb size={24} className='mx-2' /> MongoDB</div>
                            <div className='flex flex-row my-2'><FaNodeJs size={24} className='mx-2' /> Node.js</div>
                        </CardContent>
                        <Separator />
                        <CardFooter className='flex justify-center sm:justify-start'>
                            <Button className='mt-4' variant='outline' onClick={() => router.push('https://github.com/goldfish7718/Shelf-mates')}>View MERN Stack Project <ArrowUpRightFromSquare size={18} className='mx-1' /></Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero