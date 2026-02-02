'use client';

import Link from "next/link";
import { useState, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data: { urlId: string; text: string }[] = [
  { urlId: "", text: "Главная" },
  { urlId: "", text: "Продакшен" },
  { urlId: "", text: "Лаборатория" },
  { urlId: "", text: "Экспертиза" },
  { urlId: "", text: "Стек" },
  { urlId: "", text: "FaQ" },
  { urlId: "", text: "Контакты" },
];

/* ================== VARIANTS ================== */

const menuVariants = {
  hidden: {
    scaleY: 0,
    borderBottomLeftRadius: "30%",
    borderBottomRightRadius: "30%",
  },
  visible: {
    scaleY: 1,
    borderBottomLeftRadius: "0%",
    borderBottomRightRadius: "0%",
    transition: {
      duration: 0.45,
      ease: "easeOut",
      when: "beforeChildren",
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.35,
      ease: "easeIn",
    },
  },
};

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "circOut",
      duration: 0.45,
    },
  },
};

/* ================== COMPONENT ================== */

export default function Navigation(): JSX.Element {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <span className="logo">SoftByte</span>

      {!openMenu ? (
        <button
          className="button-menu"
          onClick={() => setOpenMenu(true)}
          aria-label="Open menu"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <span className="line" key={i} />
          ))}
        </button>
      ) : (
        <button
          className="close-menu"
          onClick={() => setOpenMenu(false)}
          aria-label="Close menu"
        >
          ✖
        </button>
      )}

      <AnimatePresence>
        {openMenu && (
          <motion.nav
            className="menu-block"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ transformOrigin: "top" }}
          >
            <motion.div
              className="menu-block-content"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="logotype"
                variants={itemVariants}
              >
                SoftByte
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  href="https://soft-byte-learn.vercel.app/"
                  target="_blank"
                >
                  Учебная платформа
                </Link>
              </motion.div>

              <ol className="points-menu">
                {data.map((point, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                  >
                    <Link href={point.urlId}>
                      {point.text}
                    </Link>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
