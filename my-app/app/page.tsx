import About from "@/components/About/About";
import Hero from "@/components/Hero/hero";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/experience/Experience";

const Home = () => {
	return (
		<main className="container">
			<Hero />
			<Projects />
			<Experience />
			<About />
			<Contact />
		</main>
	);
};

export default Home;
