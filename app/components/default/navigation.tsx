'use client';
import Link from "next/link";
import { JSX, useState } from "react";
import { motion } from "framer-motion";
const MotionLink = motion(Link);
const data: { urlId: string, text: string }[] = [
        {
            urlId: "hero-section",
            text: "Главная"
        },
        {
            urlId: "projects-card",
            text: "Проекты"
        },
        {
            urlId: "our-stack-section",
            text: "Стек"
        },
        {
            urlId: "footer",
            text: "Контакты"
        },
    ];
export default function Navigation(): JSX.Element {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    return (
        <>
            <span className="logo">SoftByte</span>
            {
            !openMenu ? <div 
            className="button-menu" 
            onClick={() => setOpenMenu(prev => !prev)}>
                {
                    Array.from({length: 3}).map((_, index) => {
                        return ( <div className="line" key={index} /> )
                    })
                }
            </div>
            :
            <div className="close-menu" onClick={() => setOpenMenu(prev => !prev)}>
                <span>✖</span>
            </div>
            }
            {openMenu && (
            <motion.div 
            initial={{
                height: 0,
                borderBottomLeftRadius: "30%",
                borderBottomRightRadius: "30%"
            }}
            animate={{
                height: "100vh",
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0
            }}
            className={`menu-block`}>
                <div className="menu-block-content">
                    <motion.div 
                    initial={{
                        opacity: 0,
                        y: "100px"
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: .3,
                        ease: "circOut"
                    }}
                    className="logotype">SoftByte</motion.div>
                    <MotionLink 
                    initial={{
                        opacity: 0,
                        y: "100px"
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: .5,
                        ease: "circOut"
                    }}
                    href="https://soft-byte-learn.vercel.app/" 
                    target="_blank">Учебная платформа</MotionLink>
                </div>
                <div className="points-menu">
                    <ol>
                        {

                            data.map((point, index) => {
                                return (
                                    <motion.a 
                                    href={"#" + point.urlId} 
                                    onClick={() => setOpenMenu(false)}
                                    key={index}>
                                        <motion.li
                                        initial={{
                                        x: "200px",
                                        opacity: 0
                                        }}
                                        animate={{
                                            x: 0,
                                            opacity: 1
                                        }}
                                        transition={{
                                            duration: .5,
                                            delay: .1 * index,
                                            ease: "circOut"
                                        }}
                                        >{point.text}</motion.li>
                                    </motion.a>
                                )
                            })
                        }
                    </ol>
                </div>
            </motion.div>)}
        </>
    )
}