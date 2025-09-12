import { useId } from "react";
import styles from "./page.module.css";

export default function HomePage() {
	const selectId = useId();

	return (
		<main className={styles.main}>
			<nav className={styles.nav}>
				<div className={styles.logo}>PROJECTSCHOOL</div>
				<ul>
					<li>
						<p>Practice</p>
					</li>
					<li>
						<p>Pricing</p>
					</li>
					<li>
						<p>Articles</p>
					</li>
					<li>
						<p>FAQ</p>
					</li>
				</ul>
				<div className={styles.authButtons}>
					<button className={styles.loginButton} type="button">Login</button>
					<button className={styles.signupButton} type="button">Sign Up</button>
				</div>
			</nav>

			<header className={styles.header}>
				<h1>React</h1>
			</header>

			<section className={styles.progressBar}>
				{Array.from({ length: 60 }, (_, i) => (
					<div key={i + 1} className={styles.progressNumber}>
						{i + 1}
					</div>
				))}
			</section>

			<section className={styles.filter}>
				<label htmlFor={selectId}>Filter:</label>
				<select id={selectId} className={styles.filterSelect}>
					<option value="all">All</option>
				</select>
			</section>

			<section className={styles.lessonGrid}>
				<article className={styles.lessonCard}>
					<div className={styles.cardImage}>
						{/* 画像はCSSのbackground-imageで表示することを想定 */}
					</div>
					<h3>React 3D Interactive Card</h3>
					<p>
						このレッスンでは、Reactの関数コンポーネントを使ってカード構造を作ります。
						マウス移動のハンドリングやenter,
						leaveのイベントリスナーによる視覚効果の作成やインタラクションを
						コンポーネントに実装します。
					</p>
					<div className={styles.cardMeta}>
						<p>AUTHOR: JEVIN B</p>
						<p>DIFFICULTY: EASY</p>
					</div>
				</article>

				<article className={styles.lessonCard}>
					<div className={styles.cardImage}>
						{/* 画像はCSSのbackground-imageで表示することを想定 */}
					</div>
					<h3>BMI Tracker</h3>
					<p>
						Welcome to the BMI Calculator! This React component allows you to
						input your weight and height, then calculates your Body Mass Index
						(BMI) and provides a message indicating your BMI category.
					</p>
					<div className={styles.cardMeta}>
						<p>AUTHOR: JEVIN B</p>
						<p>DIFFICULTY: EASY</p>
					</div>
				</article>

				<article className={styles.lessonCard}>
					<div className={styles.cardImage}>
						{/* 画像はCSSのbackground-imageで表示することを想定 */}
					</div>
					<h3>Dark-Light Mode Toggle</h3>
					<p>
						This tutorial guides you through setting up a React project to
						display articles with a toggleable light and dark theme. By
						following these steps, you'll create a structured application with
						styled components and basic functionality.
					</p>
					<div className={styles.cardMeta}>
						<p>AUTHOR: JEVIN B</p>
						<p>DIFFICULTY: EASY</p>
					</div>
				</article>
			</section>
		</main>
	);
}
