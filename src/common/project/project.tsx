
import ProjectCard from "@/components/cards/projectCard";
import SimpleDesc from "@/components/description/simpleDesc";
import SubjectSeparator from "@/components/line/subjectSeparator"
import MSubject from "@/components/subjects/mSubject"
import { DATABASE_ID, options } from "@/config";

const Project = async () => {

    const getData = async () => {
        const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    }

    const response = await getData()

    const projectItems = response.results

    return (
        <div id="projects" className="py-16 bg-[#F3FDE8] dark:bg-zinc-700">
            <div className="">
                <MSubject>Project</MSubject>
                <SubjectSeparator />
                <SimpleDesc>진행해왔던 프로젝트입니다</SimpleDesc>
            </div>
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-y-4 justify-items-center">
                {
                    projectItems.map((v: any, idx: number) => (
                        <ProjectCard key={idx} data={v} />
                    ))
                }
            </div>
        </div>
    )
}

export default Project