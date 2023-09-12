'use client'
import Logo from "@/components/logo/Logo"
import Link from "next/link"
import DarkModeBtn from "@/components/button/darkModeBtn"
import HamburgerBtn from "@/components/button/hamburgerBtn"
import { MouseEvent, useRef } from "react"
import MdDarkModeBtn from "@/components/button/MdDarkModeBtn"


const Header = () => {
    const hamburger = useRef<HTMLDivElement>(null)
    const menu = useRef<HTMLUListElement>(null)

    const clickHandler = (e: MouseEvent) => {
        menu.current?.classList.contains('onMenu') ? menu.current.classList.remove('onMenu') : ''
        hamburger.current?.classList.contains('active') ? hamburger.current.classList.remove('active') : ''
    }

    return (
        <header className="flex justify-between h-16 items-center fixed top-0 right-0 left-0 z-10 bg-[#F0F0F0] dark:bg-[#2C3333]" >
            <div className="px-4 py-1">
                <Logo />
            </div>
            <ul className="flex justify-between font-bold menu_wrap folded_menu transition-all relative" ref={menu}>
                <div className="flex justify-end absolute top-3.5 right-5">
                    <MdDarkModeBtn />
                </div>
                <li>
                    <Link href={"/"} onClick={clickHandler}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={"#projects"} onClick={clickHandler}>
                        Project
                    </Link>
                </li>
                <li>
                    <Link href={"#abouts"} onClick={clickHandler}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href={"#skills"} onClick={clickHandler}>
                        Skill
                    </Link>
                </li>
                <li>
                    <Link href={"https://char1ey.tistory.com/"} onClick={clickHandler}>
                        Blog
                    </Link>
                </li>
            </ul>
            <div className="flex justify-center items-center mr-4">
                <HamburgerBtn menu={menu} hamburger={hamburger} />
                <DarkModeBtn />
            </div>
        </header>
    )
}

export default Header