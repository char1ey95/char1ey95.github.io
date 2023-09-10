'use client'
import { Dispatch, SetStateAction } from "react"

export default function ProjectModal({ data, setIsOpen }: {
    data: IResult,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
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

    return (
        <div className="flex flex-col w-full fixed bg-slate-400 top-0 bottom-0 right-0 left-0 rounded-md p-3 overflow-y-scroll">
            <div className="flex justify-end w-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14 p-2 hover:animate-pulse duration-1000 cursor-pointer hover:p-0" onClick={() => setIsOpen(false)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
    )
}