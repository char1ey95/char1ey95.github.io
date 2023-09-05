export default function MTextBox({ children }: any) {
    return (
        <div className="h-24 py-2.5 px-0 gap-2.5 self-stretch">
            <div className="text-[1.125rem] font-normal">
                {children}
            </div>
        </div>
    )
}