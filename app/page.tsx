import styles from "./page.module.css";
import lessonCards from "./data";

export default function HomePage() {
	return (
		<main className={styles.main}>
			<nav className={styles.nav}>
				<div className={styles.logo}>ポートフォリオ</div>
			</nav>

			<section className={styles.blogList}>
				{lessonCards.map((card) => (
					<article key={card.id} className={styles.blogItem}>
						<h2 className={styles.blogTitle}>{card.title}</h2>
						<div className={styles.blogContent}>
							<p className={styles.blogText}>{card.content}</p>
							<div className={styles.blogTags}>
								{card.tags.map((tag) => (
									<span key={tag} className={styles.tag}>
										{tag}
									</span>
								))}
							</div>
						</div>
					</article>
				))}
			</section>
		</main>
	);
}
