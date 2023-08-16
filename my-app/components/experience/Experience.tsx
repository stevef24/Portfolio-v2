import React from "react";
import SectionHeader from "../sectionHeader";
import Reveal from "../reveal";
import WorkExperienceSection from "./WorkExperienceSection";

const Experience = () => {
	return (
		<>
			<Reveal width="100%">
				<SectionHeader title={"Experience"} order={"flex-row-reverse"} />
			</Reveal>
			{
				<Reveal>
					<WorkExperienceSection
						companyName={"Nationwide Building Society"}
						dateFrom={"dateFrom"}
						dateTo={"dateTo"}
						role={"role"}
						roleDescription={"roleDescription"}
						location={"location"}
					/>
				</Reveal>
			}
		</>
	);
};

export default Experience;
