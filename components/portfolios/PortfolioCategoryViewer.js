import React, { useEffect } from "react";
import styles from "../../styles/PortfolioCategoryViewer.module.scss";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

const h1TransitionVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: [-1000, 0] },
};

const portfolioTransitionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: [0, 1] },
};

export default function PortfolioCategoryViewer({
  currentPortfolio,
  portfolioElements,
  setCurrentElement,
}) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls, currentPortfolio]);

  if (currentPortfolio === "landing-page" || !currentPortfolio.length)
    return null;

  return (
    <div className={styles.container}>
      <div className={styles.portfolio}>
        <div className={styles.portfolioTitleContainer}>
          <motion.h1
            className={styles.portfolioTitle}
            initial="hidden"
            animate={controls}
            variants={h1TransitionVariants}
            transition={{
              duration: 0.5,
            }}
          >
            {currentPortfolio.replace(/-/gm, " ")}
          </motion.h1>
          <motion.h1
            className={styles.portfolioTitle}
            initial="hidden"
            animate={controls}
            variants={h1TransitionVariants}
            transition={{
              duration: 0.5,
            }}
          >
            portfolio
          </motion.h1>
        </div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={h1TransitionVariants}
          transition={{ duration: 0.65 }}
          className={styles.itemsContainer}
        >
          {currentPortfolio}
        </motion.div>
      </div>
    </div>
  );
}
