import Logo from "@/components/logo/Logo"
import Link from "next/link"
import DarkModeBtn from "@/components/button/darkModeBtn"

const Header = () => {
    return (
        <header className="header_wrap header_wrap_md">
            <div className="header header_md">
                <Logo />
                <nav className="nav nav_md">
                    <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
                    <Link href={"/about"} className="mr-5 hover:text-gray-900">About</Link>
                    <Link href={"/skills"} className="mr-5 hover:text-gray-900">Skill</Link>
                    <Link href={"/projects"} className="mr-5 hover:text-gray-900">Project</Link>
                </nav>
                <DarkModeBtn />
            </div>
        </header>
    )
}

export default Header