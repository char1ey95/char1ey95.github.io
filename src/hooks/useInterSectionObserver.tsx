import { useEffect, useRef } from "react"

export default function useInterSectionObserver() {
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

    return {}
}