import ProjectCard from "@/common/project/project"
import SimpleDesc from "@/components/description/simpleDesc";
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
        <div className="flex py-6 px-20 flex-col gap-6 self-stretch mt-16 items-center">
            <div className="flex flex-col items-center">
                <MSubject>Project</MSubject>
                <SubjectSeparator />
                <SimpleDesc>진행해왔던 프로젝트입니다</SimpleDesc>
            </div>
            <div className="w-11/12 grid grid-cols-1 2xl:grid-cols-2 justify-between justify-items-center gap-4">
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