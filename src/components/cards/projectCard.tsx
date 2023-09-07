import LinkBox from "@/components/boxes/linkBox";
import MTextBox from "@/components/boxes/mTextBox";
import StackBox from "@/components/boxes/stackBox";
import Cover from "@/components/images/cover";
import FullSeparator from "@/components/line/fullSeparator";
import StackList from "@/components/list/stackList";
import SmSubject from "@/components/subjects/smSubject";
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
        <div className="flex flex-col items-start gap-2.5 flex-grow flex-shrink-0 basis-0 w-[40rem] bg-slate-200 dark:bg-slate-800 p-5 rounded-lg custom_shadow shadow-slate-50 my-6">
            <Cover url={imgSrc} />
            <SmSubject>
                {title}
            </SmSubject>
            <FullSeparator />
            <MTextBox date={[startDate, endDate]}>
                {description}
            </MTextBox>
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