import SubjectSeparator from "@/components/line/subjectSeparator"
import MSubject from "@/components/subjects/mSubject"
import javascript from "@/images/stacks/javascript.png"
import typescript from "@/images/stacks/typescript.png"
import react from "@/images/stacks/react.png"
import linux from "@/images/stacks/linux.png"
import nest from "@/images/stacks/nest.png"
import nodejs from "@/images/stacks/nodejs.png"
import socketio from "@/images/stacks/socketio.png"
import mysql from "@/images/db/mysql.png"
import mongodb from "@/images/db/mongodb.png"
import aws from "@/images/deploy/aws.png"
import github_action from "@/images/deploy/github_action.png"
import figma from "@/images/tools/figma.png"
import github from "@/images/tools/github.png"
import trello from "@/images/tools/trello.png"
import Image from "next/image"
import FullSeparator from "@/components/line/fullSeparator"
import StackImageBox from "@/components/boxes/stackImageBox"
import StackTextBox from "@/components/boxes/stackTextBox"
import StackCard from "@/components/cards/stackCard"
import StackSubject from "@/components/subjects/stackSubject"


export default function Skill() {
    return (
        <div className="mt-16">
            <MSubject>Skill</MSubject>
            <SubjectSeparator />
            <div className="px-40 py-6">
                <div className="grid grid-cols-1 min-[1140px]:grid-cols-2 min-[1500px]:grid-cols-3 justify-items-center gap-y-10">
                    <StackCard>
                        <StackSubject>Javascript</StackSubject>
                        <div className="flex h-4/5">
                            <StackImageBox>
                                <Image src={javascript} alt="" width={100} />
                            </StackImageBox>
                            <StackTextBox>
                                <p className="w-11/12 h-full py-1">자바스크립트 설명</p>
                            </StackTextBox>
                        </div>
                    </StackCard>
                    <StackCard>
                        <StackSubject>Typescript</StackSubject>
                        <div className="flex h-4/5">
                            <StackImageBox>
                                <Image src={typescript} alt="" width={100} />
                            </StackImageBox>
                            <StackTextBox>
                                <p className="w-11/12 h-full py-1">타입스크립트 설명</p>
                            </StackTextBox>
                        </div>
                    </StackCard>
                    <StackCard>
                        <StackSubject>React</StackSubject>
                        <div className="flex h-4/5">
                            <StackImageBox>
                                <Image src={react} alt="" width={100} />
                            </StackImageBox>
                            <StackTextBox>
                                <p className="w-11/12 h-full py-1">리액트 설명</p>
                            </StackTextBox>
                        </div>
                    </StackCard>
                    <StackCard>
                        <StackSubject>NodeJS</StackSubject>
                        <div className="flex h-4/5">
                            <StackImageBox>
                                <Image src={nodejs} alt="" width={100} />
                            </StackImageBox>
                            <StackTextBox>
                                <p className="w-11/12 h-full py-1">노드 설명</p>
                            </StackTextBox>
                        </div>
                    </StackCard>
                    <StackCard>
                        <StackSubject>NestJS</StackSubject>
                        <div className="flex h-4/5">
                            <StackImageBox>
                                <Image src={nest} alt="" width={100} />
                            </StackImageBox>
                            <StackTextBox>
                                <p className="w-11/12 h-full py-1">네스트 설명</p>
                            </StackTextBox>
                        </div>
                    </StackCard>
                    <StackCard>
                        <StackSubject>Linux</StackSubject>
                        <div className="flex h-4/5">
                            <StackImageBox>
                                <Image src={linux} alt="" width={100} />
                            </StackImageBox>
                            <StackTextBox>
                                <p className="w-11/12 h-full py-1">리눅스 설명</p>
                            </StackTextBox>
                        </div>
                    </StackCard>
                    <StackCard>
                        <StackSubject>SocketIO</StackSubject>
                        <div className="flex h-4/5">
                            <StackImageBox>
                                <Image src={socketio} alt="" width={100} className="rounded-[50%]" />
                            </StackImageBox>
                            <StackTextBox>
                                <p className="w-11/12 h-full py-1">소켓아이오 설명</p>
                            </StackTextBox>
                        </div>
                    </StackCard>
                </div>
            </div>
        </div>
    )
}