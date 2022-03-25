import React, { useEffect } from "react";
import styles from "../../styles/PortfolioCategoryViewer.module.scss";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import ModuleDealer from "../ModuleDealer";

export default function PortfolioCategoryViewer({
  currentPortfolio,
  preanimationState,
  setCurrentElement,
}) {
  const transitionVariants = {
    hidden: { opacity: [1, 0], x: [0, 1000] },
    visible: { opacity: [0, 1], x: [-1000, 0] },
  };

  const animationControls = useAnimation();

  function swipeAnimation() {
    animationControls.start("hidden");
    setTimeout(() => {
      animationControls.start("visible");
    }, 500);
  }

  useEffect(() => {
    swipeAnimation();
  }, [preanimationState]);

  return (
    <div className={styles.container}>
      <div className={styles.portfolio}>
        <motion.div
          className={styles.portfolioTitleContainer}
          initial="hidden"
          animate={animationControls}
          variants={transitionVariants}
          transition={{
            duration: 0.5,
          }}
        >
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
          {currentPortfolio !== "hello-there." ? (
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
          ) : null}
        </motion.div>
        <motion.div
          initial="hidden"
          animate={animationControls}
          variants={transitionVariants}
          transition={{ duration: 0.65 }}
          className={styles.itemsContainer}
        >
          <ModuleDealer currentModule={"ListOfProjects"} />
        </motion.div>
      </div>
    </div>
  );
}
