import SubjectSeparator from "@/components/line/subjectSeparator"
import MSubject from "@/components/subjects/mSubject"
import html5 from "@/images/stacks/html5.png"
import css3 from "@/images/stacks/css3.png"
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
import SimpleDesc from "@/components/description/simpleDesc"
import StackImagesBox from "@/components/boxes/stackImagesBox"

export default function Skill() {
    return (
        <div className="mt-16">
            <MSubject>Skill</MSubject>
            <SubjectSeparator />
            <SimpleDesc>사용할 수 있는 스택들과 간단한 설명입니다</SimpleDesc>
            <div className="px-20 py-6">
                <div className="grid grid-cols-1 justify-items-center gap-y-10">

                    <StackCard>
                        <StackSubject>HTML & CSS</StackSubject>
                        <div className="flex h-4/5">
                            <StackImagesBox>
                                <Image src={html5} alt="" width={100} className="absolute left-0" />
                                <Image src={css3} alt="" width={100} className="absolute right-0" />
                            </StackImagesBox>
                            <StackTextBox>
                                <ul className="w-11/12 h-full py-1">
                                    <li>HTML과 CSS를 이용해 프론트 화면을 꾸밀 수 있습니다.</li>
                                    <li>반응형 웹을 만들 수 있습니다.</li>
                                </ul>
                            </StackTextBox>
                        </div>
                    </StackCard>

                    <StackCard>
                        <StackSubject>Javascript</StackSubject>
                        <div className="flex h-4/5">
                            <StackImageBox>
                                <Image src={javascript} alt="" width={100} />
                            </StackImageBox>
                            <StackTextBox>
                                <ul className="w-11/12 h-full py-4">
                                    <li>
                                        대부분의 프로젝트를 자바스크립트를 이용해서 기능을 구현했습니다.
                                    </li>
                                    <li>
                                        기본적인 함수, 클래스와 DOM 조작을 할 수 있습니다.
                                    </li>
                                    <li>
                                        그 동안 작성한 코드들을 더 효율적으로 바꿀수 있는지, 고민하고 되돌아 보며 다시 학습하고 있습니다.
                                    </li>
                                </ul>
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
                                <ul className="w-11/12 h-full py-1">
                                    <li>타입스크립트의 작동원리를 이해하고 있습니다.</li>
                                    <li>기본적인 타입을 알고 사용할 수 있습니다.</li>
                                    <li>타입스크립트를 이용해 프로젝트를 진행한 적이 있습니다.</li>
                                </ul>
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
                                <ul className="w-11/12 h-full py-1">
                                    <li>리액트의 상태와 생명주기에 대해서 이해하고 있습니다.</li>
                                    <li>클래스, 함수형 컴포넌트에 대해 학습하고 프로젝트에 적용했습니다.</li>
                                    <li>Styled-Components를 이용해 화면을 꾸밀 수 있습니다.</li>
                                    <li>Redux, React Query를 프로젝트에서 사용해본 경험이 있습니다.</li>
                                </ul>
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
                                <ul className="w-11/12 h-full py-1">
                                    <li>Node와 Express를 이용해 DB와 연동하여 CRUD 프로젝트를 진행했습니다.</li>
                                    <li>서버를 구현할 때 RESTFul API의 규칙에 맞도록 구현해본 경험이 있습니다.</li>
                                    <li>Express를 비롯해 Nest, JWT, SocketIO 등 다양한 프레임워크, 라이브러리 사용경험이 있습니다.</li>
                                </ul>
                            </StackTextBox>
                        </div>
                    </StackCard>

                    <StackCard>
                        <StackSubject>MySQL</StackSubject>
                        <div className="flex h-4/5">
                            <StackImageBox>
                                <Image src={mysql} alt="" width={100} className="rounded-[50%]" />
                            </StackImageBox>
                            <StackTextBox>
                                <ul className="w-11/12 h-full py-1">
                                    <li>간단한 조회, 생성, 수정, 삭제하는 쿼리를 작성할 수 있습니다.</li>
                                    <li>프로젝트를 진행할 때 데이터베이스로 사용한 경험이 있습니다.</li>
                                </ul>
                            </StackTextBox>
                        </div>
                    </StackCard>

                    <StackCard>
                        <StackSubject>Git & Github</StackSubject>
                        <div className="flex h-4/5">
                            <StackImageBox>
                                <Image src={github} alt="" width={100} />
                            </StackImageBox>
                            <StackTextBox>
                                <ul className="w-11/12 h-full py-1">
                                    <li>작업을 할 때에는 Git&Github을 활용합니다.</li>
                                    <li>프로젝트의 버전 및 형상관리를 위해서 사용한 경험이 있습니다.</li>
                                    <li>GitHub Action을 이용해 간단한 CI/CD를 구축한적이 있습니다.</li>
                                    <li>깃관련 에러가 터질 경우 대부분의 경우에 해결할 수 있습니다.</li>
                                </ul>
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
                                <ul className="w-11/12 h-full py-1">
                                    <li>Git이나 AWS EC2 서버를 이용하기 위해 사용합니다.</li>
                                    <li>터미널에서 명령어를 통해 간단한 파일 조작을 할 수 있습니다.</li>
                                    <li>AWS EC2에 Ubuntu 환경에 서버를 배포하고 구축한 적이 있습니다.</li>
                                </ul>
                            </StackTextBox>
                        </div>
                    </StackCard>

                    <StackCard>
                        <StackSubject>Tools</StackSubject>
                        <div className="flex h-4/5">
                            <StackImagesBox>
                                <Image src={trello} alt="" width={75} className="" />
                                <Image src={figma} alt="" width={75} className="" />
                            </StackImagesBox>
                            <StackTextBox>
                                <ul className="w-11/12 h-full py-1">
                                    <li>작업일정 관리를 위해 Trello를 사용할 수 있습니다.</li>
                                    <li>프론트 UI 작업 혹은 아키텍쳐를 그릴때 Figma를 주로 사용합니다.</li>
                                </ul>
                            </StackTextBox>
                        </div>
                    </StackCard>
                </div>
            </div>
        </div>
    )
}