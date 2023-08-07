'use client'

import { useRef } from "react";

const HamburgerBtn = () => {
    const hamburger = useRef<HTMLDivElement>(null)
    console.log(hamburger)

    const handleClick = () => {
        hamburger.current?.classList.toggle('active')
    }

    return (
        <div className="hamburger" ref={hamburger} onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default HamburgerBtn