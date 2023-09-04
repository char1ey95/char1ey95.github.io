import Hero from "@/common/hero/hero"
import ProjectCard from "@/common/project/project"
import Skill from "@/common/skill/skill"
import LgTextBox from "@/components/boxes/lgTextBox"
import Separator from "@/components/line/separator"
import SubjectSeparator from "@/components/line/subjectSeparator"
import MSubject from "@/components/subjects/mSubject"
import { DATABASE_ID, options } from "@/config"
import Image from 'next/image'

export default async function Home() {

  const getData = async () => {
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

  const response = await getData()

  const projectItems = response.results

  return (
    <div className="mt-16">
      <Hero />
      <div>
        <MSubject>About</MSubject>
        <Separator />
        <LgTextBox>
          이곳에 적힐 내용은 나에 대한 간단한 설명이면 된다
          <br />
          아래에 들어갈 내용은 기존 포트폴리오의 내용 가져오면됌
        </LgTextBox>
        <div>대략 6개의 박스가 올 공간</div>
      </div>
      <Skill />
      <div className="flex py-6 px-40 flex-col items-center gap-6 self-stretch">
        <div className="flex flex-col items-center">
          <MSubject>Project</MSubject>
          <SubjectSeparator />
        </div>
        {/* <div className="flex w-[68.8125rem] justify-center items-center gap-[4.6875rem]"> */}
        <div className="grid grid-cols-2 grid-rows-1">
          {
            projectItems.map((v: any, idx: number) => (
              <ProjectCard key={idx} data={v} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
