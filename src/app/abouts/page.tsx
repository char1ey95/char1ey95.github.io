import LgTextBox from "@/components/boxes/lgTextBox"
import Separator from "@/components/line/separator"
import MSubject from "@/components/subjects/mSubject"

const Abouts = () => {
    return (
        <div className="mt-16">
            <MSubject>About</MSubject>
            <Separator />
            <LgTextBox>
                이곳에 적힐 내용은 나에 대한 간단한 설명이면 된다
                <br />
                아래에 들어갈 내용은 기존 포트폴리오의 내용 가져오면됌
            </LgTextBox>
            <div>대략 6개의 박스가 올 공간</div>
        </div>
    )
}

export default Abouts