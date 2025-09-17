import styles from "./page.module.css";
import lessonCards from "./data";

export default function HomePage() {
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
					<button className={styles.loginButton} type="button">
						Login
					</button>
					<button className={styles.signupButton} type="button">
						Sign Up
					</button>
				</div>
			</nav>

			<header className={styles.header}>
				<h1>React</h1>
			</header>

			<section className={styles.lessonGrid}>
				{lessonCards.map((card) => (
					<article key={card.id} className={styles.lessonCard}>
						<div className={styles.cardImage}>
							{/* 画像はCSSのbackground-imageで表示することを想定 */}
						</div>
						<h3>{card.title}</h3>
						<p>{card.content}</p>
					</article>
				))}
			</section>
		</main>
	);
}
