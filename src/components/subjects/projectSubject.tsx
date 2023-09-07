export default function ProjectSubject({ title }: { title: string }) {
    return (
        <div className="mt-4 2xl:h-12 text-center text-xl min-[480px]:text-2xl sm:text-3xl font-bold">
            {title}
        </div>
    )
}