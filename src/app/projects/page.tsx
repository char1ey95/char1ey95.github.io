import SubjectSeparator from "@/components/line/subjectSeparator"
import MSubject from "@/components/subjects/mSubject"

const Projects = () => {
    return (
        <div className="flex py-6 px-40 flex-col items-center gap-6 self-stretch">
            <div className="flex flex-col items-center">
                <MSubject>Project</MSubject>
                <SubjectSeparator />
            </div>
        </div>
    )
}

export default Projects