import Logo from "@/components/logo/Logo"
import Link from "next/link"
import DarkModeBtn from "@/components/button/darkModeBtn"
import HamburgerBtn from "@/components/button/hamburgerBtn"

const Header = () => {
    return (
        <header className="flex justify-between h-16 items-center">
            <div className="px-4 py-1">
                <Logo />
            </div>
            <ul className="flex justify-between menu_wrap">
                <li>
                    <Link href={"/"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={"/abouts"}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href={"/skills"}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link href={"/projects"}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href={"/contacts"}>
                        Contact
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header