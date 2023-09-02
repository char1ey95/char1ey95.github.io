import Logo from "@/components/logo/Logo"
import Link from "next/link"
import DarkModeBtn from "@/components/button/darkModeBtn"
import HamburgerBtn from "@/components/button/hamburgerBtn"


// .header {
//     position: fixed;
//     top: 0;
//     right: 0;
//     left: 0;
//     background-color: transparent;
//     z-index: 10;
// }

const Header = () => {
    return (
        <header className="flex justify-between h-16 items-center fixed top-0 right-0 left-0 z-10 bg-slate-50 dark:bg-slate-900">
            <div className="px-4 py-1">
                <Logo />
            </div>
            {/* <ul className={`flex justify-between menu_wrap max-md:hidden`}>
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
            </ul> */}
            <ul className={`flex justify-between menu_wrap max-md:hidden`}>
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
            </ul>
            <div className="flex justify-center items-center mr-4">
                <HamburgerBtn />
                <DarkModeBtn />
            </div>
        </header>
    )
}

export default Header