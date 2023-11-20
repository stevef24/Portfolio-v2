const Gallery = () => {
	return (
		<section className="container px-8 py-24 overflow-hidden text-primary md:px-12 md:py-12 selection:bg-yellow-600 ">
			<h1 className="text-5xl font-bold text-center text-transparent md:text-6xl lg:text-8xl bg-clip-text bg-gradient-to-br from-yellow-600 to-red-600">
				Gallery
			</h1>
			<h2
				className="mt-2 text-2xl font-bold text-center md:text-4xl text-primary"
				style={{ lineHeight: 1.3 }}
			>
				<span> 3D and Animation Experiments</span>
			</h2>
		</section>
	);
};

export default Gallery;
