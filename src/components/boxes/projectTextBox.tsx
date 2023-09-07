export default function ProjectTextBox({ description, date }: { description: any, date: string[] }) {
    return (
        <div className="flex flex-col p-2 sm:px-4">
            <div className="py-2 min-[480px]:text-lg sm:text-xl font-medium 2xl:h-20">
                {description}
            </div>
            <div className="text-xs min-[480px]:text-sm sm:text-base text-right text-slate-700 dark:text-slate-400">
                {`${date[0]}` + " ~ " + `${date[1]}`}
            </div>
        </div>
    )
}