import MTextBox from "@/components/boxes/mTextBox";
import Cover from "@/components/images/cover";
import FullSeparator from "@/components/line/fullSeparator";
import SmSubject from "@/components/subjects/smSubject";

export default function ProjectCard({ url }: { url: string }) {
    return (
        <div className="flex flex-col items-start gap-2.5 flex-grow flex-shrink-0 basis-0 w-1/2">
            <Cover url={url} />
            <SmSubject>
                프로젝트 이름
            </SmSubject>
            <FullSeparator />
            <MTextBox>
                회원가입, 카카오 로그인, 글쓰기, 실시간 채팅 등의 기능이 구현되어있습니다
                회원가입, 카카오 로그인, 글쓰기, 실시간 채팅 등의 기능이 구현되어있습니다
                회원가입, 카카오 로그인, 글쓰기, 실시간 채팅 등의 기능이 구현되어있습니다
                회원가입, 카카오 로그인, 글쓰기, 실시간 채팅 등의 기능이 구현되어있습니다
            </MTextBox>
        </div>
    )
}
// height: 23.375rem;
// align-self: stretch;