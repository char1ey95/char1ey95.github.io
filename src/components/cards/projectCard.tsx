import LinkBox from "@/components/boxes/linkBox";
import ProjectTextBox from "@/components/boxes/projectTextBox";
import StackBox from "@/components/boxes/stackBox";
import ProjectThumbNail from "@/components/images/projectThumbNail";
import FullSeparator from "@/components/line/fullSeparator";
import StackList from "@/components/list/stackList";
import ProjectSubject from "@/components/subjects/projectSubject";
import GithubSvg from "@/svg/github";
import LinkSvg from "@/svg/link";

interface IStack {
    name: string
    color: string
}

export default function ProjectCard({ data }: { data: any }) {
    const title = data.properties.name.title[0].plain_text
    const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url
    const stacks: IStack[] = data.properties.tag.multi_select
    const gitLink = data.properties.Github.url
    const startDate = data.properties.WorkPeriod.date.start
    const endDate = data.properties.WorkPeriod.date.end
    // start, end

    return (
        <div className="mx-2 md:mx-4 py-4 px-2 md:px-6 max-w-[42rem] 2xl:flex 2xl:flex-col rounded-lg bg-[#93B1A6] dark:bg-[#1B262C] drop-shadow-md">
            <ProjectThumbNail url={imgSrc} />
            <ProjectSubject title={title} />
            <FullSeparator />
            <ProjectTextBox date={[startDate, endDate]} description={description} />
            <StackList>
                {
                    stacks.map((v, idx) => {
                        return (
                            <StackBox key={idx} name={v.name} color={v.color} />
                        )
                    })
                }
            </StackList>
            <LinkBox>
                <GithubSvg />
                <LinkSvg />
            </LinkBox>
        </div>
    )
}