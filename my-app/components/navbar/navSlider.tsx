"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const links = [
	{
		id: 1,
		name: "Home",
		href: "/",
	},
	{ id: 2, name: "Blog", href: "/blog" },
	{ id: 3, name: "Gallery", href: "/gallery" },
];

const NavSlider = () => {
	let [active, setActive] = useState(links[0].id);
	return (
		<div>
			<div className="justify-center hidden lg:col-span-4 lg:flex">
				{links.map((link, i) => (
					<Link
						href={link.href}
						key={link.id}
						onClick={() => setActive(link.id)}
						className={`${
							active === link.id ? "" : "hover:opacity-50"
						} relative rounded-full px-3 py-1.5 text-sm font-medium text0white outline-2 outline-green-500 focus-visible:outline`}
					>
						{active === link.id && (
							<motion.span
								layoutId="green-pill"
								className={`absolute inset-0 rounded-full ${
									link.id === 1
										? "bg-gradient-to-r from-green-400 to-teal-400"
										: link.id === 2
										? "bg-gradient-to-r from-rose-700 to-pink-600"
										: "bg-gradient-to-br from-yellow-600 to-red-600"
								}`}
								style={{
									borderRadius: "9999",
								}}
								transition={{ duration: 0.5, type: "spring" }}
							></motion.span>
						)}
						<span className="relative z-10 ">{link.name}</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default NavSlider;
