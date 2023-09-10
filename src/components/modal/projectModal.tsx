'use client'
import Image from "next/image"
import { Dispatch, SetStateAction, useEffect, useRef } from "react"
import ProjectSubject from "../subjects/projectSubject"
import StackBox from "../boxes/stackBox"
import StackList from "../list/stackList"
import ModalSubject from "../subjects/modalSubject"
import Link from "next/link"

export default function ProjectModal({ data, setIsOpen }: {
    data: IResult,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    const title = data.properties.name.title[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url
    const startDate = data.properties.workPeriod.date.start
    const endDate = data.properties.workPeriod.date.end
    const totalPeriod = new Date(endDate).getTime() - new Date(startDate).getTime()
    const frameWork = data.properties.frameWork.multi_select
    const language = data.properties.language.multi_select
    const contribute = data.properties.contribute.multi_select
    const deploy = data.properties.deploy.multi_select
    const database = data.properties.database.multi_select
    const githubLink = data.properties.github.url
    const openLink = data.properties.url.url

    useEffect(() => {
        let observer = new IntersectionObserver((e) => {
            e.forEach((v) => {
                if (v.isIntersecting) {
                    v.target.classList.add('observer_none')
                    v.target.classList.remove('observer')
                } else {
                    v.target.classList.add('observer')
                    v.target.classList.remove('observer_none')
                }
            });
        });
        containerRef.current && observer.observe(containerRef.current);
    }, []);

    return (
        <div className="flex flex-col fixed top-0 bottom-0 right-0 left-0 p-3 bg-[#93B1A6] dark:bg-[#1B262C] rounded-md w-full overflow-y-scroll transition-all" ref={containerRef}>
            <span className="fixed right-4  top-4 py-1 px-3 bg-gradient-to-r from-[#f0dfdf] to-[#DDEFBB] hover:from-[#FFFFFF] hover:to-[#e6f9c2] dark:from-[#3fa49d] dark:to-[#3f4954] dark:hover:from-[#55e0d7] dark:hover:to-[#687788] rounded font-semibold cursor-pointer hover:animate-pulse" onClick={() => {
                setIsOpen(false)
            }}>
                닫기
            </span>
            <Image src={imgSrc} alt="" width={1200} height={900} className="rounded-xl" />
            <ProjectSubject title={title} />
            <div className="mt-2">
                <div className="flex items-center pb-2">
                    <ModalSubject subject="프로젝트 기간" />
                    <div className="flex">
                        <StackBox name={(totalPeriod / (1000 * 60 * 60 * 24)).toString() + "일"} color={"white"} />
                    </div>
                </div>
                <div className="flex items-center pb-2">
                    <ModalSubject subject="주요언어" />
                    <div className="flex">
                        {
                            language.map((v, idx) => {
                                return (
                                    <StackBox key={idx} name={v.name} color={v.color} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex items-center pb-2">
                    <ModalSubject subject="프레임워크 & 라이브러리" />
                    <div className="flex">
                        {
                            frameWork.map((v, idx) => {
                                return (
                                    <StackBox key={idx} name={v.name} color={v.color} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex items-center pb-2">
                    <ModalSubject subject="데이터베이스" />
                    <div className="flex">
                        {
                            database.map((v, idx) => {
                                return (
                                    <StackBox key={idx} name={v.name} color={v.color} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex items-center pb-2">
                    <ModalSubject subject="배포" />
                    <div className="flex">
                        {
                            deploy.map((v, idx) => {
                                return (
                                    <StackBox key={idx} name={v.name} color={v.color} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex items-center pb-2">
                    <ModalSubject subject="Github" />
                    <Link href={githubLink} className="flex">
                        <StackBox name={githubLink} color={githubLink} />
                    </Link>
                </div>
                {
                    openLink === "none" ? <></> :
                        <div className="flex items-center pb-2">
                            <ModalSubject subject="링크" />
                            <Link href={openLink} className="flex">
                                <StackBox name={openLink} color={openLink} />
                            </Link>
                        </div>
                }
                <div className="flex flex-col items-center pb-2 mt-4 bg-slate-200 dark:bg-slate-600 rounded-xl">
                    <ModalSubject subject="담당파트" />
                    <ul className="mt-2 md:w-[36rem]">
                        {
                            contribute.map((v, idx) => {
                                return (
                                    <li key={idx} className="mt-2 text-sm list-disc mx-6 md:mx-0">
                                        {v.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}