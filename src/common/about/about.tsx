import photo from "@/images/profile/profile.jpg"
import GithubSvg from "@/svg/github"
import MailSvg from "@/svg/mail"
import TistorySvg from "@/svg/tistory"
import Image from "next/image"
import Link from "next/link"

export default function About() {
    return (
        <div className="max-w-[75rem] max-sm:min-w-[380px] max-xl:w-3/4 max-xl:flex-col dark:bg-slate-800 bg-slate-100 flex justify-between my-4 mx-auto py-8 px-16 rounded-2xl shadow-custom shadow-slate-200 max-xl:items-center max-xl:px-4">
            <div className="sm:w-[22.5rem] w-64">
                <Image src={photo} alt="" className="rounded-xl" />
            </div>
            <div className="w-[22.5rem] md:w-[32.5rem] xl:w-[42.5rem] flex flex-col md:ml-4">
                <h1 className="max-xl:my-4 h-1/6 text-center font-bold text-4xl xl:text-5xl">강찬수</h1>
                <div className="h-1/6 text-center font-semibold sm:text-lg md:text-xl xl:text-2xl">
                    <p>함께 성장하는 개발자가 되고싶습니다</p>
                </div>
                <div className="h-3/6 md:text-lg xl:text-xl sm:my-2">
                    프론트엔드, 백엔드 개발 모두에 관심이 있는 신입개발자 강찬수입니다.
                    <br />
                    <br />
                    산업공학을 졸업하여 진로를 결정하던 중, 우연한 기회로 개발을 접하여 새롭게 도전을 시작했습니다.
                    매일매일 새로운 지식을 배우며 무언가를 만들고 성장하는 저를 보며 항상 뿌듯했습니다. 하지만 아직 더 많은 배움과 경험을 통해 더 많이 성장하고 싶습니다. 항상 멈추지 않고 나아가는 개발자가 되겠습니다.
                </div>
                <div className="h-1/6 max-md:text-sm">
                    <Link href='mailto:ckstn410@gmail.com' className="text-gray-400 flex hover:text-gray-300">
                        <MailSvg />
                        <div className="ml-3">
                            ckstn410@gmail.com
                        </div>
                    </Link>
                    <Link href='https://char1ey.tistory.com/' className="text-gray-400 flex hover:text-gray-300">
                        <TistorySvg />
                        <div className="ml-3">
                            https://char1ey.tistory.com/
                        </div>
                    </Link>
                    <Link href='https://github.com/char1ey95' className="text-gray-400 flex hover:text-gray-300">
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