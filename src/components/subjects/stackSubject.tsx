export default function StackSubject({ children }: { children: string }) {
    return (
        <h1 className="md:mt-3 flex justify-center md:justify-start items-center  text-xl font-bold">
            {children}
        </h1>
    )
}