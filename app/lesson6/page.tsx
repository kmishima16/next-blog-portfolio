"use client";

import { useState } from "react";
import questions from "./data";
import styles from "./page.module.css";

type AccordionState = "closed" | number;

interface QuestionData {
	id: number;
	title: string;
	info: string;
}

interface QuestionProps {
	question: QuestionData;
	isOpen: boolean;
	onToggle: () => void;
}

const Question = ({ question, isOpen, onToggle }: QuestionProps) => {
	const { id, title, info } = question;

	return (
		<article className={styles.question}>
			<header className={styles.questionHeader}>
				<h4>{title}</h4>
				<button
					className={styles.btn}
					onClick={onToggle}
					type="button"
					aria-expanded={isOpen}
					aria-controls={`question-${id}`}
				>
					{isOpen ? "−" : "+"}
				</button>
			</header>
			<div
				className={`${styles.info} ${isOpen ? styles.infoOpen : ""}`}
				id={`question-${id}`}
			>
				<p>{info}</p>
			</div>
		</article>
	);
};

export default function FAQPage() {
	const [activeState, setActiveState] = useState<AccordionState>("closed");

	const toggleQuestion = (id: number) => {
		setActiveState(activeState === id ? "closed" : id);
	};

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<h1>React? yes React!</h1>
				<section>
					{questions.map((questionData) => (
						<Question
							key={questionData.id}
							question={questionData}
							isOpen={activeState === questionData.id}
							onToggle={() => toggleQuestion(questionData.id)}
						/>
					))}
				</section>
			</div>
		</main>
	);
}
