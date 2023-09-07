export default function StackCard({ children }: { children: any }) {
    return (
        <div className="mx-4 md:px-4 flex flex-col md:flex-row justify-center md:justify-between items-center md:w-[45rem] rounded-lg bg-slate-100 dark:bg-slate-800 custom_shadow">
            {children}
        </div>
    )
}