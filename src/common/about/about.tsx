import photo from "@/images/profile/profile.jpg"
import GithubSvg from "@/svg/github"
import MailSvg from "@/svg/mail"
import TistorySvg from "@/svg/tistory"
import Image from "next/image"
import Link from "next/link"

export default function About() {
    return (
        <div className="max-w-[75rem] dark:bg-slate-800 bg-slate-100 flex max-md:flex-col justify-between my-0 mx-auto py-8 px-16 rounded-2xl shadow-custom shadow-slate-200">
            <div className="w-[22.5rem]">
                <Image src={photo} alt="" className="rounded-xl" />
            </div>
            <div className="w-[22.5rem] md:w-[42.5rem] flex flex-col">
                <h1 className="max-md:my-4 h-1/6 text-center font-bold text-4xl md:text-5xl">강찬수</h1>
                <div className="h-1/6 text-center font-semibold text-xl md:text-2xl">
                    <p>함께 성장하는 개발자가 되고싶습니다</p>
                </div>
                <div className="h-3/6 text-lg md:text-xl">
                    프론트엔드, 백엔드 개발 모두에 관심이 있는 신입개발자 강찬수입니다.
                    <br />
                    <br />
                    산업공학을 졸업하여 진로를 결정하던 중, 우연한 기회로 개발을 접하여 새롭게 도전을 시작했습니다.
                    매일매일 새로운 지식을 배우며 무언가를 만들고 성장하는 저를 보며 항상 뿌듯했습니다. 하지만 아직 더 많은 배움과 경험을 통해 더 많이 성장하고 싶습니다. 항상 멈추지 않고 나아가는 개발자가 되겠습니다.
                </div>
                <div className="h-1/6">
                    <Link href='mailto:ckstn410@gmail.com' className="text-gray-400 flex">
                        <MailSvg />
                        <div className="ml-3">
                            ckstn410@gmail.com
                        </div>
                    </Link>
                    <Link href='https://char1ey.tistory.com/' className="text-gray-400 flex">
                        <TistorySvg />
                        <div className="ml-3">
                            https://char1ey.tistory.com/
                        </div>
                    </Link>
                    <Link href='https://github.com/char1ey95' className="text-gray-400 flex">
                        <GithubSvg />
                        <div className="ml-3">
                            https://github.com/char1ey95
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}