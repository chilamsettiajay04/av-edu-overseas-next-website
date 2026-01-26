"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef, useEffect, useState } from "react";

interface ScrollAnimationProps {
    children: ReactNode;
    className?: string;
    variant?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleUp";
    delay?: number;
}

const variants = {
    fadeUp: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    slideLeft: {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
    },
    slideRight: {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0 },
    },
    scaleUp: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
};

const ScrollAnimation = ({
    children,
    className = "",
    variant = "fadeUp",
    delay = 0,
}: ScrollAnimationProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1, margin: "0px 0px -50px 0px" });
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [isInView, hasAnimated]);

    // Show content immediately if already in view on mount (direct navigation)
    const shouldAnimate = hasAnimated || isInView;

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: shouldAnimate ? delay : 0, ease: "easeOut" }}
            variants={variants[variant]}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation;
