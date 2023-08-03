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
	{ id: 3, name: "Project", href: "/projects" },
	{ id: 4, name: "About", href: "/about" },
];

const NavSlider = () => {
	let [active, setActive] = useState(links[0].id);
	return (
		<div>
			<ul className="justify-center hidden lg:col-span-4 lg:flex">
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
							<motion.div
								layoutId="green-pill"
								className="absolute inset-0 bg-green-500 rounded-full "
							></motion.div>
						)}
						<span className="relative z-10">{link.name}</span>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default NavSlider;
