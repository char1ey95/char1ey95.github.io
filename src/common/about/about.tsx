import Separator from "@/components/line/separator"
import MSubject from "@/components/subjects/mSubject"
import photo from "@/images/profile/profile.jpg"
import GithubSvg from "@/svg/github"
import MailSvg from "@/svg/mail"
import TistorySvg from "@/svg/tistory"
import Image from "next/image"
import Link from "next/link"

export default function About() {
    return (
        <div className="mt-16 xl:mt-0 xl:h-[60rem] flex flex-col justify-center items-center">
            <MSubject>About</MSubject>
            <Separator />
            <div className="mx-4 my-4 px-8 py-4 xl:py-8 flex flex-col xl:flex-row justify-center xl:justify-around items-center rounded-lg md:w-[45rem] lg:w-[42rem] xl:w-[66rem] 2xl:w-[72rem] bg-stone-200 dark:bg-stone-800">
                <div className="mx-auto xl:mx-0 my-4 xl:my-0 w-64 sm:w-80 md:w-96 xl:w-1/4">
                    <Image src={photo} alt="" className="rounded-xl mx-auto" />
                </div>
                <div className="flex flex-col lg:w-[30rem] xl:w-3/5">
                    <h1 className="my-2 md:my-4 text-4xl text-center font-bold">강찬수</h1>
                    <div className="my-2 text-lg md:text-xl lg:text-2xl text-center font-semibold">
                        <p>함께 성장하는 <br className="sm:hidden" /> 개발자가 되고싶습니다</p>
                    </div>
                    <div className="md:text-lg lg:text-xl">
                        프론트엔드, 백엔드 개발 모두에 관심이 있는 신입개발자 강찬수입니다.
                        <br />
                        <br />
                        산업공학을 졸업하여 진로를 결정하던 중, 우연한 기회로 개발을 접하여 새롭게 도전을 시작했습니다.
                        매일매일 새로운 지식을 배우며 무언가를 만들고 성장하는 저를 보며 항상 뿌듯했습니다. 하지만 아직 더 많은 배움과 경험을 통해 더 많이 성장하고 싶습니다. 항상 멈추지 않고 나아가는 개발자가 되겠습니다.
                    </div>
                    <div className="mt-4 mb-2 text-sm md:text-base lg:text-lg">
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
        </div>
    )
}