'use client'
import { MouseEvent, RefObject, useRef } from "react";

const HamburgerBtn = ({ menu, hamburger }: { menu: RefObject<HTMLUListElement>, hamburger: RefObject<HTMLDivElement> }) => {

    const handleClick = () => {
        hamburger.current?.classList.toggle('active')
        menu.current?.classList.toggle('onMenu')
    }

    return (
        <div className="relative w-8 h-6 md:w-0 md:h-0 md:hidden hamburger hamburger_md cursor-pointer" ref={hamburger} onClick={handleClick}>
            <span className="top-0"></span>
            <span className="top-2.5"></span>
            <span className="bottom-0"></span>
        </div>
    )
}

export default HamburgerBtn