export default function MTextBox({ children }: any) {
    return (
        <div className="flex py-2.5 px-0 justify-center items-center gap-2.5 self-stretch">
            <div className="basic text-[1.125rem] font-normal">
                {children}
            </div>
        </div>
    )
}