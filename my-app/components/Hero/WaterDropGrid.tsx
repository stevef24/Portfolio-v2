import anime from "animejs";

const WaterDropGrid = () => {
	return <DotGrid />;
};

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;

const DotGrid = () => {
	const dots = [];
	let index = 0;

	for (let i = 0; i < GRID_WIDTH; i++) {
		for (let j = 0; j < GRID_HEIGHT; j++) {
			dots.push(
				<div
					className="p-2 transition-colors rounded-full group cursor-crosshair hover:bg-green-300"
					data-index={index}
					key={`${i}-${j}`}
				>
					<div
						className="w-2 h-2 rounded-full opacity-30 dot-point bg-gradient-to-b from-green-400 to-teal-400 "
						data-index={index}
					/>
				</div>
			);
			index++;
		}
	}

	return (
		<div
			style={{
				gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)`,
			}}
			className="grid w-fit"
		>
			{dots}
		</div>
	);
};

export default WaterDropGrid;
