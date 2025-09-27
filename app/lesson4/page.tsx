import data from "./data";
import styles from "./page.module.css";

const SortableTablePage = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Sortify</h1>
			<div className={styles.searchContainer}>
				<input 
					type="text" 
					placeholder="Search contracts" 
					className={styles.searchInput}
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
					{data.map((item) => (
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
