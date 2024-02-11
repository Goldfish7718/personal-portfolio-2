"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
import { Menu, ArrowUpRightFromSquare, Twitter, Instagram, Github, Linkedin } from "lucide-react"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import { Separator } from "./ui/separator"

const Navbar = () => {

    const scrollToElement = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }; // Empty dependency array ensures the effect runs only once after the component mounts
      };

  return (
    <>
        <nav className="p-4 py-6 sm:p-3 sm:mt-0 sm:text-left flex justify-between items-center z-10 fixed w-full bg-white dark:bg-[#0a0a0a] bg-opacity-90 backdrop-blur-sm">
            <h1 className="text-xl sm:text-2xl">Tejas Nanoti</h1>

            <div className="sm:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Menu />
                    </SheetTrigger>
                    <SheetContent>
                        <div className="mt-5">
                            <SheetClose>
                                <Button variant='outline' className="m-2 w-full" onClick={() => scrollToElement('about-me')}>About me</Button>
                                <Button variant='outline' className="m-2 w-full" onClick={() => scrollToElement('projects')}>Projects</Button>
                                <Button variant='outline' className="m-2 w-full" onClick={() => scrollToElement('socials')}>Get in touch!</Button>
                            </SheetClose>
                            <ModeToggle className="w-full" />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            <div className="hidden sm:flex flex-row items-center">
                <ModeToggle className='ml-auto' />
                <Menubar>
                    {/* HOME */}
                    <MenubarMenu>
                        <MenubarTrigger onClick={() => scrollToElement('home')} className="hover:cursor-pointer" >Home</MenubarTrigger>
                    </MenubarMenu>
                    {/* ABOUT ME */}
                    <MenubarMenu>
                        <MenubarTrigger onClick={() => scrollToElement('about-me')} className="hover:cursor-pointer" >About me</MenubarTrigger>
                    </MenubarMenu>
                    {/* PROJECTS */}
                    <MenubarMenu>
                        <MenubarTrigger className="hover:cursor-pointer" onClick={() => scrollToElement('projects')}>Projects</MenubarTrigger>
                    </MenubarMenu>
                    {/* CONTACT */}
                    <MenubarMenu>
                        <MenubarTrigger className="hover:cursor-pointer" onClick={() => scrollToElement('socials')}>Socials</MenubarTrigger>
                    </MenubarMenu>
                </Menubar>
            </div>
        </nav>
        <Separator />
    </>
  )
}

export default Navbar