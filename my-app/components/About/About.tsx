import Reveal from "../reveal";
import SectionHeader from "../sectionHeader";
import CardCarousal from "../cardCarousal";

const About = () => {
	return (
		<>
			<Reveal width="100%">
				<SectionHeader title={"About"} order={"flex-row"} />
			</Reveal>

			<div className="container">
				<Reveal>
					<p className="mt-6 text-justify md:text-center ">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam et
						impedit, laudantium aperiam modi quasi dignissimos recusandae,
						ducimus excepturi illum voluptatum praesentium at, omnis incidunt
						illo sunt expedita alias dolor error dolorem beatae maiores minus
						asperiores? Odit expedita explicabo, minus corporis veritatis soluta
						doloremque aperiam cum eaque culpa molestias fuga.
					</p>
				</Reveal>

				<div className="flex items-center justify-center">
					<CardCarousal />
				</div>
			</div>
		</>
	);
};

export default About;
