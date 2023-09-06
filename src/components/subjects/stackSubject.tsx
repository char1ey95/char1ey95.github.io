export default function StackSubject({ children }: { children: string }) {
    return (
        <h1 className="text-xl h-1/5 flex items-center justify-center font-bold">
            {children}
        </h1>
    )
}