import Reveal from "../reveal";
import SectionHeader from "../sectionHeader";
import CardCarousal from "../cardCarousal";

const About = () => {
	return (
		<section>
			<SectionHeader title={"Tools"} order={"flex-row"} />

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

				<div>
					<CardCarousal />
				</div>
			</div>
		</section>
	);
};

export default About;
