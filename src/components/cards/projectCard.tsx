'use client'
import LinkBox from "@/components/boxes/linkBox";
import ProjectTextBox from "@/components/boxes/projectTextBox";
import StackBox from "@/components/boxes/stackBox";
import ProjectThumbNail from "@/components/images/projectThumbNail";
import FullSeparator from "@/components/line/fullSeparator";
import StackList from "@/components/list/stackList";
import ProjectSubject from "@/components/subjects/projectSubject";
import GithubSvg from "@/svg/github";
import LinkSvg from "@/svg/link";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ProjectModal from "../modal/projectModal";

export default function ProjectCard({ data }: { data: IResult }) {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null);

    const title = data.properties.name.title[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url
    const description = data.properties.description.rich_text[0].plain_text
    const startDate = data.properties.workPeriod.date.start
    const endDate = data.properties.workPeriod.date.end
    const stacks = data.properties.tag.multi_select
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
        <div className="mx-2 md:mx-4 py-4 px-2 md:px-6 max-w-[42rem] 2xl:flex 2xl:flex-col rounded-lg bg-[#93B1A6] dark:bg-[#1B262C] drop-shadow-md transition-all duration-1000" ref={containerRef}>
            <ProjectThumbNail url={imgSrc} />
            <ProjectSubject title={title} />
            <FullSeparator />
            <ProjectTextBox date={[startDate, endDate]} description={description} setIsOpen={setIsOpen} />
            {
                isOpen ? <ProjectModal data={data} setIsOpen={setIsOpen} /> : <></>
            }
            <StackList>
                {
                    stacks.map((v: IMultiSelect, idx: number) => {
                        return (
                            <StackBox key={idx} name={v.name} color={v.color} />
                        )
                    })
                }
            </StackList>
            <LinkBox>
                <Link href={githubLink} className="hover:animate-ping">
                    <GithubSvg />
                </Link>
                {
                    openLink === "none" ?
                        <></>
                        :
                        <Link href={openLink === "none" ? "" : openLink} className="hover:animate-ping">
                            <LinkSvg />
                        </Link>
                }
            </LinkBox>
        </div>
    )
}