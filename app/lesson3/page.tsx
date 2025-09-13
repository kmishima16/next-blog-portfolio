"use client";

import { useState, useEffect } from "react";
import Article from "./article";
import articles from "./data";
import styles from "./page.module.css";

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

function getStorageTheme(): Theme {
	if (typeof window !== "undefined") {
		const savedTheme: Theme = localStorage.getItem("theme") as Theme;
		return savedTheme || "light-theme";
	}
	return "light-theme";
}

export default function SnippetsPage() {
	const [theme, setTheme] = useState<Theme>("light-theme");

	useEffect(() => {
		const savedTheme = getStorageTheme();
		setTheme(savedTheme);
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("theme", theme);
		}
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) =>
			prevTheme === "light-theme" ? "dark-theme" : "light-theme",
		);
	};

	return (
		<div className={styles.fullScreenWrapper} style={themeVariables[theme]}>
			<div className={styles.container}>
				<nav className={styles.navigation}>
					<h1 className={styles.title}>OverReacting</h1>
					<div className={styles.themeToggleContainer}>
						<span className={styles.lightIcon}>light</span>
						<button
							type="button"
							className={`${styles.themeToggle} ${theme === "dark-theme" ? styles.themeToggleDark : ""}`}
							onClick={toggleTheme}
							aria-label={`Switch to ${theme === "light-theme" ? "dark" : "light"} theme`}
						>
							<span className={styles.toggleSlider}></span>
						</button>
						<span className={styles.darkIcon}>dark</span>
					</div>
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
