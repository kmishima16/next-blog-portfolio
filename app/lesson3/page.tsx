'use client';

import { useState, useEffect } from 'react';
import Article from './article';
import articles from './data';
import styles from './page.module.css';

// Theme variables
const themeVariables = {
	'light-theme': {
		'--primary-color': '#212529', /* ダークグレー */
		'--secondary-color': '#6c757d', /* グレー */
		'--background-color': '#ffffff', /* 白 */
		'--surface-color': '#f8f9fa', /* 薄いグレー */
		'--border-color': '#dee2e6', /* ボーダー色 */
		'--shadow-color': 'rgba(0, 0, 0, 0.1)',
		'--shadow-hover': 'rgba(0, 0, 0, 0.15)',
	} as React.CSSProperties,
	'dark-theme': {
		'--primary-color': '#e9ecef', /* ライトグレー */
		'--secondary-color': '#ced4da', /* 非常に明るいグレー */
		'--background-color': '#212529', /* ダークグレー */
		'--surface-color': '#121212', /* ほぼ黒 */
		'--border-color': '#495057', /* ダークボーダー色 */
		'--shadow-color': 'rgba(0, 0, 0, 0.3)',
		'--shadow-hover': 'rgba(0, 0, 0, 0.5)',
	} as React.CSSProperties,
};

// localStorage handling function
function getStorageTheme(): string {
	if (typeof window !== 'undefined') {
		const savedTheme = localStorage.getItem('theme');
		return savedTheme || 'light-theme';
	}
	return 'light-theme';
}

export default function SnippetsPage() {
	const [theme, setTheme] = useState<string>('light-theme');

	// Initialize theme from localStorage
	useEffect(() => {
		const savedTheme = getStorageTheme();
		setTheme(savedTheme);
	}, []);

	// Update localStorage when theme changes
	useEffect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', theme);
		}
	}, [theme]);

	// Toggle theme function
	const toggleTheme = () => {
		setTheme(prevTheme => 
			prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'
		);
	};

	// Get current theme variables
	const currentThemeVars = themeVariables[theme as keyof typeof themeVariables];

	return (
		<div className={styles.container} style={currentThemeVars}>
			<nav className={styles.navigation}>
				<h1 className={styles.title}>OverReacting</h1>
				<button 
					type="button"
					className={styles.themeToggle}
					onClick={toggleTheme}
					aria-label={`Switch to ${theme === 'light-theme' ? 'dark' : 'light'} theme`}
				>
					{theme === 'light-theme' ? '🌙' : '☀️'}
				</button>
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
	);
}
