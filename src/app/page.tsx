import About from "@/common/about/about"
import Hero from "@/common/hero/hero"
import ProjectCard from "@/common/project/project"
import Skill from "@/common/skill/skill"
import LgTextBox from "@/components/boxes/lgTextBox"
import SimpleDesc from "@/components/description/simpleDesc"
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
      <div className="mt-16">
        <MSubject>About</MSubject>
        <Separator />
        <About />
      </div>
      <Skill />
      <div className="flex py-6 px-20 flex-col gap-6 self-stretch mt-16 items-center">
        <div className="flex flex-col items-center">
          <MSubject>Project</MSubject>
          <SubjectSeparator />
          <SimpleDesc>진행해왔던 프로젝트입니다</SimpleDesc>
        </div>
        <div className="w-11/12 grid grid-cols-1 2xl:grid-cols-2 justify-between justify-items-center gap-4">
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
