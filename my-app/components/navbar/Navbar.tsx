import { ModeToggle } from "../theme-toggler";
import Image from "next/image";
import ResponsiveMenu from "./responsiveMenu";
const Navbar = () => {
	return (
		<div className="container">
			<nav className="grid items-center h-20 grid-cols-6 gap-3 lg:justify-center">
				<div className="lg:hidden">
					<ResponsiveMenu />
				</div>
				<div className="hidden col-span-1 lg:justify-start lg:flex lg:col-span-2">
					<ul className="justify-center hidden lg:col-span-4 lg:gap-x-8 xl:gap-x-10 lg:flex">
						<li>Home</li>
						<li>Blog</li>
						<li>Project</li>
					</ul>
				</div>
				<div className="flex justify-center col-span-4 lg:col-span-2 lg:justify-center">
					<Image src="/Logo.png" alt="Logo image" width={120} height={120} />
				</div>
				<div className="flex items-center justify-end gap-1 lg:col-span-2">
					<ModeToggle />
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
