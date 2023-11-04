import React, {
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion";
import styled from "styled-components";

import Footer from "../shared/Footer";
import { useMediaQuery } from "beautiful-react-hooks";

const Container = styled(motion.div)`
  position: ${({ isTouch }) => (isTouch ? "static" : "fixed")};
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  will-change: transform;

  .page-container {
    width: 100%;
    position: relative;
  }
`;

const TransitionPanel = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 10;
  .transition-panel {
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.background};
    position: absolute;
    bottom: 0;
  }
`;

const PageTemplate = ({
  children,
  hasFooter = true,
  hasTransitionPanel = false,
  ...rest
}) => {
  // scroll container
  const scrollRef = useRef(null);

  // page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0);

  // update scrollable height when browser is resizing
  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  // observe when browser is resizing
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );
    scrollRef && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const isTouch = useMediaQuery("(max-width: 769px)");

  const { scrollY } = useViewportScroll(); // measures how many pixels user has scrolled vertically
  // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
  // ... based on current scroll position to translateY the document in a natural way
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 20, mass: 0.2, stiffness: 100 }; // easing of smooth scroll
  const spring = useSpring(transform, physics); // apply easing to the negative scroll value

  useEffect(() => {
    window.scrollTo(0, 0);
    scrollY.set(0);
  }, []);

  return (
    <>
      <Container
        isTouch={isTouch}
        ref={scrollRef}
        style={{ y: !isTouch ? spring : 0 }} // translateY of scroll container using negative scroll value
      >
        <motion.div className="page-container" {...rest}>
          {children}
          {hasFooter && <Footer />}
        </motion.div>
      </Container>

      {hasTransitionPanel && (
        <TransitionPanel>
          <motion.div
            initial={{ y: "100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            exit={{ y: 0 }}
            className="transition-panel"
          ></motion.div>
        </TransitionPanel>
      )}
      {/* blank div that has a dynamic height based on the content's inherent height */}
      {/* this is neccessary to allow the scroll container to scroll... */}
      {/* ... using the browser's native scroll bar */}
      {!isTouch && <div style={{ height: pageHeight }} />}
    </>
  );
};

export default PageTemplate;
