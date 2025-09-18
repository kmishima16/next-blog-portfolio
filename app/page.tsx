import styles from "./page.module.css";
import lessonCards from "./data";
import Link from "next/link";

export default function HomePage() {
	return (
		<main className={styles.main}>
			<nav className={styles.nav}>
				<div className={styles.logo}>ポートフォリオ</div>
			</nav>

			<section className={styles.blogList}>
				{lessonCards.map((card) => (
					<article key={card.id} className={styles.blogItem}>
						<h2 className={styles.blogTitle}>
							<Link href={card.url} className={styles.blogTitleLink}>
								{card.title}
							</Link>
						</h2>
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
