/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styles from "../../styles/PortfolioViewer.module.scss";
import ModuleFactory from "../ModuleFactory";

interface PortfolioViewerProps {
  currentPortfolio: string;
  preanimationState: boolean | string;
}

export default function PortfolioViewer({ currentPortfolio, preanimationState }: PortfolioViewerProps) {
  const [elementToOpen, setElementToOpen] = useState("AboutMe");

  useEffect(() => {
    if (currentPortfolio === "frontend-development") {
      setElementToOpen("frontend-portfolio");
    }

    if (currentPortfolio === "hello-there.") {
      setElementToOpen("AboutMe");
    }
    if (currentPortfolio === "graphic-design") {
      setElementToOpen("graphic-design-portfolio");
    }

    if (currentPortfolio === "translation-and-publishing") {
      setElementToOpen("translation-portfolio");
    }
  }, [currentPortfolio]);

  return (
    <div className={styles.container}>
      <div className={styles.portfolio}>
        <div className={styles.portfolioTitleContainer}>
          <h1 className={styles.portfolioTitle}>{currentPortfolio.replace(/-/gm, " ")}</h1>
          {currentPortfolio !== "hello-there." ? <h1 className={styles.portfolioTitle}>portfolio</h1> : null}
        </div>
        <div className={styles.itemsContainer}>
          <ModuleFactory currentModule={elementToOpen} />
        </div>
      </div>
    </div>
  );
}
