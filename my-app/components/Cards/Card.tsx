"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React from "react";

const Card = () => {
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);
	function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		const { clientX, clientY, currentTarget } = e;
		console.log(currentTarget.getBoundingClientRect());
		let bounds = currentTarget.getBoundingClientRect();
		const xPosition = clientX - bounds.left;
		const yPosition = clientY - bounds.top;

		mouseX.set(xPosition);
		mouseY.set(yPosition);
	}
	return (
		<main className="w-full h-full">
			<div className="relative" onMouseMove={handleMouseMove}>
				<motion.div
					className="inset-0 abosolute"
					style={{
						background: useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, rgb(5 46 22), transparent 80%)`,
					}}
				></motion.div>
			</div>
		</main>
	);
};

export default Card;
