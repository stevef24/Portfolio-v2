import Reveal from "@/components/reveal";

const Blog = () => {
	return (
		<section className="container px-8 py-24 overflow-hidden text-primary md:px-12 md:py-12">
			<div className="flex flex-col items-center justify-center">
				<Reveal gradient={"bg-gradient-to-r from-rose-700 to-pink-6000"}>
					<h1 className="text-5xl font-bold leading-normal text-center text-transparent md:text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600">
						Blog
					</h1>
				</Reveal>
				<span>Code. Design. Life.</span>
			</div>
		</section>
	);
};

export default Blog;
