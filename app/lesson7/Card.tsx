import { calculateDaysUntilBirthday } from "./BirthdayLogic";
import styles from "./Card.module.css";

interface Person {
	id: number;
	name: string;
	age: number;
	dob: string;
	image: string;
}

interface CardProps {
	person: Person;
}

export default function Card({ person }: CardProps) {
	const daysUntil = calculateDaysUntilBirthday(person.dob);

	return (
		<div className={styles.person}>
			<img src={person.image} alt={person.name} className={styles.image} />
			<div className={styles.info}>
				<h4>{person.name}</h4>
				<p>{person.age} years</p>
				{daysUntil === 0 ? (
					<p className={styles.today}>🎉 Birthday Today!</p>
				) : (
					<p className={styles.upcoming}>In {daysUntil} days</p>
				)}
			</div>
		</div>
	);
}
