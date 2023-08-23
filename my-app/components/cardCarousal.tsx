import styles from "./cardCarousal.module.css";
import LogoContainer from "./Cards/logoContainer";

const CardCarousal = () => {
	const arr = new Array(100).fill(0);
	return (
		<>
			<div className={`${styles.slider} `}>
				<div className={`${styles.sliderTrack}`}>
					{arr.map((i) => {
						return <LogoContainer key={`${i} + key`} />;
					})}
				</div>
				<div className={`${styles.sliderTrack} ${styles.reversed}`}>
					{arr.map((i) => {
						return <LogoContainer key={i} />;
					})}
				</div>
			</div>
		</>
	);
};

export default CardCarousal;
