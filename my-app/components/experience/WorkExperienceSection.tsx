import Reveal from "../reveal";

type WorkExperienceSectionProps = {
	companyName?: string;
	dateFrom: string;
	dateTo: string;
	role: string;
	roleDescription: string;
	location: string;
	tech?: string[];
	order: string;
};

const WorkExperienceSection = ({
	companyName,
	dateFrom,
	dateTo,
	role,
	roleDescription,
	location,
	tech,
}: WorkExperienceSectionProps) => {
	return (
		<section className={`flex flex-col w-full md:flex-row my-4 md:divide-x-2`}>
			<div className="w-full md:w-2/6">
				<Reveal width="100%">
					<div className="flex flex-col items-start justify-between w-full space-y-1">
						<h3 className="text-lg font-bold md:text-xl ">{companyName}</h3>
						<h4 className="font-bold text-transparent text-md md:text-lg bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
							{role}
						</h4>
					</div>
				</Reveal>
				<Reveal width="100%">
					<div className="flex items-center w-full gap-4">
						<div className="flex items-center justify-center gap-2">
							<svg
								width="20px"
								height="20px"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								className="dark:fill-primary/50 fill-background"
							>
								<path
									d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
									stroke="#000000"
									stroke-width="1"
									stroke-linecap="round"
								/>
							</svg>
							<p
								style={{ margin: 0 }}
								className="text-xs text-primary/50 Class Properties"
							>
								{dateFrom}-{dateTo}
							</p>
						</div>
						<div
							className="flex items-center justify-center gap-2"
							style={{ margin: 0 }}
						>
							<svg
								width="20px"
								height="20px"
								viewBox="0 0 24 24"
								className="dark:fill-primary/50 fill-background"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
									stroke="#000000"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
									stroke="#000000"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<p style={{ margin: 0 }} className="text-xs text-primary/50">
								{location}
							</p>
						</div>
					</div>
				</Reveal>
			</div>
			<div className="w-full md:w-4/6">
				<Reveal width="100%">
					<div>
						<p className="ml-4 text-justify">{roleDescription}</p>
					</div>
				</Reveal>
				<div className="mt-2 ml-4 ">
					{tech &&
						tech?.map((techItem, index) => (
							<button
								key={`${index} + ${techItem}`}
								className="px-5 py-1 mb-2 mr-2 text-xs text-center text-gray-900 rounded-full bg-gradient-to-r from-green-400 to-teal-400 hover:bg-gradient-to-l hover:from-green-400 hover:to-teal-400"
							>
								{techItem}
							</button>
						))}
				</div>
			</div>
		</section>
	);
};

export default WorkExperienceSection;
