'use client'

export default function StackBox({ name, color }: { name: string, color: string }) {

    return (
        <div className="mr-2 mt-2 py-1 px-3 text-sm min-[480px]:text-base sm:font-semibold text-center rounded-md bg-slate-300 dark:bg-slate-600">
            {name}
        </div>
    )
}