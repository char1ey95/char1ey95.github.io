export default function HeroBtn({ children }: any) {
    return (
        <button className="flex w-52 max-md:w-40 py-2.5 px-[2.125rem] justify-center items-center gap-2.5 shrink-0 rounded-lg bg-slate-900 text-slate-200 text-2xl max-md:text-xl font-normal transition-all hover:text-slate-900 hover:bg-slate-200">{children}</button>
    )
}