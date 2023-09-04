export default function SimpleDesc({ children }: { children: string }) {
    return (
        <div className="flex items-center justify-center text-2xl h-20">{children}</div>
    )
}