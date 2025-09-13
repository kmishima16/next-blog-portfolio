// biome-ignore-all lint/a11y/useSemanticElements: form要素ではないから

"use client";
import { useId, useState } from "react";
import type { MouseEvent } from "react";
import styles from "./page.module.css";

const Lesson1Page = () => {
	const gradientId = useId();
	const [activeDifficulty, setActiveDifficulty] = useState<string | null>(
		"Easy",
	);
	const difficulties = ["Easy", "Advanced", "Hard", "PRO"];
	const [rotate, setRotate] = useState({ x: 0, y: 0 });
	const [isButtonPressed, setIsButtonPressed] = useState(false);

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		const card = e.currentTarget;
		const { width, height, left, top } = card.getBoundingClientRect();
		const x = e.clientX - left;
		const y = e.clientY - top;

		const rotateX = -((y - height / 2) / (height / 2)) * 10;
		const rotateY = ((x - width / 2) / (width / 2)) * 10;

		setRotate({ x: rotateX, y: rotateY });
	};

	const handleMouseLeave = () => {
		setRotate({ x: 0, y: 0 });
	};

	return (
		<main className={styles.main}>
			<div
				className={styles.card}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={{
					transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
				}}
				role="group"
			>
				<div className={styles.svgContainer}>
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
				</div>
				<h3>React.js</h3>
				<p>これは最初のReactJSのレッスン</p>

				<div className={styles.toggleButtons}>
					{difficulties.map((level) => (
						<button
							key={level}
							className={`${styles.toggleButton} ${
								activeDifficulty === level ? styles.active : ""
							}`}
							onClick={() => setActiveDifficulty(level)}
							type="button"
						>
							{level}
						</button>
					))}
				</div>

				<button
					className={`${styles.startButton} ${
						isButtonPressed ? styles.active : ""
					}`}
					type="button"
					onMouseDown={() => setIsButtonPressed(true)}
					onMouseUp={() => setIsButtonPressed(false)}
					onMouseLeave={() => setIsButtonPressed(false)} // カーソルがボタンから離れた場合も考慮
				>
					Start
				</button>
			</div>
		</main>
	);
};

export default Lesson1Page;
