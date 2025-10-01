"use client";

import { useState } from "react";
import people from "./data";
import List from "./List";
import styles from "./page.module.css";

export default function BirthdayApp() {
	const [persons, setPersons] = useState(people);

	const clearAll = () => {
		setPersons([]);
	};

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<h2>{persons.length} Birthdays:</h2>
				<List people={persons} />
				<button type="button" onClick={clearAll}>
					clear all
				</button>
			</div>
		</main>
	);
}
