import Reveal from "../reveal";
import SectionHeader from "../sectionHeader";

type Props = {};

const Contact = (props: Props) => {
	return (
		<section>
			<Reveal width="100%">
				<SectionHeader title={"Contact"} order={"flex-row"} />
			</Reveal>
		</section>
	);
};

export default Contact;
