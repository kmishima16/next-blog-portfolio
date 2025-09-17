import { cookies } from "next/headers";
import Article from "./article";
import articles from "./data";
import styles from "./page.module.css";
import ThemeToggle from "./ThemeToggle"; // 作成したクライアントコンポーネントをインポート

type Theme = "light-theme" | "dark-theme";

const themeVariables: Record<Theme, React.CSSProperties> = {
	"light-theme": {
		"--primary-color": "#212529",
		"--secondary-color": "#6c757d",
		"--background-color": "#ffffff",
		"--surface-color": "#f8f9fa",
		"--border-color": "#dee2e6",
		"--shadow-color": "rgba(0, 0, 0, 0.1)",
		"--shadow-hover": "rgba(0, 0, 0, 0.15)",
	} as React.CSSProperties,
	"dark-theme": {
		"--primary-color": "#e9ecef",
		"--secondary-color": "#ced4da",
		"--background-color": "#212529",
		"--surface-color": "#121212",
		"--border-color": "#495057",
		"--shadow-color": "rgba(0, 0, 0, 0.3)",
		"--shadow-hover": "rgba(0, 0, 0, 0.5)",
	} as React.CSSProperties,
};

export default async function SnippetsPage() {
	// サーバーサイドでCookieを読み取る
	const cookieStore = await cookies();
	const themeCookie = cookieStore.get("theme");
	const theme: Theme =
		themeCookie?.value === "dark-theme" ? "dark-theme" : "light-theme";

	return (
		<div className={styles.fullScreenWrapper} style={themeVariables[theme]}>
			<div className={styles.container}>
				<nav className={styles.navigation}>
					<h1 className={styles.title}>OverReacting</h1>
					{/* クライアントコンポーネントに現在のテーマを渡す */}
					<ThemeToggle currentTheme={theme} />
				</nav>

				<main className={styles.main}>
					<div className={styles.articlesGrid}>
						{articles.map((article) => (
							<div key={article.id} className={styles.articleWrapper}>
								<Article {...article} />
							</div>
						))}
					</div>
				</main>
			</div>
		</div>
	);
}
