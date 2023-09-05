export default function StackBox({ name, color }: { name: string, color: string }) {
    return (
        <div className={`flex justify-center items-center px-2 py-0.5 rounded-md bg-slate-400 dark:bg-slate-600`}>
            {name}
        </div>
    )
}