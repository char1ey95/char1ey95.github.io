export default function ProjectThumbNail({ url }: { url: string }) {
    return (
        <img
            className="mx-auto rounded w-80 min-[480px]:w-[30rem] sm:w-[36rem] md:w-[42rem] 2xl:h-[24rem]"
            src={url}
            alt=""
        />
    )
}