"use client";

import { useMemo, useState } from "react";
import data from "./data";
import styles from "./page.module.css";

const SortableTablePage = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [sortOrder, setSortOrder] = useState<"none" | "asc">("none");

	const filteredData = useMemo(() => {
		const lowerSearchTerm = searchTerm.toLowerCase();
		let filtered = data.filter((item) =>
			item.first_name.toLowerCase().includes(lowerSearchTerm),
		);

		if (sortOrder === "asc") {
			filtered = filtered.sort((a, b) =>
				a.first_name.localeCompare(b.first_name),
			);
		}

		return filtered;
	}, [searchTerm, sortOrder]);

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Sortify</h1>
			<div className={styles.searchContainer}>
				<input
					type="text"
					placeholder="Search by first name"
					className={styles.searchInput}
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>
			<button
				type="button"
				className={styles.sortButton}
				aria-label={
					sortOrder === "asc"
						? "Sort by first name, currently ascending. Click to remove sorting."
						: "Sort by first name, currently not sorted. Click to sort ascending."
				}
				onClick={() => {
					setSortOrder((prev) => (prev === "none" ? "asc" : "none"));
				}}
			>
				Sort by First Name
			</button>
			<span className={styles.sortStatus}>
				{sortOrder === "asc" ? <span>昇順</span> : <span>無し</span>}
			</span>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Phone</th>
					</tr>
				</thead>
				<tbody>
					{filteredData.map((item) => (
						<tr key={item.email}>
							<td>{item.first_name}</td>
							<td>{item.last_name}</td>
							<td>{item.email}</td>
							<td>{item.phone}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default SortableTablePage;
