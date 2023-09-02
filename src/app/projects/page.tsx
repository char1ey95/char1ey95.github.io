import ProjectCard from "@/common/project/project"
import SubjectSeparator from "@/components/line/subjectSeparator"
import MSubject from "@/components/subjects/mSubject"
import { DATABASE_ID, options } from "@/config";

const Projects = async () => {

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
        <div className="flex py-6 px-40 flex-col gap-6 self-stretch bg-slate-400 mt-16">
            <div className="flex flex-col items-center">
                <MSubject>Project</MSubject>
                <SubjectSeparator />
            </div>
            {/* <div className="flex w-[68.8125rem] justify-center items-center gap-[4.6875rem]"> */}
            <div className="grid grid-cols-1 min-[1375px]:grid-cols-2 justify-between justify-items-center gap-4">
                {
                    projectItems.map((v: any, idx: number) => (
                        <ProjectCard key={idx} data={v} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects