/* eslint-disable react/no-unescaped-entities */
import Reveal from "../reveal";

const Hero = () => {
	return (
		<div className="container px-8 py-24 overflow-hidden text-primary md:px-12 md:py-32">
			<div>
				<Reveal>
					<h1 className="text-6xl font-bold md:text-8xl">
						Hi 👋🏽, I'm Stav
						<span className="text-green-500">.</span>
					</h1>
				</Reveal>
				<Reveal>
					<h2 className="text-2xl font-bold md:text-4xl">
						I'm a{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 ">
							Full Stack Developer
						</span>
					</h2>
				</Reveal>
				<Reveal>
					<p className="lg:w-4/5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
						voluptatum hic delectus facilis quaerat, consequuntur eveniet quia
						assumenda adipisci totam!
					</p>
				</Reveal>
				<button></button>
			</div>
		</div>
	);
};
export default Hero;
