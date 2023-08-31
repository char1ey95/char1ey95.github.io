export default function Cover({ url }: { url: string }) {
    return (
        <img
            className="h-[23.375rem] self-stretch"
            src={url}
            alt=""
        />
    )
}