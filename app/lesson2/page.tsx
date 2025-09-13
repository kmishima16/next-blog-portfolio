"use client";
import { useState, useId } from "react";
import styles from "./page.module.css";

const Lesson2Page = () => {
	const weightId = useId();
	const heightId = useId();
	const [weight, setWeight] = useState<string>("");
	const [height, setHeight] = useState<string>("");
	const [bmi, setBmi] = useState<number | null>(null);
	const [message, setMessage] = useState<string>("");

	const calculateBMI = () => {
		const weightNum = parseFloat(weight);
		const heightNum = parseFloat(height);

		if (weightNum > 0 && heightNum > 0) {
			// 身長をcmからmに変換
			const heightInMeters = heightNum / 100;
			const bmiValue = weightNum / (heightInMeters * heightInMeters);

			setBmi(Math.round(bmiValue * 10) / 10); // 小数点第1位まで

			// BMI分類メッセージ
			if (bmiValue < 18.5) {
				setMessage("低すぎです！");
			} else if (bmiValue >= 18.5 && bmiValue < 25) {
				setMessage("適正です");
			} else {
				setMessage("高すぎです！");
			}
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		calculateBMI();
	};

	const handleReload = () => {
		setWeight("");
		setHeight("");
		setBmi(null);
		setMessage("");
	};

	return (
		<main className={styles.main}>
			<div className={styles.card}>
				<h1 className={styles.title}>BMI Calculator</h1>

				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.inputGroup}>
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

				<div className={styles.result}>
					<p className={styles.resultText}>Your BMI is:</p>
					{bmi !== null && (
						<div className={styles.bmiDisplay}>
							<p className={styles.bmiValue}>{bmi}</p>
							<p className={styles.bmiMessage}>{message}</p>
						</div>
					)}
				</div>
			</div>
		</main>
	);
};

export default Lesson2Page;
