'use client'
import { RefObject, useEffect, useRef } from "react";

export default function StackCard({ children }: { children: any }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let observer = new IntersectionObserver((e) => {
            e.forEach((v) => {
                if (v.isIntersecting) {
                    v.target.classList.add('observer_none')
                    v.target.classList.remove('observer')
                } else {
                    v.target.classList.add('observer')
                    v.target.classList.remove('observer_none')
                }
            });
        });
        containerRef.current && observer.observe(containerRef.current);
    }, []);

    return (
        <div className="mx-4 md:px-4 flex flex-col md:flex-row justify-center md:justify-between items-center md:w-[45rem] rounded-lg bg-[#F3FDE8] dark:bg-[#435B66] custom_shadow transition-all duration-1000" ref={containerRef}>
            {children}
        </div>
    )
}