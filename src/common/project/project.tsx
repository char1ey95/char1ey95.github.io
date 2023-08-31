import FullSeparator from "@/components/line/fullSeparator";
import SmSubject from "@/components/subjects/smSubject";

export default function ProjectCard() {
    return (
        <div className="flex flex-col items-start gap-2.5 flex-grow flex-shrink-0 basis-0">
            <img
                className="h-[23.375rem] self-stretch"
                src="https://nftin-wallet-bucket.s3.ap-northeast-2.amazonaws.com/uploads/%EC%B1%84%ED%8C%85.gif"
                alt=""
            />
            <SmSubject>
                프로젝트 이름
            </SmSubject>
            <FullSeparator />
        </div>
    )
}
// height: 23.375rem;
// align-self: stretch;