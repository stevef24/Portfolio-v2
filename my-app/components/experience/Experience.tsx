import React from "react";
import SectionHeader from "../sectionHeader";
import Reveal from "../reveal";
import WorkExperienceSection from "./WorkExperienceSection";

const Experience = () => {
	return (
		<section className="flex flex-col ">
			<Reveal width="100%">
				<SectionHeader title={"Experience"} order={"flex-row-reverse"} />
			</Reveal>
			{
				<Reveal width="100%">
					<WorkExperienceSection
						companyName={"Nationwide Building Society"}
						dateFrom={"2023"}
						dateTo={"Present"}
						role={"Software Engineer"}
						roleDescription={
							"Completed an intensive JavaScript-focused Coding Bootcamp covering programming, full-stack and front-end web development using React.js, back-end web development, and more. Gained hands-on experience in Git, HTML5, CSS, OOP, and Node.js. Developed a high level of proficiency in various aspects of web development through practical application."
						}
						location={"Remote"}
					/>
				</Reveal>
			}
		</section>
	);
};

export default Experience;
