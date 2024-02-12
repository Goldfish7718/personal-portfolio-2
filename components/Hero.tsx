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
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from './ui/button'
import { ArrowUpRightFromSquare, Github, Instagram, Linkedin, Mail, Settings, Twitter, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Separator } from './ui/separator'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiExpress, SiMongodb } from 'react-icons/si'
import Image from 'next/image'
import { Badge } from './ui/badge'
import { scrollToElement } from './Navbar'
import Link from 'next/link'

const Hero = () => {

    const router = useRouter()

  return (
    <>
        {/* HERO */}
        <div className='h-screen flex flex-col items-center flex-grow' id='home'>
            <div className='mx-4 my-8 sm:my-0 text-center'>
                <h1 className='mt-52 text-3xl lg:text-5xl dark:text-gray-400 text-gray-800'>Crafting Digital Experiences</h1>
                <h1 className='text-3xl lg:text-5xl mt-0.5 sm:mt-1'>for Brands & Startups</h1>
            </div>

            <div className='pt-8 p-4 sm:mx-24'>
                <p className='text-center text-sm sm:text-lg'>
                    Passionate Full Stack Web Developer based in India. Freelancer. Open-source contributor & to-be Machine Learning Enginner!
                </p>
            </div>

            <div className='mt-6 mx-8 flex flex-row mb-20'>
                <Button className='mx-3 w-50' onClick={() => scrollToElement('projects')}>View Projects</Button>
                <Button className='mx-3 w-50' variant='secondary' onClick={() => router.push('https://github.com/goldfish7718')}>Github <Github size={18} className='mx-1' /></Button>
            </div>


            {/* ABOUT ME */}
            <div className='mx-4 text-center' id='about-me'>
                <h1 className='mt-20 text-3xl lg:text-5xl'>Heyy There! I&apos;m Tejas!</h1>

                <div className='flex flex-col sm:flex-row md:mt-0 mt-6 '>
                    <Card className='m-1 my-4 sm:m-4 md:m-6 md:my-12 sm:w-1/2 flex flex-col'>
                        <CardHeader>
                            <CardTitle className='flex flex-row justify-center sm:justify-between'>About me <User size={24} className='mx-1' /></CardTitle>
                        </CardHeader>
                        <Separator />
                        <CardContent className='p-4 text-center sm:text-left flex-grow'>
                            <p>
                                I am a dynamic full-stack web developer with a fervent passion for machine learning. Armed with a keen eye for detail and a creative approach to problem-solving, I craft seamless digital experiences that captivate users. My enthusiasm for exploring the intricacies of machine learning fuels my drive to innovate and push boundaries in both web development and AI technology.                            
                            </p>
                        </CardContent>
                        <Separator />
                        <CardFooter className='flex justify-center sm:justify-start'>
                            <Button className='mt-4' variant='outline' onClick={() => router.push('https://github.com/goldfish7718')}>View Github Profile <Github size={18} className='mx-1' /></Button>
                        </CardFooter>
                    </Card>
                    <Card className='m-1 my-4 sm:m-4 md:m-6 md:my-12 sm:w-1/2'>
                        <CardHeader>
                            <CardTitle className='flex flex-row justify-center sm:justify-between'>Top Technologies <Settings size={24} className='mx-1' /></CardTitle>
                        </CardHeader>
                        <Separator />
                        <CardContent className='p-4 flex flex-col items-center sm:items-start'>
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

            {/* PROJECTS */}
            <div id='projects' className='text-center'>
                <h1 className='mt-20 text-3xl lg:text-5xl'>Noteable Projects</h1>

                <div className="flex flex-col md:flex-row m-2 mt-10 text-left">

                    {/* PROJECT SHELF-MATES */}
                    <Card className='m-2 md:w-1/3 flex flex-col'>
                        <CardHeader className='flex flex-row justify-between items-center sm:flex-col lg:flex-row'>
                            <CardTitle>Shelf-mates</CardTitle>
                            <Badge variant='secondary' className='sm:text-xs'>MERN Stack + Chakra UI</Badge>
                        </CardHeader>
                        <Separator />
                        <CardContent className='p-2 flex-grow'>
                            <Image alt='shelf-mates image' className='mx-auto' src='/shelf-mates.png' width={400} height={300} objectFit='cover'/>
                            <Separator />

                            <p>
                                Shelf Mates is an E-commerce Grocery Delivery platform with customer and admin sides. Customers enjoy full CRUD operations for profiles, carts, orders, reviews, and addresses. The admin side boasts an Admin Dashboard with insightful data visualizations using the Recharts library, offering product-specific statistics like sales, ratings, and customer feedback. The backend, powered by MongoDB and Express, hosts a secure authentication system using JWT stored in cookies.
                            </p>
                        </CardContent>
                        <Separator />
                        <CardFooter className='flex flex-row p-3'>
                            <Button className='flex-grow m-2' onClick={() => router.push('https://github.com/Goldfish7718/shelf-mates')}><Github size={24} /></Button>
                            <Button className='flex-grow m-2' variant='secondary' onClick={() => router.push('https://shelfmates.vercel.app')}><ArrowUpRightFromSquare size={24} /></Button>
                        </CardFooter>
                    </Card>

                    {/* PROJECT PROFFINDER */}
                    <Card className='m-2 md:w-1/3 flex flex-col'>
                        <CardHeader className='flex flex-row justify-between items-center sm:flex-col lg:flex-row'>
                            <CardTitle>ProfFinder</CardTitle>
                            <div className='flex sm:flex-row flex-col'>
                                <Badge variant='secondary' className='mx-1 my-1 sm:my-0 sm:text-xs'>MERN Stack</Badge>
                                <Badge variant='destructive' className='mx-1 my-1 sm:my-0 sm:text-xs'>Not deployed</Badge>
                            </div>
                        </CardHeader>
                        <Separator />
                        <CardContent className='p-2 flex-grow'>
                            <Image alt='shelf-mates image' className='mx-auto' src='/proffinder.png' width={400} height={300} objectFit='cover'/>
                            <Separator />

                            <p>
                                Proffinder is a platform which lets students input a 3 queries, the professor/faculty name, the day and the time slots which will then display their location (text-format) and their current status. Proffinder is especially useful for large institutions where navigation can often be tough, or for freshers who are not aware of faculty locations. Proffinder implements authentication for faculty which lets faculty login, upload a timetable and set a current status which will be displayed for selected slots.
                            </p>
                        </CardContent>
                        <Separator />
                        <CardFooter className='flex flex-row p-3'>
                            <Button className='flex-grow m-2' onClick={() => router.push('https://github.com/Goldfish7718/proffinder')}><Github size={24} /></Button>
                        </CardFooter>
                    </Card>

                    {/* PROJECT PROMPTOPIA */}
                    <Card className='m-2 md:w-1/3 flex flex-col'>
                        <CardHeader className='flex flex-row justify-between items-center sm:flex-col lg:flex-row'>
                            <CardTitle>Promptopia</CardTitle>
                            <Badge className='sm:text-xs' variant='secondary'>Next.js + Tailwind CSS</Badge>
                        </CardHeader>
                        <Separator />
                        <CardContent className='p-2 flex-grow'>
                            <Image alt='shelf-mates image' className='mx-auto' src='/promptopia.png' width={400} height={300} objectFit='cover'/>
                            <Separator />

                            <p>
                                Promptopia is an online social platform which let&apos;s users share custom AI prompts. Users can login through Google OAuth and create AI prompts which will be displayed in a beautiful grid on the home page and can be copied by a single click. This Project was my first Next.js and Tailwind CSS Project which turned out to be pretty good!
                            </p>
                        </CardContent>
                        <Separator />
                        <CardFooter className='flex flex-row p-3'>
                            <Button className='flex-grow m-2' onClick={() => router.push('https://github.com/Goldfish7718/Promptopia')}><Github size={24} /></Button>
                            <Button className='flex-grow m-2' variant='secondary' onClick={() => router.push('https://promptopia-9qqz.onrender.com')}><ArrowUpRightFromSquare size={24} /></Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            {/* SOCIALS */}
            <div className='text-center pt-24 my-8 sm:my-0' id='socials'>
                <div className='mx-2 sm:mx-16'>
                    <h1 className='text-3xl sm:text-4xl'>
                        Interested in working together?
                        <br />
                        Let&apos;s connect <span className='text-green-500'>&&</span> build together!
                    </h1>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 m-2 mt-10 sm:m-8 md:m-12'>
                    <Button className='p-8 m-2 sm:m-4 sm:p-16' variant='secondary' onClick={() => router.push('https://twitter.com/tejas_jsx')}><Twitter className='mx-2' />X (Twitter)</Button>
                    <Button className='p-8 m-2 sm:m-4 sm:p-16' variant='secondary' onClick={() => router.push('https://instagram.com/tejasssssssss__')}><Instagram className='mx-2' /> Instagram</Button>
                    <Button className='p-8 m-2 sm:m-4 sm:p-16' variant='secondary' onClick={() => router.push('https://github.com/goldfish7718')}><Github className='mx-2' /> Github</Button>
                    <Button className='p-8 m-2 sm:m-4 sm:p-16' variant='secondary' onClick={() => router.push('https://bento.me/tejasnanoti')}><User className='mx-2' /> Bento</Button>
                    <Button className='p-8 m-2 sm:m-4 sm:p-16' variant='secondary' onClick={() => router.push('https://www.linkedin.com/in/tejas-nanoti-23965823b/')}><Linkedin className='mx-2' /> LinkedIn</Button>
                    <Button className='p-8 m-2 sm:m-4 sm:p-16' variant='secondary' onClick={() => router.push('mailto:tejasnanoti2@gmail.com')}><Mail className='mx-2' /> Email</Button>
                </div>                
            </div>

            <div className='flex justify-center items-center mt-5 mb-10'>
                <Button className='flex flex-row' onClick={() => router.push('https://github.com/goldfish7718/personal-portfolio-2')}>Codebase on Github <ArrowUpRightFromSquare size={18} className='mx-1' /></Button>
                <Button className='m-4' variant='link' asChild>
                    <Link href='https://tejasnanoti-old-portfolio.vercel.app'>
                        View Old Portfolio <ArrowUpRightFromSquare size={18} className='mx-1' />
                    </Link>
                </Button>
            </div>

            {/* FOOTER */}
            <Separator />
            <div className='p-4'>
                <p>Made With &lt;3 by Tejas</p>
            </div>
        </div>
    </>
  )
}

export default Hero