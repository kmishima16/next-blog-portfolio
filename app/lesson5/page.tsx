"use client";

import { useQuiz } from "./QuizContext";
import styles from "./page.module.css";

const QuizPage = () => {
	// カスタムフックからクイズの状態と関数を取得
	const {
		currentQuestion,
		score,
		userAnswers,
		isCompleted,
		totalQuestions,
		currentQuestionData,
		answerQuestion,
		resetQuiz,
	} = useQuiz();

	// クイズが完了した場合の結果画面
	if (isCompleted) {
		const percentage = Math.round((score / totalQuestions) * 100);

		return (
			<div className={styles.container}>
				<div className={styles.app}>
					<div className={styles.scoreSection}>
						<h2>クイズ結果</h2>
						<div className={styles.scoreOverview}>
							<p>
								スコア: {score} / {totalQuestions} ({percentage}%)
							</p>
						</div>
					</div>

					<div className={styles.resultDetails}>
						<h3>詳細結果</h3>
						{userAnswers.map((userAnswer) => (
							<div
								key={`question-${userAnswer.questionIndex}`}
								className={`${styles.resultItem} ${
									userAnswer.isCorrect ? styles.correct : styles.incorrect
								}`}
							>
								<div className={styles.resultHeader}>
									<span className={styles.questionNumber}>
										問題 {userAnswer.questionIndex + 1}
									</span>
									<span
										className={`${styles.resultBadge} ${
											userAnswer.isCorrect
												? styles.correctBadge
												: styles.incorrectBadge
										}`}
									>
										{userAnswer.isCorrect ? "正解" : "不正解"}
									</span>
								</div>

								<div className={styles.answerComparison}>
									<p>
										<strong>あなたの回答:</strong>
										<span
											className={
												userAnswer.isCorrect
													? styles.correctText
													: styles.incorrectText
											}
										>
											{userAnswer.selectedAnswer}
										</span>
									</p>
									{!userAnswer.isCorrect && (
										<p>
											<strong>正解:</strong>
											<span className={styles.correctText}>
												{userAnswer.correctAnswer}
											</span>
										</p>
									)}
								</div>

								{userAnswer.explanation && (
									<div className={styles.explanation}>
										<p>
											<strong>解説:</strong> {userAnswer.explanation}
										</p>
									</div>
								)}
							</div>
						))}
					</div>

					<div className={styles.actionButtons}>
						<button
							type="button"
							className={styles.answerButton}
							onClick={resetQuiz}
						>
							もう一度挑戦する
						</button>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<div className={styles.app}>
				<div className={styles.questionSection}>
					<div className={styles.questionCount}>
						<span>Question {currentQuestion + 1}</span>/{totalQuestions}
					</div>
					<div className={styles.questionText}>
						{currentQuestionData.questionText}
					</div>
				</div>
				<div className={styles.answerSection}>
					{currentQuestionData.answerOptions.map((answerOption) => {
						return (
							<button
								key={`q${currentQuestion}-${answerOption.answerText}`}
								type="button"
								className={styles.answerButton}
								onClick={() => answerQuestion(answerOption)}
							>
								{answerOption.answerText}
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default QuizPage;
