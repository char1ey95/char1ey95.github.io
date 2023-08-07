'use client'
import { useTheme } from "next-themes"

const DarkModeBtn = () => {
    const { theme, setTheme } = useTheme()

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <button onClick={handleTheme} className="
        inline-flex
        items-center
        border-0
        py-1
        px-3
        focus:outline-none
        rounded
        text-base
        mt-0
        bg-gray-100
        hover:bg-gray-50
        hover:text-orange-500
        dark:hover:text-yellow-300
        dark:md:bg-slate-600
        dark:md:text-slate-400
        dark:md:hover:bg-slate-700
        dark:md:hover:text-yellow-300
        ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="max-[350px]:x-5 max-[350px]:h-5 w-6 h-6 dark:w-0 dark:h-0">
                <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-0 h-0 dark:w-6 dark:h-6 dark:max-[350px]:h-5 dark:max-[350px]:w-5">
                <path fillRule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clipRule="evenodd" />
            </svg>
        </button>
    )
}

export default DarkModeBtn