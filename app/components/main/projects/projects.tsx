'use client';
import { JSX, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { data } from "./data/dataProjects";


function CardProjects(): JSX.Element {
    const cardRefernce = useRef<HTMLDivElement>(null);
    const referenceParent = useRef<HTMLDivElement>(null);
    const viewParent = useInView(referenceParent, { once: false, amount: 0.1 });
    useEffect(() => {
        const element = cardRefernce.current;
        if (viewParent && element) {
            const scrollSmooth = () => {
                const scroll = window.scrollY;
                element.style.transform = `translateX(${-scroll}px)`;
            };
            window.addEventListener("scroll", scrollSmooth);
            scrollSmooth();
            return () => {
                window.removeEventListener("scroll", scrollSmooth);
            };
        }
    }, [viewParent]);
    return (
        <div className="cards-projects" ref={referenceParent}>
            <div className="projects-section" ref={cardRefernce}>
                {data.map((card, index) => (
                    <Link key={index} href={card.projectUrl} target="_blank">
                        <motion.div
                            style={{backgroundImage: `url(${card.imageUrl})` }}
                            className="project-card"
                            initial={{ scale: .9, opacity: .6 }}
                            whileInView={{ 
                                scale: 1,
                                opacity: 1,
                                transition: { duration: 0.3 }
                            }}
                            viewport={{ once: false, amount: 0.5 }}
                        ><span>{card.title}</span></motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default function Projects(): JSX.Element {
    const refParent = useRef(null);
    const viewChild = useInView(refParent, {once: true, amount: .5});
    return (
        <section id="projects">
            <div className="projects" ref={refParent}>
                <motion.h2
                initial={{
                    opacity: 0,
                    y: "20px"
                }}
                animate={viewChild ? {
                    opacity: 1,
                    y: 0
                } : {}}
                transition={{
                    duration: .3,
                    ease: "circOut"
                }}
                >Наши проекты</motion.h2>
                <ol>
                    <motion.li
                    initial={{
                    opacity: 0,
                    y: "20px"
                    }}
                    animate={viewChild ? {
                        opacity: 1,
                        y: 0
                    } : {}}
                    transition={{
                        duration: .3,
                        ease: "circOut",
                    }}
                    ><span data-color-1>Продакшен</span> — несколько отточенных, высоконагруженных продуктов для бизнеса.</motion.li>

                    <motion.li
                    initial={{
                    opacity: 0,
                    y: "20px"
                    }}
                    animate={viewChild ? {
                        opacity: 1,
                        y: 0
                    } : {}}
                    transition={{
                        duration: .3,
                        ease: "circOut",
                        delay: .2
                    }}
                    ><span data-color-2>Лаборатория</span> — десятки пет-проектов, где тестируем технологии и создаём учебные кейсы.</motion.li>
                </ol>
            </div>
            <CardProjects />
        </section>
    )
}