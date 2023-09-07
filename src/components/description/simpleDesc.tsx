export default function SimpleDesc({ children }: { children: string }) {
    return (
        <div className="flex items-center justify-center text-base min-[480px]:text-xl md:text-2xl h-20">{children}</div>
    )
}