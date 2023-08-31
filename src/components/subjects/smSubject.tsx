export default function SmSubject({ children }: any) {
    return (
        <div className="flex justify-center items-center py-2.5 px-0 gap-2.5 self-stretch">
            <div className="basic text-2xl font-normal">
                {children}
            </div>
        </div>
    )
}