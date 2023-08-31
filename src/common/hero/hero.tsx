import Separator from "@/components/line/separator"
import Image from 'next/image'

export default function Hero() {
    return (
        <div className="flex w-full py-6 px-64 flex-col justify-center items-center gap-2.5">
            <div className="flex flex-col justify-center items-center gap-6 self-stretch">
                <div className="flex flex-col justify-center items-center gap-6 self-stretch">
                    <div className="flex py-[0.625rem] px-0 justify-center items-center gap-2.5 self-stretch hero_font">
                        신입 개발자 강찬수입니다
                    </div>
                    <Separator />
                    <div className="flex py-[0.625rem] px-[3.125rem] justify-center items-center gap-2.5 self-stretch hero_content_font">
                        프론트엔드와 백엔드 모두에 관심이 많고, 항상 성실하게 배우고 있습니다.
                    </div>
                </div>
                <div className="flex  w-[30rem] justify-center items-center gap-16 hero_btn">
                    <button>Projects</button>
                    <button>Contact</button>
                </div>
            </div>
        </div>
    )
}
