export default function LargeTextBox({ children }: any) {
    return (
        <div className="flex py-[0.625rem] px-[3.125rem] justify-center items-center gap-2.5 self-stretch text-center text-lg font-normal leading-normal">
            {children}
        </div>
    )
}