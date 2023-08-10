import About from "@/components/About/About";
import Hero from "@/components/Hero/hero";
import Contact from "@/components/Contact/Contact";
import Projects from "./projects/page";

const Home = () => {
	return (
		<main className="container">
			<Hero />
			<About />
			<Contact />
			<Projects />
		</main>
	);
};

export default Home;
