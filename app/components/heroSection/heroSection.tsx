'use client';
import Link from "next/link";
import { JSX, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function HeroSection(): JSX.Element {
    const videoRef = useRef<HTMLDivElement>(null);
    const referenceLineBackgroundEffect1 = useRef<HTMLDivElement>(null);
    const referenceLineBackgroundEffect2 = useRef<HTMLDivElement>(null);
    const colorsCircle: string[] = ["#1d1d1f", "#38383991", "#252e0983", "#ff49495b", "#0621b85c"];
    const [bgColor1, setBgColor1] = useState<string>(colorsCircle[0]);
    const [bgColor2, setBgColor2] = useState<string>(colorsCircle[0]);
    const lastColorUpdateTime = useRef<number>(0);
    useEffect(() => {
        const MouseMoveFunction = () => {
            if (referenceLineBackgroundEffect1 && referenceLineBackgroundEffect2) {
                const dateNow = Date.now();
                if (dateNow - lastColorUpdateTime.current > 1000) {
                    const randomColor1 = colorsCircle[Math.floor(Math.random() * colorsCircle.length)];
                    const randomColor2 = colorsCircle[Math.floor(Math.random() * colorsCircle.length)];
                    setBgColor1(randomColor1);
                    setBgColor2(randomColor2);
                    lastColorUpdateTime.current = dateNow;
                }
            }
        };
        window.addEventListener("mousemove", MouseMoveFunction);
        return () => window.removeEventListener("mousemove", MouseMoveFunction);
    }, []);
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!videoRef.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = videoRef.current.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        const rotateY = x * 20;
        const rotateX = -y * 20;
        videoRef.current.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale3d(1.05, 1.05, 1.05)
        `;
    };
    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.style.transform = 
                'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        }
    };
    return (
        <section id="hero-section">
            <div className="tracery">
                {
                    Array.from({length: 10}).map((_, index) => {
                        return <div 
                        style={{
                            backgroundColor: bgColor1
                        }}
                        ref={referenceLineBackgroundEffect1}
                        key={index} 
                        className="trac"></div>
                    })
                }
                <div className="grid-tracery">
                    {
                        Array.from({length: 10}).map((_, index) => {
                            return <div 
                            ref={referenceLineBackgroundEffect2}
                            style={{
                                backgroundColor: bgColor2
                            }}
                            key={index} 
                            className="trac"></div>
                        })
                    }
                </div>
            </div>
            <div className="hero-section">
                <div className="hero-content">
                    <div 
                        ref={videoRef}
                        className="video-block"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transition: 'transform 0.2s ease-out',
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <video 
                            autoPlay
                            muted
                            loop
                            src="./videos/0_People_Men_1280x720 (1).mp4"
                        />
                    </div>
                    <div className="content-block">
                        <h1>Фронтенд-разработка и обучение</h1>
                        <motion.a 
                        whileHover={{
                            rotate: "5deg",
                            scale: 1.1,
                            transition: { duration: 0.3, ease: "circInOut" }
                        }}
                        href="">Проекты</motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}