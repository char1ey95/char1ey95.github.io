import LgTextBox from "@/components/boxes/lgTextBox"
import HeroBtn from "@/components/button/HeroBtn"
import HeroSeparator from "@/components/line/heroSeparator"
import LgSubject from "@/components/subjects/lgSubject"
import Link from "next/link"

export default function Hero() {
    return (
        <div id="home" className="flex w-full h-screen py-6 flex-col justify-center items-center gap-2.5 relative before:absolute before:bg-hero-pattern before:bg-no-repeat before:bg-cover before:content-[' '] before:top-0 before:bottom-0 before:right-0 before:left-0 before:-z-20 after:absolute after:bg-cover after:content-[' '] after:top-0 after:bottom-0 after:right-0 after:left-0 after:-z-10 after:bg-gradient-to-br after:from-[#603813] after:to-[#947e72] after:opacity-30">
            <div className="flex flex-col justify-center items-center gap-6 self-stretch">
                <div className="flex flex-col justify-center items-center gap-6 self-stretch text-stone-100">
                    <LgSubject>
                        신입 개발자, 강찬수입니다
                    </LgSubject>
                    <HeroSeparator />
                    <LgTextBox>
                        멈추지 않고 끊임없이 성장하는 개발자가 되도록 노력하겠습니다.
                    </LgTextBox>
                </div>
                <div className="flex w-[30rem] justify-center items-center gap-16 max-md:w-[20rem]">
                    <Link
                        href={"#abouts"}
                        className="mt-16 py-4 px-8 rounded-[10rem] bg-gradient-to-r from-[#f46b45] to-[#eea849] dark:bg-[#1A120B] animate-bounce font-extrabold shadow-lg text-slate-100 dark:text-slate-100">
                        프로젝트 바로가기
                    </Link>
                </div>
            </div>
        </div >
    )
}
