import Cover from "@/components/images/cover";
import FullSeparator from "@/components/line/fullSeparator";
import SmSubject from "@/components/subjects/smSubject";

export default function ProjectCard({ url }: { url: string }) {
    return (
        <div className="flex flex-col items-start gap-2.5 flex-grow flex-shrink-0 basis-0">
            <Cover url={url} />
            <SmSubject>
                프로젝트 이름
            </SmSubject>
            <FullSeparator />
        </div>
    )
}
// height: 23.375rem;
// align-self: stretch;