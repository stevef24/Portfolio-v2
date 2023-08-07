type LogoContainerProps = {
	image: string;
};

const LogoContainer = () => {
	return (
		<div className="flex w-32 mx-auto rounded-lg cursor-pointer h-28 ">
			<div className="m-auto">
				<div className="group relative hover:scale-110 transform transition-200 hover:p-[1px] rounded-lg hover:bg-gradient-to-r from-green-400 to-teal-400 ">
					<button className="absolute -inset-[1px]  animate-tilt rounded-lg bg-gradient-to-r from-green-400 to-teal-400 opacity-0 blur transition duration-1000 group-hover:opacity-100 group-hover:blur group-hover:duration-200"></button>
					<div className="relative px-4 py-7 transition duration-200 rounded-lg bg-background dark:bg-[#18181b] border-primary/20 border dark:border-none text-primary hover:bg-background ">
						{"image"}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogoContainer;
