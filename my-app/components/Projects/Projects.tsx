import React from "react";
import SectionHeader from "../sectionHeader";
import Reveal from "../reveal";

type Props = {};

const Projects = (props: Props) => {
	return (
		<>
			<Reveal width="100%">
				<SectionHeader title={"Projects"} order={"flex-row"} />
			</Reveal>
		</>
	);
};

export default Projects;
