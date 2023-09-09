import Logo from "@/components/logo/Logo"
import GithubSvg from "@/svg/github"
import MailSvg from "@/svg/mail"
import TelSvg from "@/svg/tel"
import TistorySvg from "@/svg/tistory"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="text-gray-600 font-bold bg-[#F0F0F0] dark:bg-[#2C3333]">
            <div className="container py-6 px-4 mx-auto flex items-center justify-between sm:flex-row">
                <h1 className="min-[512px]:hidden">@ 2023 Char1ey</h1>
                <span className="inline-flex sm:ml-auto mt-0 justify-between">
                    <Link href='sms:01039968561' className="text-gray-400">
                        <TelSvg />
                    </Link>
                    <Link href='mailto:ckstn410@gmail.com' className="ml-3 text-gray-400">
                        <MailSvg />
                    </Link>
                    <Link href={'https://char1ey.tistory.com/'} className="ml-3 text-gray-400">
                        <TistorySvg />
                    </Link>
                    <Link href={'https://github.com/char1ey95?tab=repositories'} className="ml-3 text-gray-400">
                        <GithubSvg />
                    </Link>
                </span>
            </div>
        </footer>
    )
}

export default Footer