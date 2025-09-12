import { useId } from "react";
import styles from "./page.module.css";

const Lesson1Page = () => {
	const gradientId = useId();

	return (
		<main className={styles.main}>
			<div className={styles.card}>
				<svg
					width="100"
					height="100"
					viewBox="0 0 100 100"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>React Logo</title>
					<circle cx="50" cy="50" r="48" stroke="#61dafb" strokeWidth="3.2" />
					<circle cx="50" cy="50" r="12" stroke="#61dafb" strokeWidth="3.2" />
					<ellipse
						cx="50"
						cy="50"
						rx="40"
						ry="15.2"
						stroke="#61dafb"
						strokeWidth="3.2"
					/>
					<ellipse
						cx="50"
						cy="50"
						rx="40"
						ry="15.2"
						transform="rotate(60 50 50)"
						stroke="#61dafb"
						strokeWidth="3.2"
					/>
					<ellipse
						cx="50"
						cy="50"
						rx="40"
						ry="15.2"
						transform="rotate(120 50 50)"
						stroke="#61dafb"
						strokeWidth="3.2"
					/>

					<defs>
						<linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#8e2de2" stopOpacity="1" />
							<stop offset="100%" stopColor="#4a00e0" stopOpacity="1" />
						</linearGradient>
					</defs>

					<text
						x="50"
						y="54"
						fontFamily="Arial, sans-serif"
						fontSize="16"
						fontWeight="bold"
						fill={`url(#${gradientId})`}
						textAnchor="middle"
					>
						REACT
					</text>
				</svg>
				<h3>React.js</h3>
				<p>これは最初のReactJSのレッスンです</p>
			</div>
		</main>
	);
};

export default Lesson1Page;
