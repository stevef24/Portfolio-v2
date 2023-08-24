"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type Props = {
	children: JSX.Element;
	width?: "fit-content" | "100%";
	gradient?: string;
};

export default function Reveal({
	children,
	width = "fit-content",
	gradient = "bg-gradient-to-r from-green-400 to-teal-400",
}: Props) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();
	const slideControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			//fire the animation
			mainControls.start("visible");
			slideControls.start("visible");
		}
	}, [isInView]);

	return (
		<div
			ref={ref}
			style={{ position: "relative", width, overflow: "hidden", marginTop: 1 }}
		>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.5, delay: 0.25 }}
			>
				{children}
			</motion.div>
			<motion.div
				variants={{
					hidden: { left: 0 },
					visible: { left: "100%" },
				}}
				initial="hidden"
				animate={slideControls}
				transition={{ duration: 0.3, ease: "easeIn" }}
				style={{
					position: "absolute",
					top: 4,
					bottom: 4,
					left: 0,
					right: 0,
					zIndex: 15,
				}}
				className={gradient}
			></motion.div>
		</div>
	);
}
