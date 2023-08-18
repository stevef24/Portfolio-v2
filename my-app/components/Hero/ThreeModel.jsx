import Script from "next/script";

const ThreeModel = () => {
	return (
		<div className="w-full h-full">
			<Script
				type="module"
				src="https://unpkg.com/@splinetool/viewer@0.9.425/build/spline-viewer.js"
			></Script>
			<spline-viewer url="https://prod.spline.design/Luj0x6qGCNfBLyrh/scene.splinecode"></spline-viewer>
		</div>
	);
};

export default ThreeModel;
