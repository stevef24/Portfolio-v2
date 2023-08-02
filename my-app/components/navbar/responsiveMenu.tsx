"use client";
import OpenMenu from "./OpenMenu";
import styles from "./responsiveMenu.module.scss";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function ResponsiveMenu() {
	const [isActive, setIsActive] = useState(true);

	return (
		<>
			<button
				onClick={() => {
					setIsActive(!isActive);
				}}
				className="cursor-pointer"
			>
				<svg
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					className="w-8 h-8 transition duration-200 ease-in-out transform hover:rotate-180 hover:stroke-green-500 stroke-primary"
				>
					<path
						d="M4 18L20 18"
						stroke-width="2"
						stroke-linecap="round"
						className="stroke-inherit"
					/>
					<path
						d="M4 12L20 12"
						className="stroke-inherit"
						stroke-width="2"
						stroke-linecap="round"
					/>
					<path
						className="stroke-inherit"
						d="M4 6L20 6"
						stroke="#000000"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</svg>
			</button>
			<AnimatePresence>
				{isActive && <OpenMenu setIsActive={setIsActive} isActive={isActive} />}
			</AnimatePresence>
		</>
	);
}
