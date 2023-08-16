type SectionHeaderProps = {
	title: string;
	order: string;
};

const SectionHeader = ({ title, order }: SectionHeaderProps) => {
	return (
		<div className={`flex  items-center justify-center gap-4 ${order}`}>
			<h3 className="flex text-3xl font-bold md:text-5xl text-primary">
				{title}{" "}
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
					.
				</span>
			</h3>
			<div className="w-full h-[1px] dark:bg-white/20 bg-primary/20" />
		</div>
	);
};

export default SectionHeader;
