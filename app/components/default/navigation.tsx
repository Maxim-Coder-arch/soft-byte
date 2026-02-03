'use client';

import Link from "next/link";
import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MotionLink = motion(Link);

const data: { urlId: string; text: string }[] = [
  { urlId: "hero-section", text: "Главная" },
  { urlId: "projects-card", text: "Проекты" },
  { urlId: "our-stack-section", text: "Стек" },
  { urlId: "footer", text: "Контакты" },
];

export default function Navigation(): JSX.Element {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <span className="logo">SoftByte</span>

      {!openMenu ? (
        <div
          className="button-menu"
          onClick={() => setOpenMenu(true)}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="line" key={index} />
          ))}
        </div>
      ) : (
        <div
          className="close-menu"
          onClick={() => setOpenMenu(false)}
        >
          <span>✖</span>
        </div>
      )}

      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="menu-block"
          >
            <div className="menu-block-content">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="logotype"
              >
                SoftByte
              </motion.div>

              <MotionLink
                href="https://soft-byte-learn.vercel.app/"
                target="_blank"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                Учебная платформа
              </MotionLink>
            </div>

            <div className="points-menu">
              <ol>
                {data.map((point, index) => (
                  <motion.a
                    href={`#${point.urlId}`}
                    key={point.urlId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.35 + index * 0.08,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    onClick={() => setOpenMenu(false)}
                  >
                    <li>
                      {point.text}
                    </li>
                  </motion.a>
                ))}
              </ol>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
