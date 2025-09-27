"use client";

import { useState, useMemo } from "react";
import data from "./data";
import styles from "./page.module.css";

const SortableTablePage = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredData = useMemo(() => {
		const lowerSearchTerm = searchTerm.toLowerCase();
		return data.filter((item) =>
			item.first_name.toLowerCase().includes(lowerSearchTerm),
		);
	}, [searchTerm]);

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
			<button type="button" className={styles.sortButton}>
				Sort by First Name
			</button>
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
