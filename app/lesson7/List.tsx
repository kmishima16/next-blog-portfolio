import Card from "./Card";
import { calculateDaysUntilBirthday } from "./BirthdayLogic";
import styles from "./List.module.css";

interface Person {
	id: number;
	name: string;
	age: number;
	dob: string;
	image: string;
}

interface ListProps {
	people: Person[];
}

export default function List({ people }: ListProps) {
	const sortedPeople = [...people].sort((a, b) => {
		return (
			calculateDaysUntilBirthday(a.dob) - calculateDaysUntilBirthday(b.dob)
		);
	});

	return (
		<div className={styles.list}>
			{sortedPeople.map((person) => (
				<Card key={person.id} person={person} />
			))}
		</div>
	);
}
