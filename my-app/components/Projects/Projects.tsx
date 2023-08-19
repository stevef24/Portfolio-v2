import React from "react";
import SectionHeader from "../sectionHeader";
import Reveal from "../reveal";
import HorizontalScrollCarousel from "../carousal/ProjectCarousal";

type Props = {};

const Projects = (props: Props) => {
	return (
		<section>
			<Reveal width="100%">
				<SectionHeader title={"Projects"} order={"flex-row"} />
			</Reveal>
			<HorizontalScrollCarousel />
		</section>
	);
};

export default Projects;
