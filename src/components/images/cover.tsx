export default function Cover({ url }: { url: string }) {
    return (
        <img
            className="h-[23.375rem] self-stretch bg-black border-black rounded"
            src={url}
            alt=""
        />
    )
}