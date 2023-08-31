import ProjectCard from "@/common/project/project"
import SubjectSeparator from "@/components/line/subjectSeparator"
import MSubject from "@/components/subjects/mSubject"

const Projects = () => {
    return (
        <div className="flex py-6 px-40 flex-col items-center gap-6 self-stretch">
            <div className="flex flex-col items-center">
                <MSubject>Project</MSubject>
                <SubjectSeparator />
            </div>
            <div className="flex w-[68.8125rem] justify-center items-center gap-[4.6875rem]">
                <ProjectCard url="https://nftin-wallet-bucket.s3.ap-northeast-2.amazonaws.com/uploads/%EC%B1%84%ED%8C%85.gif" />
                <ProjectCard url="https://nftin-wallet-bucket.s3.ap-northeast-2.amazonaws.com/uploads/%EC%B1%84%ED%8C%85.gif" />
            </div>
        </div>
    )
}

export default Projects