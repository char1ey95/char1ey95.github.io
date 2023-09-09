import SubjectSeparator from "@/components/line/subjectSeparator"
import MSubject from "@/components/subjects/mSubject"
import front from "/public/images/stacks/front.png"
import javascript from "/public/images/stacks/javascript.png"
import typescript from "/public/images/stacks/typescript.png"
import react from "/public/images/stacks/react.png"
import linux from "/public/images/stacks/linux.png"
import nest from "/public/images/stacks/nest.png"
import nodejs from "/public/images/stacks/nodejs.png"
import socketio from "/public/images/stacks/socketio.png"
import mysql from "/public/images/db/mysql.png"
import mongodb from "/public/images/db/mongodb.png"
import aws from "/public/images/deploy/aws.png"
import github_action from "/public/images/deploy/github_action.png"
import figma from "/public/images/tools/figma.png"
import github from "/public/images/tools/github.png"
import trello from "/public/images/tools/trello.png"
import Image from "next/image"
import FullSeparator from "@/components/line/fullSeparator"
import StackImageBox from "@/components/boxes/stackImageBox"
import StackTextBox from "@/components/boxes/stackTextBox"
import StackCard from "@/components/cards/stackCard"
import StackSubject from "@/components/subjects/stackSubject"
import SimpleDesc from "@/components/description/simpleDesc"
import StackImagesBox from "@/components/boxes/stackImagesBox"
import StackWrap from "@/components/boxes/stackWrap"

export default function Skill() {
    return (
        <div id="skills" className="mt-16 mb-8">
            <MSubject>Skill</MSubject>
            <SubjectSeparator />
            <SimpleDesc>사용할 수 있는 스택들과 간단한 설명입니다</SimpleDesc>
            <div className="mx-auto my-0 2xl:w-[94.5rem]">
                <div className="grid grid-cols-1 2xl:grid-cols-2 md:justify-items-center gap-y-8">
                    <StackCard>
                        <StackImageBox>
                            <Image src={javascript} alt="" className="" />
                        </StackImageBox>
                        <StackWrap>
                            <StackSubject>Javascript</StackSubject>
                            <StackTextBox>
                                <ul className="skill_desc">
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
                        </StackWrap>
                    </StackCard>

                    <StackCard>
                        <StackImageBox>
                            <Image src={typescript} alt="" width={100} />
                        </StackImageBox>
                        <StackWrap>
                            <StackSubject>Typescript</StackSubject>
                            <StackTextBox>
                                <ul className="skill_desc">
                                    <li>타입스크립트의 작동원리를 이해하고 있습니다.</li>
                                    <li>기본적인 타입을 알고 사용할 수 있습니다.</li>
                                    <li>타입스크립트를 이용해 프로젝트를 진행한 적이 있습니다.</li>
                                </ul>
                            </StackTextBox>
                        </StackWrap>
                    </StackCard>

                    <StackCard>
                        <StackImageBox>
                            <Image src={react} alt="" width={100} />
                        </StackImageBox>
                        <StackWrap>
                            <StackSubject>React</StackSubject>
                            <StackTextBox>
                                <ul className="skill_desc">
                                    <li>리액트의 상태와 생명주기에 대해서 이해하고 있습니다.</li>
                                    <li>클래스, 함수형 컴포넌트에 대해 학습하고 프로젝트에 적용했습니다.</li>
                                    <li>Styled-Components를 이용해 화면을 꾸밀 수 있습니다.</li>
                                    <li>Redux, React Query를 프로젝트에서 사용해본 경험이 있습니다.</li>
                                </ul>
                            </StackTextBox>
                        </StackWrap>
                    </StackCard>

                    <StackCard>
                        <StackImageBox>
                            <Image src={nodejs} alt="" width={100} />
                        </StackImageBox>
                        <StackWrap>
                            <StackSubject>NodeJS</StackSubject>
                            <StackTextBox>
                                <ul className="skill_desc">
                                    <li>Node와 Express를 이용해 DB와 연동하여 CRUD 프로젝트를 진행했습니다.</li>
                                    <li>서버를 구현할 때 RESTFul API의 규칙에 맞도록 구현해본 경험이 있습니다.</li>
                                    <li>Express를 비롯해 Nest, JWT, SocketIO 등 다양한 프레임워크, 라이브러리 사용경험이 있습니다.</li>
                                </ul>
                            </StackTextBox>
                        </StackWrap>
                    </StackCard>

                    <StackCard>
                        <StackImageBox>
                            <Image src={mysql} alt="" width={100} className="rounded-[50%]" />
                        </StackImageBox>
                        <StackWrap>
                            <StackSubject>MySQL</StackSubject>
                            <StackTextBox>
                                <ul className="skill_desc">
                                    <li>간단한 조회, 생성, 수정, 삭제하는 쿼리를 작성할 수 있습니다.</li>
                                    <li>프로젝트를 진행할 때 데이터베이스로 사용한 경험이 있습니다.</li>
                                </ul>
                            </StackTextBox>
                        </StackWrap>
                    </StackCard>

                    <StackCard>
                        <StackImageBox>
                            <Image src={github} alt="" width={100} />
                        </StackImageBox>
                        <StackWrap>
                            <StackSubject>Git & Github</StackSubject>
                            <StackTextBox>
                                <ul className="skill_desc">
                                    <li>작업을 할 때에는 Git&Github을 활용합니다.</li>
                                    <li>프로젝트의 버전 및 형상관리를 위해서 사용한 경험이 있습니다.</li>
                                    <li>GitHub Action을 이용해 간단한 CI/CD를 구축한적이 있습니다.</li>
                                    <li>깃관련 에러가 터질 경우 대부분의 경우에 해결할 수 있습니다.</li>
                                </ul>
                            </StackTextBox>
                        </StackWrap>
                    </StackCard>

                    <StackCard>
                        <StackImageBox>
                            <Image src={linux} alt="" width={100} />
                        </StackImageBox>
                        <StackWrap>
                            <StackSubject>Linux</StackSubject>
                            <StackTextBox>
                                <ul className="skill_desc">
                                    <li>Git이나 AWS EC2 서버를 이용하기 위해 사용합니다.</li>
                                    <li>터미널에서 명령어를 통해 간단한 파일 조작을 할 수 있습니다.</li>
                                    <li>AWS EC2에 Ubuntu 환경에 서버를 배포하고 구축한 적이 있습니다.</li>
                                </ul>
                            </StackTextBox>
                        </StackWrap>
                    </StackCard>
                </div>
            </div>
        </div>
    )
}