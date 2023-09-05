import LgTextBox from "@/components/boxes/lgTextBox"
import HeroBtn from "@/components/button/HeroBtn"
import Separator from "@/components/line/separator"
import LgSubject from "@/components/subjects/lgSubject"
import Image from 'next/image'

export default function Hero() {
    return (
        <div className="flex w-full py-6 flex-col justify-center items-center gap-2.5 h-[30rem]">
            <div className="flex flex-col justify-center items-center gap-6 self-stretch">
                <div className="flex flex-col justify-center items-center gap-6 self-stretch">
                    <LgSubject>
                        신입 개발자, 강찬수의 포트폴리오입니다
                    </LgSubject>
                    <Separator />
                    <LgTextBox>
                        멈추지 않고 끊임없이 성장하는 개발자가 되도록 노력하겠습니다.
                    </LgTextBox>
                </div>
                <div className="flex w-[30rem] justify-center items-center gap-16 max-md:w-[20rem]">
                    <HeroBtn>Projects</HeroBtn>
                    <HeroBtn>Contact</HeroBtn>
                </div>
            </div>
        </div>
    )
}
