import Image from "next/image";

export default function ProjectThumbNail({ url }: { url: string }) {
    const imageUrl = url
    return (
        <Image
            className="mx-auto rounded w-80 min-[480px]:w-[30rem] sm:w-[36rem] md:w-[42rem] 2xl:h-[24rem]"
            src={imageUrl}
            alt=""
            width={500}
            height={500}
        />
    )
}