import About from "@/components/About/About";
import Hero from "@/components/Hero/hero";
import Contact from "@/components/Contact/Contact";

const Home = () => {
	return (
		<main className="container">
			<Hero />
			<About />
			<Contact />
		</main>
	);
};

export default Home;
