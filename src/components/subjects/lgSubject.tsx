export default function LgSubject({ children }: any) {
    return (
        <div className="flex py-[0.625rem] animate-colorChange px-0 justify-center items-center gap-2.5 self-stretch text-center text-5xl font-normal leading-normal max-md:text-3xl animate-[color-wave_4s_alternate_infinite]">
            {children}
        </div>
    )
}