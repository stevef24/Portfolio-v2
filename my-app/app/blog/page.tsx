import ThreeModel from "@/components/blog/BlogThreeModel";
import Reveal from "@/components/reveal";

const Blog = () => {
	return (
		<main className="container relative px-8 py-24 overflow-hidden text-primary md:px-12 md:py-12 selection:bg-rose-700">
			<div className="flex flex-col items-center justify-center">
				<Reveal gradient={"bg-gradient-to-r from-rose-700 to-pink-600"}>
					<h1 className="text-5xl font-bold text-center md:text-6xl lg:text-8xl">
						<span
							className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600"
							style={{ lineHeight: 1.3 }}
						>
							Blog posts
						</span>
					</h1>
				</Reveal>
				<Reveal gradient={"bg-gradient-to-r from-rose-700 to-pink-6000"}>
					<h2
						className="mt-2 text-2xl font-bold md:text-4xl text-primary"
						style={{ lineHeight: 1.3 }}
					>
						Code
						<span className="text-transparent bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text">
							.{" "}
						</span>
						Design
						<span className="text-transparent bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text">
							.{" "}
						</span>
						Animation
						<span className="text-transparent bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text">
							.
						</span>
					</h2>
				</Reveal>
				<div className="w-[400px] h-[400px] ">
					<ThreeModel />
				</div>
			</div>
		</main>
	);
};

export default Blog;
