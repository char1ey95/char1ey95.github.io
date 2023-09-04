export default function StackCard({ children }: { children: any }) {
    return (
        <div className="flex flex-col w-96 h-48 rounded-lg shadow-custom shadow-slate-200">
            {children}
        </div>
    )
}