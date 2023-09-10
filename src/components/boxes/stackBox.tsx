'use client'
import { useEffect, useRef } from "react"

export default function StackBox({ name, color }: { name: string, color: string }) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        ref.current?.classList.add(color)
    }, [])

    return (
        <div ref={ref} className="mr-2 mt-2 py-1 px-3 text-sm min-[480px]:text-sm font-semibold text-center rounded-md">
            {name}
        </div>
    )
}