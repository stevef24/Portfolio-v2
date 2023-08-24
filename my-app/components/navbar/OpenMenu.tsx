import { motion } from "framer-motion";

type OpenMenuProps = {
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
	isActive: boolean;
};

const links = [
	{
		id: 1,
		name: "Home",
		href: "/",
	},
	{
		id: 2,
		name: "Blog",
		href: "/blog",
	},
	{
		id: 3,
		name: "Gallery",
		href: "/gallery",
	},
];

const OpenMenu = ({ setIsActive, isActive }: OpenMenuProps) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				scale: 0.5,
				x: "-100%",
				borderRadius: "0 50% 50% 0",
			}}
			animate={{
				opacity: 1,
				x: 0,
				scale: [0, 0.5, 1],
				borderRadius: "0 0 0 0",
			}}
			transition={{ duration: 0.3, ease: "easeInOut" }}
			exit={{ opacity: 0, x: "-100%", scale: 0.5, borderRadius: "0 50% 50% 0" }}
			className="fixed top-0 left-0 z-50 w-full h-full bg-background overflow-y:hidden"
		>
			<button
				onClick={() => {
					setIsActive(!isActive);
				}}
				className="relative p-4 transition duration-200 ease-in-out transform border border-white rounded-full cursor-pointer group stroke-primary top-4 left-7 border-rounded-full hover:rotate-180"
			>
				<svg
					className="w-4 h-4 stroke-1 fill-primary "
					version="1.1"
					id="Capa_1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 490 490"
				>
					<polygon
						points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
          489.292,457.678 277.331,245.004 489.292,32.337 "
					/>
				</svg>
			</button>
			<motion.div
				className="relative w-full h-3/4 top-20"
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<motion.ul className="flex flex-col items-start justify-center w-full h-full p-10 space-y-4 text-background">
					{links.map((link, i) => (
						<motion.li
							key={link.id}
							initial={{ opacity: 0, translateX: -200 }}
							animate={{ opacity: 1, translateX: 0 }}
							transition={{
								duration: 0.5,
								delay: i * 0.5,
								type: "spring",
								stiffness: 100,
							}}
						>
							<motion.a
								href={link.href}
								className={`font-bold cursor-pointer hover:text-transparent text-primary text-7xl bg-clip-text hover:${
									link.id === 1
										? "bg-gradient-to-r from-green-400 to-teal-400"
										: link.id === 2
										? "bg-gradient-to-r from-rose-700 to-pink-600"
										: "bg-gradient-to-r from-yellow-600 to-red-600"
								}`}
								onClick={() => setIsActive(!isActive)}
							>
								{link.name}
							</motion.a>
						</motion.li>
					))}
				</motion.ul>
			</motion.div>
		</motion.div>
	);
};

export default OpenMenu;
