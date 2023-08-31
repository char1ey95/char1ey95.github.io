import LgTextBox from "@/components/boxes/lgTextBox"
import HeroBtn from "@/components/button/HeroBtn"
import Separator from "@/components/line/separator"
import LgSubject from "@/components/subjects/lgSubject"
import Image from 'next/image'

export default function Hero() {
    return (
        <div className="flex w-full py-6 px-64 flex-col justify-center items-center gap-2.5">
            <div className="flex flex-col justify-center items-center gap-6 self-stretch">
                <div className="flex flex-col justify-center items-center gap-6 self-stretch">
                    <LgSubject>
                        신입 개발자 강찬수입니다
                    </LgSubject>
                    <Separator />
                    <LgTextBox>
                        프론트엔드와 백엔드 모두에 관심이 많고, 항상 성실하게 배우고 있습니다.
                    </LgTextBox>
                </div>
                <div className="flex  w-[30rem] justify-center items-center gap-16">
                    <HeroBtn>Projects</HeroBtn>
                    <HeroBtn>Contact</HeroBtn>
                </div>
            </div>
        </div>
    )
}
