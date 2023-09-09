'use client'
import Logo from "@/components/logo/Logo"
import Link from "next/link"
import DarkModeBtn from "@/components/button/darkModeBtn"
import HamburgerBtn from "@/components/button/hamburgerBtn"
import { MouseEvent, useRef } from "react"


const Header = () => {
    const menu = useRef<HTMLUListElement>(null)

    const clickHandler = (e: MouseEvent) => {
        menu.current?.classList.contains('onMenu') ? menu.current.classList.remove('onMenu') : ''
    }

    return (
        <header className="flex justify-between h-16 items-center fixed top-0 right-0 left-0 z-10 bg-slate-200 dark:bg-slate-900" >
            <div className="px-4 py-1">
                <Logo />
            </div>
            <ul className="flex justify-between font-bold menu_wrap folded_menu transition-all" ref={menu}>
                <li>
                    <Link href={"/"} onClick={clickHandler}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={"/abouts"} onClick={clickHandler}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href={"/skills"} onClick={clickHandler}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link href={"/projects"} onClick={clickHandler}>
                        Projects
                    </Link>
                </li>
            </ul>
            <div className="flex justify-center items-center mr-4">
                <HamburgerBtn menu={menu} />
                <DarkModeBtn />
            </div>
        </header>
    )
}

export default Header