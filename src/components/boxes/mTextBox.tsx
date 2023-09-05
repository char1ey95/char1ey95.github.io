export default function MTextBox({ children, date }: { children: any, date: string[] }) {
    return (
        <div className="h-24 py-2.5 px-0 gap-2.5 self-stretch">
            <div className="text-[1.125rem] font-normal h-full relative">
                {children}
                <div className="absolute right-0 bottom-0 text-sm font-medium text-slate-700 dark:text-slate-400">
                    {`${date[0]}` + " ~ " + `${date[1]}`}
                </div>
            </div>
        </div>
    )
}