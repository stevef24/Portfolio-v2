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
		<section className="flex flex-col w-full">
			<div className="flex items-center justify-between w-full space-y-1">
				<h3 className="text-xl font-bold ">{companyName}</h3>
				<p>
					{dateFrom}-{dateTo}
				</p>
			</div>
			<div className="flex items-center justify-between w-full space-y-4">
				<h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
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
