import styles from './page.module.css';

interface ArticleProps {
	id: number;
	title: string;
	date: Date;
	length: number;
	snippet: string;
}

export default function Article({ title, date, length, snippet }: ArticleProps) {
	const formatDate = (date: Date) => {
		return date.toLocaleDateString('ja-JP', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	};

	return (
		<article className={styles.article}>
			<h2 className={styles.articleTitle}>{title}</h2>
			<div className={styles.articleMeta}>
				<span className={styles.articleDate}>{formatDate(date)}</span>
				<span className={styles.articleLength}>{length} min read</span>
			</div>
			<p className={styles.articleSnippet}>{snippet}</p>
		</article>
	);
}
