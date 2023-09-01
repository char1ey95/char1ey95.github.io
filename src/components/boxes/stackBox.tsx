export default function StackBox({ name }: { name: string }) {
    return (
        <div className="flex justify-center items-center px-2 py-0.5 bg-slate-400 rounded-md">
            {name}
        </div>
    )
}