type WorkExperienceSectionProps = {
	companyName: string;
	dateFrom: string;
	dateTo: string;
	role: string;
	roleDescription: string;
	location: string;
	tech?: string[];
};

const WorkExperienceSection = ({
	companyName,
	dateFrom,
	dateTo,
	role,
	roleDescription,
	location,
}: WorkExperienceSectionProps) => {
	return (
		<section className="container w-full">
			<div className="flex justify-between w-full">
				<h3 className="text-xl font-bold ">{companyName}</h3>
				<p>
					{dateFrom}-{dateTo}
				</p>
			</div>
			<div>
				<h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 ">
					{role}
				</h4>
				<p>{location}</p>
			</div>
			<div>
				<p>{roleDescription}</p>
			</div>
			<hr className="mt-4" />
		</section>
	);
};

export default WorkExperienceSection;
