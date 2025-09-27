import data from "./data";

const SortableTablePage = () => {
	return (
		<div>
			<h1>Sortify</h1>
			<div>
				<input type="text" placeholder="Search contracts" />
			</div>
			<button type="button">Sort by First Name</button>
			<table>
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
