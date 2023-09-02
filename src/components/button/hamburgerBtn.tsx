'use client'
import { useRef } from "react";

const HamburgerBtn = () => {
    const hamburger = useRef<HTMLDivElement>(null)
    console.log(hamburger)

    const handleClick = () => {
        hamburger.current?.classList.toggle('active')
    }

    return (
        <div className="relative w-8 h-6 md:w-0 md:h-0 md:hidden hamburger hamburger_md" ref={hamburger} onClick={handleClick}>
            <span className="top-0"></span>
            <span className="top-2.5"></span>
            <span className="bottom-0"></span>
        </div>
    )
}

export default HamburgerBtn