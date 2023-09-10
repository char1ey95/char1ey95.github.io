'use client'
import { Dispatch, SetStateAction, useState } from "react"

export default function ProjectTextBox({ description, date, setIsOpen }: {
    description: any,
    date: string[],
    setIsOpen: Dispatch<SetStateAction<boolean>>
}) {

    return (
        <div className="flex flex-col p-2 sm:px-4">
            <div className="py-2 min-[480px]:text-lg sm:text-xl font-medium 2xl:h-20">
                {description}
            </div>
            <div className="flex justify-end mb-2">
                <span className="py-1 px-3 bg-gradient-to-r from-[#f0dfdf] to-[#DDEFBB] hover:from-[#FFFFFF] hover:to-[#e6f9c2] dark:from-[#3fa49d] dark:to-[#3f4954] dark:hover:from-[#55e0d7] dark:hover:to-[#687788] rounded font-semibold cursor-pointer hover:animate-pulse" onClick={() => {
                    setIsOpen(true)
                }}>
                    자세히 보기
                </span>
            </div>
            <div className="text-xs min-[480px]:text-sm sm:text-base text-right text-slate-700 dark:text-slate-400">
                {`${date[0]}` + " ~ " + `${date[1]}`}
            </div>
        </div>
    )
}