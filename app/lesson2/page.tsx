"use client";
import { useState, useId } from "react";
import styles from "./page.module.css";

const BMI_THRESHOLDS = {
	UNDERWEIGHT: 18.5,
	NORMAL: 25,
};

const calculateBmiValue = (weight: number, height: number): number => {
	if (weight <= 0 || height <= 0) return 0;
	const heightInMeters = height / 100;
	const bmi = weight / (heightInMeters * heightInMeters);
	return Math.round(bmi * 10) / 10;
};

const getBmiMessage = (bmi: number): string => {
	if (bmi === 0) return "";
	if (bmi < BMI_THRESHOLDS.UNDERWEIGHT) return "低すぎです！";
	if (bmi < BMI_THRESHOLDS.NORMAL) return "適正です";
	return "高すぎです！";
};

type BmiResult = {
	value: number;
	message: string;
};

const createBmiResult = (weight: string, height: string): BmiResult | null => {
	const weightNum = parseFloat(weight);
	const heightNum = parseFloat(height);

	if (
		Number.isNaN(weightNum) ||
		Number.isNaN(heightNum) ||
		weightNum <= 0 ||
		heightNum <= 0
	) {
		return null;
	}

	const bmiValue = calculateBmiValue(weightNum, heightNum);
	const bmiMessage = getBmiMessage(bmiValue);
	return { value: bmiValue, message: bmiMessage };
};

const Lesson2Page = () => {
	const weightId = useId();
	const heightId = useId();
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");
	const [result, setResult] = useState<BmiResult | null>(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const bmiResult = createBmiResult(weight, height);
		setResult(bmiResult);
	};

	const handleReload = () => {
		setWeight("");
		setHeight("");
		setResult(null);
	};

	return (
		<main className={styles.main}>
			<div className={styles.card}>
				<h1 className={styles.title}>BMI Calculator</h1>

				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.inputGroup}>
						<label htmlFor={heightId} className={styles.label}>
							Height (cm)
						</label>
						<input
							id={heightId}
							type="number"
							value={height}
							onChange={(e) => setHeight(e.target.value)}
							className={styles.input}
							placeholder="0"
							min="0"
							step="0.1"
						/>
						<label htmlFor={weightId} className={styles.label}>
							Weight (kg)
						</label>
						<input
							id={weightId}
							type="number"
							value={weight}
							onChange={(e) => setWeight(e.target.value)}
							className={styles.input}
							placeholder="0"
							min="0"
							step="0.1"
						/>
					</div>
					<button
						type="submit"
						className={styles.submitButton}
						disabled={!weight || !height}
					>
						Submit
					</button>
				</form>

				<button
					type="button"
					onClick={handleReload}
					className={styles.reloadButton}
				>
					Reload
				</button>

				{result && (
					<div className={styles.result}>
						<p className={styles.resultText}>Your BMI is:</p>
						<div className={styles.bmiDisplay}>
							<p className={styles.bmiValue}>{result.value}</p>
							<p className={styles.bmiMessage}>{result.message}</p>
						</div>
					</div>
				)}
			</div>
		</main>
	);
};

export default Lesson2Page;
