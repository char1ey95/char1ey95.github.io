export default function StackCard({ children }: { children: any }) {
    return (
        <div className="flex flex-col w-11/12 h-48 rounded-lg bg-slate-100 dark:bg-slate-800 custom_shadow">
            {children}
        </div>
    )
}