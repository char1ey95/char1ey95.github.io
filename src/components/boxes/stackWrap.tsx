export default function StackWrap({ children }: { children: any }) {
    return (
        <div className="md:py-4 w-full md:w-[36rem]">
            {children}
        </div>
    )
}