import Hero from "@/components/Hero/hero";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/experience/Experience";
import Tools from "@/components/Tech/Tools";

const Home = () => {
	return (
		<main className="container">
			<Hero />
			<Projects />
			<Experience />
			<Tools />
			<Contact />
		</main>
	);
};

export default Home;
