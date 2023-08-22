// NewsTicker.js
import React, { useEffect, useRef } from "react";
import styles from "./NewsTicker.module.css";

const NewsTicker = ({ headlines }) => {
  const tickerContainerRef = useRef(null);
  const tickerItemsRef = useRef([]);

  useEffect(() => {
    const tickerContainer = tickerContainerRef.current;
    const tickerItems = tickerItemsRef.current;
    let totalWidth = 0;

    tickerItems.forEach((item) => {
      totalWidth += item.offsetWidth;
    });

    const gap = 20; // Adjust the gap size as needed

    tickerContainer.style.width = totalWidth + gap * headlines.length + "px";

    let animationFrameId;
    let scrollStep = 1;
    let currentPos = totalWidth + gap * headlines.length; // Start from the right corner

    const scrollTicker = () => {
      currentPos -= scrollStep;
      tickerContainer.scrollLeft = currentPos;

      if (currentPos <= -totalWidth) {
        currentPos = gap * headlines.length;
        tickerContainer.scrollLeft = currentPos;

        // Move the first headline to the end of the container
        const firstItem = tickerItemsRef.current[0];
        tickerContainer.appendChild(firstItem);
      }

      animationFrameId = requestAnimationFrame(scrollTicker);
    };

    scrollTicker();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [headlines]);

  return (
    <div className={styles.ticker}>
      <div className={`${styles.tickerContainer} ticker-container`} ref={tickerContainerRef}>
        {headlines.map((headline, index) => (
          <div key={index} className={styles.tickerItemWrapper} style={{ marginRight: "200px" }} ref={(el) => (tickerItemsRef.current[index] = el)}>
            <h2 className={styles.tickerItem}>
              {headline}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
