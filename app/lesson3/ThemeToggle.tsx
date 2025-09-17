"use client";

import { useTransition } from "react";
import { setThemeCookie } from "./actions";
import styles from "./page.module.css";

type Theme = "light-theme" | "dark-theme";

export default function ThemeToggle({ currentTheme }: { currentTheme: Theme }) {
	const [isPending, startTransition] = useTransition();

	const toggleTheme = () => {
		const newTheme =
			currentTheme === "light-theme" ? "dark-theme" : "light-theme";
		startTransition(() => {
			setThemeCookie(newTheme);
		});
	};

	return (
		<div className={styles.themeToggleContainer}>
			<span className={styles.lightIcon}>light</span>
			<button
				type="button"
				className={`${styles.themeToggle} ${currentTheme === "dark-theme" ? styles.themeToggleDark : ""}`}
				onClick={toggleTheme}
				aria-label={`Switch to ${currentTheme === "light-theme" ? "dark" : "light"} theme`}
				disabled={isPending}
			>
				<span className={styles.toggleSlider}></span>
			</button>
			<span className={styles.darkIcon}>dark</span>
		</div>
	);
}
