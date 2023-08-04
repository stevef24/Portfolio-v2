import { ModeToggle } from "@/components/theme-toggler";
import Image from "next/image";
import ResponsiveMenu from "@/components/navbar/responsiveMenu";
import NavSlider from "./navSlider";
import Link from "next/link";
const Navbar = () => {
	return (
		<main className="container">
			<nav className="grid items-center h-20 grid-cols-6 gap-3 lg:justify-center">
				<div className="lg:hidden">
					<ResponsiveMenu />
				</div>
				<div className="hidden col-span-1 lg:justify-start lg:flex lg:col-span-2">
					<NavSlider />
				</div>
				<div className="flex justify-center col-span-4 lg:col-span-2 lg:justify-center">
					<Link href="/">
						<svg
							width="115"
							height="37"
							viewBox="0 0 115 37"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="w-full h-full mt-2 cursor-pointer fill-primary"
						>
							<path d="M48.3053 1.92932C50.1509 1.92932 51.0737 2.80323 51.0737 4.55105L50.3163 5.41824H49.8114C49.0163 4.25527 48.2647 3.67378 47.5566 3.67378C46.3784 3.67378 45.3714 5.61655 44.5357 9.50209C44.5357 10.0802 47.1329 10.5642 52.3273 10.9541C53.1689 11.5188 53.5897 12.2952 53.5897 13.2834L54.3384 12.6986L54.5908 12.991V15.0279C53.2385 15.6867 51.3117 17.1421 48.8102 19.3941L46.0418 20.2713C45.0377 20.0159 44.5357 19.7235 44.5357 19.3941V19.1017L51.0737 14.7355L51.3262 13.2834V12.991C51.2217 12.4129 50.5514 12.1238 49.3151 12.1238L49.0627 12.4062H48.8102L48.5577 12.1238L47.5566 12.4062C44.5212 12.0969 42.928 11.5154 42.7771 10.6617V10.0769C43.3923 4.64517 45.1509 1.92932 48.0528 1.92932H48.3053Z" />
							<path d="M66.2739 1.27389C67.2432 1.27389 67.7278 1.83521 67.7278 2.95785L74.2571 1.83857V2.12091L74.5009 1.83857H75.4672L75.711 2.12091L75.9547 1.83857H76.1985C78.9379 1.95957 80.3076 2.33267 80.3076 2.95785L79.585 3.24019L77.1648 2.95785L76.1985 3.24019L74.9884 2.95785C70.8387 3.55614 67.2896 4.58467 64.3413 6.04342C59.9884 11.7978 57.812 15.2531 57.812 16.4093H58.047L61.4161 13.838L62.1474 13.5557L62.3825 13.838V14.8464C62.3825 15.3842 60.8793 16.6816 57.8729 18.7386C56.538 18.5773 55.8706 18.174 55.8706 17.5286V16.9639L56.6019 14.1708C56.0099 14.9439 55.3395 15.3304 54.5908 15.3304C54.2658 15.3035 54.1033 15.1018 54.1033 14.7254V14.1708C54.1033 13.6464 54.4254 13.1927 55.0696 12.8095C55.7313 12.3322 57.3709 10.6348 59.9884 7.7173C57.0807 7.15934 55.6268 6.60138 55.6268 6.04342V5.76108L56.3581 4.64181L57.5682 4.92415H58.5345L59.7446 4.64181V4.92415C63.4533 4.21157 65.3076 3.27716 65.3076 2.12091L66.2739 1.27389Z" />
							<path d="M66.9704 9.371L68.1457 9.65334C68.2501 12.7456 68.4852 14.2918 68.8508 14.2918L70.4701 13.4851L70.531 15.0178C70.531 15.3808 70.0493 15.8682 69.0859 16.4799V16.2077L68.8508 16.4799C68.1428 16.4799 67.3564 16.0228 66.4916 15.1086H66.2565C66.2565 15.9959 65.5485 16.7253 64.1323 17.2967C63.5055 17.0278 63.1921 16.7555 63.1921 16.4799V15.6632L63.6622 13.7473L62.3041 15.0682H61.834L61.8688 13.7372C63.5229 11.7877 65.2234 10.3323 66.9704 9.371Z" />
							<path d="M71.6802 10.8533H71.8891L72.1068 11.0953L72.3244 10.8533H72.5334L72.96 11.3474L72.5334 17.0849H72.751C73.9524 16.0228 75.029 14.3624 75.9808 12.1037H76.8427L77.9135 13.5859H78.3575V13.838L78.5665 13.5859H79.2107V14.5943L78.7841 15.0884H77.9135L76.1898 14.5943C74.5125 17.4715 73.2937 18.9672 72.5334 19.0815C71.5293 19.0815 71.0273 18.7521 71.0273 18.0933L71.4277 14.4733C70.563 15.3338 70.0958 15.2094 70.0261 14.1002C70.6007 13.4145 71.1521 12.3322 71.6802 10.8533Z" />
							<path d="M98.6245 0.588209C100.987 0.937773 102.168 1.67723 102.168 2.8066L101.898 4.70231V5.65016H102.168C107.612 4.59475 111.251 4.06704 113.085 4.06704V4.38972L113.363 4.06704H115V5.0149C104.988 6.18459 99.9826 7.66016 99.9826 9.44159C99.2571 10.2348 98.7522 11.1961 98.4678 12.3255L99.4428 11.9726L101.08 11.66L101.619 12.6078C101.01 13.2532 99.4951 13.875 97.0749 14.4733C95.1712 17.4446 93.3198 18.9302 91.5206 18.9302H91.2507L90.4324 17.9824V17.6698L93.1573 16.0867C95.6587 12.9809 97.4811 10.2382 98.6245 7.85847H98.076L92.0691 8.81641C90.9257 8.81641 89.9245 8.2887 89.0656 7.23328V6.59802C92.9541 2.59148 96.1405 0.588209 98.6245 0.588209ZM92.3389 5.96275C92.3389 6.38626 93.1602 6.70222 94.8027 6.91061L95.621 6.59802V6.91061L95.8909 6.59802H98.076C99.3471 6.59802 99.9826 5.43841 99.9826 3.11919L99.1642 2.48392L97.7974 2.8066V2.48392C96.2072 2.96121 94.3877 4.12082 92.3389 5.96275Z" />
							<path d="M103.134 15.3102H103.691C104.689 15.3102 105.34 15.7405 105.641 16.6009C105.34 17.4614 104.689 17.8916 103.691 17.8916L102.298 16.2783L103.134 15.3102Z" />
							<path d="M20.6096 15.7246C21.5216 12.7283 16.7237 12.3722 16.7237 12.3722C16.7237 12.3722 15.2962 12.9655 13.3929 13.7961C11.4896 14.6268 12.5999 15.7244 12.5999 15.7244L14.5825 17.1187C16.3274 15.9617 18.3495 17.3856 18.3495 17.3856H18.9442L18.8253 16.644C18.7857 16.4362 18.9047 16.2582 19.103 16.1101C19.9751 15.517 20.6096 15.7246 20.6096 15.7246Z" />
							<path d="M21.0855 14.8939H21.8785C21.8785 14.8939 22.8302 13.3512 23.1077 13.292C23.3854 13.2326 24.4162 13.2624 24.4162 13.2624C24.4162 13.2624 25.6454 11.6606 26.4385 11.6307C27.2315 11.6011 27.5883 11.4528 27.5883 11.4528L27.9849 11.0968C27.9849 11.0968 28.0643 10.0882 26.3989 9.79147L22.9492 10.1474C22.9492 10.1474 18.2303 11.3638 16.8822 12.1054C16.9218 12.0756 20.9663 12.5205 21.0855 14.8939Z" />
							<path d="M30.7609 9.22764C30.7609 9.22764 30.3247 8.57498 29.3729 8.18921C29.3729 8.18921 27.9849 8.2188 26.5573 9.49458C26.5573 9.49458 28.0642 9.82092 28.2228 10.5626C28.3417 11.0075 28.3022 11.1558 28.2623 11.1857C28.5802 11.1263 30.2456 10.6518 30.7609 9.22764Z" />
							<path d="M28.3024 11.1856H28.2628C28.2628 11.1856 28.2628 11.2138 28.3024 11.1856Z" />
							<path d="M32.2677 8.45631C32.7039 7.9816 33.259 7.59609 33.259 7.0026C33.259 7.0026 31.7521 7.0322 31.5142 6.11256C31.5142 6.11256 29.4522 7.35855 29.7694 7.95182C29.7694 7.95182 30.9591 8.5451 31.1574 8.99025C31.1178 8.96066 31.8315 8.93101 32.2677 8.45631Z" />
							<path d="M33.9331 4.54035C33.9331 4.54035 32.7435 4.92608 32.3073 4.30299C32.3073 4.30299 31.7521 4.80729 31.7521 5.96426C31.7521 5.96426 32.0694 6.46856 32.585 6.61691C33.1006 6.76529 33.7747 6.61691 33.7747 6.61691C33.7747 6.61712 34.647 5.43039 33.9331 4.54035Z" />
							<path d="M31.2764 2.34503C31.2764 2.34503 31.4349 3.38346 32.4262 4.09529C32.4262 4.09529 32.9019 4.57 34.052 4.30306C34.052 4.30306 34.6467 3.76917 34.052 2.79013C33.4573 1.81114 32.664 1.42537 32.664 1.42537C32.6643 1.42537 32.7039 2.1967 31.2764 2.34503Z" />
							<path d="M28.0248 1.39567C28.0248 1.39567 29.4523 2.13733 31.1178 2.25589C31.1178 2.25589 32.7038 1.75159 32.3074 1.0989C32.3074 1.0989 31.9902 0.594599 30.761 0.238682C29.5317 -0.117235 28.0248 0.00132468 27.787 0.238682C27.7867 0.268481 28.2627 0.920955 28.0248 1.39567Z" />
							<path d="M26.2801 2.61204L27.192 2.13733C27.7471 1.63303 27.8265 1.12872 27.5887 0.65401C27.3508 0.149708 26.7957 0.060736 26.7957 0.060736C26.7957 0.060736 25.6459 -0.265604 24.7336 0.594625C23.8217 1.45484 25.0113 2.49327 25.0113 2.49327C25.0907 3.05699 23.7423 3.76882 23.7423 3.76882C25.0904 4.06577 26.2801 2.61204 26.2801 2.61204Z" />
							<path d="M17.3581 17.2079C15.6132 16.6146 14.8996 17.3858 14.8996 17.3858C14.186 17.4452 13.9083 17.8901 13.9083 17.8901C13.9083 17.8901 14.186 17.8307 14.4634 18.6614C14.7411 19.5216 14.0668 19.759 14.0668 19.759C17.0408 19.8184 17.7544 19.1657 18.1511 18.4536C18.5474 17.742 17.3581 17.2079 17.3581 17.2079Z" />
							<path d="M13.472 17.9199C10.617 17.6825 11.1326 18.3648 8.95155 18.543C6.77055 18.7209 4.74837 18.7209 4.74837 18.7209C4.9467 19.4032 8.27752 19.6704 8.27752 19.6704C7.60345 19.9967 4.74837 20.1747 4.74837 20.1747C5.42244 20.9163 8.99142 20.59 8.99142 20.59C12.5999 20.6494 13.1152 20.2637 13.5119 19.9967C13.9085 19.7298 14.1464 19.4034 14.1464 18.8693C14.1066 18.3352 13.472 17.9199 13.472 17.9199Z" />
							<path d="M21.2837 18.5429C21.4027 17.6233 20.7286 16.2585 20.0941 16.14C19.4596 15.9916 19.1821 16.4959 19.1821 16.4959L19.3406 17.2969L20.1336 18.7209C20.5701 18.009 21.2837 18.5429 21.2837 18.5429Z" />
							<path d="M21.2837 19.2549C21.2442 18.6912 21.0458 18.5726 20.689 18.5726C20.3718 18.5726 20.2133 18.9583 20.2133 18.9583V19.3736L20.491 21.1537C20.491 21.1537 19.9754 22.4293 21.0066 22.3701C22.0375 22.3107 21.4428 21.1537 21.4428 21.1537C21.4425 21.1535 21.3236 19.8186 21.2837 19.2549Z" />
							<path d="M24.5353 17.5342C24.5353 17.5342 24.5749 17.2673 24.2974 17.0595C24.0197 16.8517 22.0371 15.2202 21.6012 15.1905C21.165 15.1609 20.6098 15.5168 20.4909 15.9915C20.4909 15.9915 21.2443 16.3475 21.4028 17.1781L21.9184 16.7332C21.9184 16.7332 22.5529 17.1189 22.7908 17.3858C23.0286 17.6528 23.3855 17.9791 23.4648 17.9495C23.5041 17.9495 23.7819 17.2673 24.5353 17.5342Z" />
							<path d="M25.8042 19.8482C25.2491 19.4923 24.7335 17.7418 24.7335 17.7418C24.7335 17.7418 24.575 17.6528 24.1388 17.7418C23.7026 17.8308 23.5441 18.2461 23.5441 18.2461C23.5441 18.2461 24.1388 19.2547 24.6939 20.1447C25.2491 21.0348 25.963 21.0643 26.3989 20.8864C26.7955 20.7086 26.3198 20.1745 25.8042 19.8482Z" />
							<path d="M22.0768 15.1016C22.0768 15.1016 23.0681 15.6948 23.3854 16.0212L24.0594 14.7752C24.0594 14.7752 22.9491 14.4784 23.0285 13.8851L22.0768 15.1016Z" />
							<path d="M28.0248 14.8939C28.0248 14.8939 27.7075 14.4786 27.1919 14.3302C26.6763 14.1818 24.0595 13.2918 23.4249 13.5885C23.4249 13.5885 23.306 13.8853 23.4249 14.0633C23.5439 14.2412 24.2179 14.7159 25.5266 15.1906C25.5266 15.1906 26.5575 15.6949 27.0335 15.6059C26.9936 15.5761 27.3903 14.7753 28.0248 14.8939Z" />
							<path d="M29.8092 17.5935L28.8972 16.6441L28.0249 15.0718C27.5491 14.9234 27.192 15.7541 27.192 15.7541C27.2714 16.0804 28.1438 17.2968 29.0162 18.0681C29.9282 18.8691 30.761 18.8987 31.0384 18.7207C31.3159 18.5132 29.8092 17.5935 29.8092 17.5935Z" />
							<path d="M27.5872 10.8852C27.4682 11.0037 27.032 11.3005 26.0012 12.3685C26.0012 12.3685 27.627 12.7838 27.8254 12.8728C27.8254 12.8728 28.4599 12.0717 28.5788 11.7454C28.5788 11.7158 28.6184 11.686 28.6184 11.6564C28.6579 11.4191 28.2616 10.9444 28.3407 10.7664C28.3407 10.737 27.7061 10.7666 27.5872 10.8852Z" />
							<path d="M27.43 11.7493C27.43 11.7493 27.2715 11.8679 27.43 12.1646C27.5885 12.4613 27.7473 12.9063 27.7473 12.9063C27.7473 12.9063 29.7299 13.47 30.9591 13.381C30.9591 13.381 31.5142 12.5503 31.8315 12.5799C31.8315 12.5799 31.6332 12.402 31.0385 12.2536C30.4834 12.0756 28.3818 11.6305 27.43 11.7493Z" />
							<path d="M32.6642 14.7752C32.5453 14.6269 32.1091 12.7282 32.1091 12.7282C31.8712 12.5205 31.0782 13.5293 31.0782 13.5293C31.1576 14.004 31.8712 15.1905 31.8712 15.1905C32.426 15.1905 32.6642 14.7752 32.6642 14.7752Z" />
							<path d="M33.9728 15.6652L32.823 14.8642C32.6645 15.1311 32.0695 15.3091 32.0695 15.3091C32.3868 15.6059 33.2193 16.1693 33.8538 16.3475C34.4883 16.5255 35.4003 16.7035 35.6382 16.3475C35.876 16.0214 33.9728 15.6652 33.9728 15.6652Z" />
							<path d="M18.2304 11.3339C18.2304 11.3339 18.9045 9.19797 18.6271 8.72325C18.6271 8.72325 17.953 8.36732 17.358 8.72325C17.358 8.72325 16.7235 10.4735 16.6046 12.0162C16.6046 12.0162 17.7942 11.3933 18.2304 11.3339Z" />
							<path d="M18.7063 8.45631L19.182 8.10037C19.182 8.10037 19.2614 8.81242 20.2527 8.78265C21.2441 8.75306 20.9663 8.18937 20.9663 8.18937H20.2131C20.2131 8.18937 19.9753 7.89263 19.7374 7.09177C19.4995 6.26111 18.5477 6.85441 18.5477 6.85441C18.5477 6.85441 17.596 7.62569 17.4374 8.48612C17.477 8.45632 17.8734 8.12997 18.7063 8.45631Z" />
							<path d="M15.3357 10.3846C14.9391 10.2362 13.9477 10.2362 14.1066 11.0077C14.2651 11.779 14.86 12.8768 14.86 12.8768L16.0497 12.3724C16.0099 12.402 15.6928 10.533 15.3357 10.3846Z" />
							<path d="M15.3754 10.2066C15.3754 10.2066 15.3358 9.85069 15.5737 9.76171C15.5737 9.76171 15.8116 8.8421 15.3754 8.69372C14.9392 8.51575 14.1063 8.8123 14.0273 10.3848C14.0668 10.3846 14.4236 9.93968 15.3754 10.2066Z" />
							<path d="M16.9219 9.52429L17.1598 8.78264C17.1598 8.78264 16.8425 8.69365 16.7236 8.78264C16.5651 8.87162 16.4857 9.10898 16.208 9.10898C15.9303 9.07939 15.7322 8.90121 15.7322 8.90121C15.7322 8.90121 15.9305 9.28694 15.7322 9.79126C15.7718 9.76166 16.6046 9.91003 16.9219 9.52429Z" />
							<path d="M13.1945 13.6479L14.3443 13.1436L13.4323 10.8296L12.1238 11.4229L13.1945 13.6479Z" />
							<path d="M9.86359 11.0966L10.2204 10.8297C10.2204 10.8297 10.5377 11.1264 11.1324 11.2154C11.7669 11.3044 11.9652 11.2748 11.9652 11.2748L13.2343 10.6815C13.2343 10.6815 13.0758 10.5331 12.3619 10.3552C11.6483 10.1772 10.2603 9.79145 9.86367 9.91026C9.46703 10.0288 8.63449 10.8892 8.63449 10.8892L8.95175 11.0376L9.86359 11.0966Z" />
							<path d="M7.60334 12.4909C8.67405 13.9446 11.1325 15.2796 11.5687 15.2796C12.0444 15.2796 12.1238 14.2116 12.1238 14.2116C11.8859 13.4404 8.91196 11.4229 8.91196 11.4229L7.60334 12.4909Z" />
							<path d="M5.14485 11.8086C5.42256 12.2535 5.38273 12.5207 5.38273 12.5207C5.38273 12.5207 7.16706 12.4317 7.48436 12.2239C7.48436 12.2239 8.71354 11.4229 8.67403 11.2745C8.63447 11.0965 8.31721 10.6514 7.92054 10.5922C7.48434 10.5328 4.54987 10.3549 4.27244 11.2745C4.23288 11.2745 4.86717 11.3933 5.14485 11.8086Z" />
							<path d="M5.22415 12.6393C4.94644 11.4527 3.9551 11.4527 3.9551 11.4527C3.39997 11.4823 3.16211 11.6009 3.16211 11.6009C1.57612 11.9866 1.65521 14.2412 1.45716 15.0422C1.25883 15.8433 0.664161 17.0893 0.82264 17.1487C1.02096 17.208 1.61564 16.5256 1.89335 16.14C2.17106 15.7543 3.87601 14.3008 3.87601 14.3008C5.42221 13.2326 5.22415 12.6393 5.22415 12.6393Z" />
							<path d="M1.29848 14.0929C0.941662 14.5676 0.386522 16.2289 0.148673 16.941C-0.0892042 17.653 0.0297348 17.5343 0.0297348 17.5343L0.545312 17.1783L1.10017 15.3389L1.29848 14.0929Z" />
							<path d="M11.0135 11.5416C11.0135 11.5416 10.4584 11.1857 9.07045 11.2747L10.1412 12.0757C10.1412 12.0757 10.7757 11.5714 11.0135 11.5416Z" />
							<path d="M12.7979 13.7666C12.7979 13.7666 11.8066 12.1647 11.3704 11.69C11.3704 11.69 10.8153 11.8086 10.4187 12.2537C10.4187 12.2537 11.9256 13.3811 12.2429 14.0338L12.7979 13.7666Z" />
							<path d="M5.34312 13.0843C5.22418 13.1732 5.14479 13.6181 5.62083 13.648C6.09658 13.6776 7.32578 12.5504 7.32578 12.5504C7.04807 12.6098 6.05673 12.6394 6.05673 12.6394C6.13611 12.7579 5.46205 12.9953 5.34312 13.0843Z" />
						</svg>
					</Link>
				</div>
				<div className="flex items-center justify-end gap-1 lg:col-span-2">
					<ModeToggle />
				</div>
			</nav>
		</main>
	);
};

export default Navbar;
