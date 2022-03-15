import React, { useEffect, useLayoutEffect } from "react";
import styles from "../../styles/PortfolioCategoryViewer.module.scss";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

export default function PortfolioCategoryViewer({
  currentPortfolio,
  portfolioElements,
  preanimationState,
  setCurrentElement,
}) {
  const transitionVariants = {
    hidden: { opacity: 0, x: [0, 1000] },
    visible: { opacity: 1, x: [-1000, 0] },
  };

  const animationControls = useAnimation();

  function swipeAnimation() {
    console.log("ok");
    animationControls.start("hidden");
    setTimeout(() => {
      animationControls.start("visible");
    }, 500);
  }

  useEffect(() => {
    swipeAnimation();
  }, [preanimationState]);

  if (currentPortfolio === "landing-page" || !currentPortfolio.length)
    return null;

  return (
    <div className={styles.container}>
      <div className={styles.portfolio}>
        <div className={styles.portfolioTitleContainer}>
          <motion.h1
            className={styles.portfolioTitle}
            initial="hidden"
            animate={animationControls}
            variants={transitionVariants}
            transition={{
              duration: 0.5,
            }}
          >
            {currentPortfolio.replace(/-/gm, " ")}
          </motion.h1>
          <motion.h1
            className={styles.portfolioTitle}
            initial="hidden"
            animate={animationControls}
            variants={transitionVariants}
            transition={{
              duration: 0.55,
            }}
          >
            portfolio
          </motion.h1>
        </div>
        <motion.div
          initial="hidden"
          animate={animationControls}
          variants={transitionVariants}
          transition={{ duration: 0.65 }}
          className={styles.itemsContainer}
        >
          {currentPortfolio}
        </motion.div>
      </div>
    </div>
  );
}
