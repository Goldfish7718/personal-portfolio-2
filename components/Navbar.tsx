import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
import { Menu, ArrowUpRightFromSquare, Twitter, Instagram, Github, Linkedin, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import { Separator } from "./ui/separator"

const Navbar = () => {
  return (
    <>
        <nav className="p-3 px-12 sm:text-left flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl">Tejas Nanoti</h1>

            <div className="sm:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Menu />
                    </SheetTrigger>
                    <SheetContent>
                        <div className="mt-5">
                            <Button variant='outline' className="m-2 w-full">Home</Button>
                            <Button variant='outline' className="m-2 w-full">Projects</Button>
                            <Button variant='outline' className="m-2 w-full">Get in touch!</Button>
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
                        <MenubarTrigger className="hover:cursor-pointer">Home</MenubarTrigger>
                    </MenubarMenu>
                    {/* PROJECTS */}
                    <MenubarMenu>
                        <MenubarTrigger className="hover:cursor-pointer">Projects</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem className="hover:cursor-pointer">
                                Shelf-mates <ArrowUpRightFromSquare className="mx-2" size={18} />
                            </MenubarItem>
                            <MenubarItem className="hover:cursor-pointer">
                                Proffinder <ArrowUpRightFromSquare className="mx-2" size={18} />
                            </MenubarItem>
                            {/* <MenubarSeparator /> */}
                            <MenubarItem className="hover:cursor-pointer">
                                Promptopia <ArrowUpRightFromSquare className="mx-2" size={18} />
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>

                    {/* CONTACT */}
                    <MenubarMenu>
                        <MenubarTrigger className="hover:cursor-pointer">Socials</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem className="hover:cursor-pointer">
                                X (Twitter) <Twitter className="mx-2" size={18} />
                            </MenubarItem>
                            <MenubarItem className="hover:cursor-pointer">
                                Instagram <Instagram className="mx-2" size={18} />
                            </MenubarItem>
                            <MenubarItem className="hover:cursor-pointer">
                                LinkedIn <Linkedin className="mx-2" size={18} />
                            </MenubarItem>
                            <MenubarItem className="hover:cursor-pointer">
                                Github <Github className="mx-2" size={18} />
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </nav>
    </>
  )
}

export default Navbar