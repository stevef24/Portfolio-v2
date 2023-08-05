type ButtonProps = {
	title: string;
};

const MainButton = ({ title }: ButtonProps) => {
	return (
		<div className="flex w-64 mx-auto rounded-lg cursor-pointer h-28">
			<div className="m-auto">
				<div className="group relative p-0.5 rounded-lg bg-gradient-to-r from-green-400 to-teal-400 ">
					<button className="absolute -inset-0.5  animate-tilt rounded-lg bg-gradient-to-r from-green-400 to-teal-400 opacity-0 blur transition duration-1000 group-hover:opacity-100 group-hover:blur group-hover:duration-200"></button>
					<div className="relative px-6 py-2 transition duration-200 rounded-lg bg-background dark:bg-black text-primary hover:bg-background ">
						{title}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainButton;
