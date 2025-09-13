'use client';

import { useState, useEffect } from 'react';
import Article from './article';
import articles from './data';
import styles from './page.module.css';

// Theme variables
const themeVariables = {
	'light-theme': {
		'--primary-color': '#85dce7',
		'--secondary-color': '#bd8ce9',
		'--text-color': '#333',
		'--bg-color': '#fff',
		'--card-bg': 'rgba(255, 255, 255, 0.9)',
		'--nav-bg': 'rgba(255, 255, 255, 0.95)',
		'--shadow-color': 'rgba(0, 0, 0, 0.1)',
		'--shadow-hover': 'rgba(0, 0, 0, 0.2)',
		'--meta-color': '#666',
		'--border-color': 'rgba(0, 0, 0, 0.1)',
	} as React.CSSProperties,
	'dark-theme': {
		'--primary-color': '#4fd1c7',
		'--secondary-color': '#9f7aea',
		'--text-color': '#e2e8f0',
		'--bg-color': '#1a202c',
		'--card-bg': 'rgba(45, 55, 72, 0.9)',
		'--nav-bg': 'rgba(26, 32, 44, 0.95)',
		'--shadow-color': 'rgba(0, 0, 0, 0.3)',
		'--shadow-hover': 'rgba(0, 0, 0, 0.5)',
		'--meta-color': '#a0aec0',
		'--border-color': 'rgba(255, 255, 255, 0.1)',
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
