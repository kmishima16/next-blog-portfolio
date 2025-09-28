"use client";

import { useState } from "react";
import { questions } from "./questions";

export type UserAnswer = {
	questionIndex: number;
	selectedAnswer: string;
	isCorrect: boolean;
	correctAnswer: string;
	explanation: string;
};

// クイズの状態管理を行うカスタムフック
export const useQuiz = () => {
	// 基本状態
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

	// 計算されたプロパティ
	const totalQuestions = questions.length;
	const isCompleted = currentQuestion >= totalQuestions;
	const currentQuestionData = questions[currentQuestion] || questions[0];

	// 問題に回答する処理
	const answerQuestion = (selectedOption: {
		answerText: string;
		isCorrect: boolean;
	}) => {
		// 正解を見つける
		const correctAnswer =
			questions[currentQuestion].answerOptions.find(
				(option) => option.isCorrect,
			)?.answerText || "";

		// ユーザーの回答を記録
		const userAnswer: UserAnswer = {
			questionIndex: currentQuestion,
			selectedAnswer: selectedOption.answerText,
			isCorrect: selectedOption.isCorrect,
			correctAnswer,
			explanation: questions[currentQuestion].explanation,
		};

		// 回答を保存
		setUserAnswers((prev) => [...prev, userAnswer]);

		// 正解なら得点を増やす
		if (selectedOption.isCorrect) {
			setScore((prev) => prev + 1);
		}

		// 次の問題へ進む
		setCurrentQuestion((prev) => prev + 1);
	};

	// クイズをリセットする処理
	const resetQuiz = () => {
		setCurrentQuestion(0);
		setScore(0);
		setUserAnswers([]);
	};

	return {
		// 状態
		currentQuestion,
		score,
		userAnswers,
		isCompleted,
		// 計算されたプロパティ
		totalQuestions,
		currentQuestionData,
		// アクション関数
		answerQuestion,
		resetQuiz,
	};
};
