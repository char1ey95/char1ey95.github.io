export default function StackImageWrap({ children }: { children: any }) {
    return (
        <div className="flex justify-center items-center bg-[#ffffff] rounded-full w-20 h-20 p-1">
            {children}
        </div>
    )
}