import About from "@/common/about/about"
import Hero from "@/common/hero/hero"
import Project from "@/common/project/project"
import Skill from "@/common/skill/skill"

export default async function Home() {


  return (
    <div className="mt-16 relative">
      <Hero />
      <Project />
      <About />
      <Skill />
    </div>
  )
}
