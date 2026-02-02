'use client';
import { JSX, useEffect, useRef, useState } from "react";
export default function Cursor(): JSX.Element {
    const mouseBox = useRef<HTMLDivElement | null>(null);
    const colorsCircle: string[] = ["#a374ff", "#ffd074", "#ff7474", "#47fedf"];
    const lastColorUpdateTime = useRef<number>(0);
    const [colorBG1, setColorBG1] = useState<string>(colorsCircle[0]);
    const [colorBG2, setColorBG2] = useState<string>(colorsCircle[1]);
    useEffect(() => {
        const element = mouseBox.current;
        if (!element) return;
        const move = (e: MouseEvent) => {
            if (element) {
                const customX: number = e.clientX - element.offsetWidth / 2;
                const customY = e.clientY - element.offsetHeight / 2;
                element.style.transform = `translate3d(${customX}px, ${customY}px, 0)`;
                const now = Date.now();
                if (now - lastColorUpdateTime.current > 1000) {
                    const randomColor1 = colorsCircle[Math.floor(Math.random() * colorsCircle.length)];
                    const randomColor2 = colorsCircle[Math.floor(Math.random() * colorsCircle.length)];
                    setColorBG1(randomColor1);
                    setColorBG2(randomColor2);
                    lastColorUpdateTime.current = now;
                }
            }
        };
        window.addEventListener("mousemove", move);
        return () => {
            window.removeEventListener("mousemove", move);
        };
    }, []);
    return (
        <div 
            className="cursor-circle" 
            ref={mouseBox}>
            <div 
            style={{
                backgroundColor: colorBG1
            }}
            className="cursor1 circle"></div>
            <div 
            style={{
                backgroundColor: colorBG2
            }}
            className="cursor2 circle"></div>
        </div>
    );
}
