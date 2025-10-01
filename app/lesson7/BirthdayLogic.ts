export function calculateDaysUntilBirthday(dob: string): number {
	// 時刻をリセットして日付のみで比較
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const birthDate = new Date(dob);

	// 今年の誕生日を作成
	const currentYear = today.getFullYear();
	const nextBirthday = new Date(
		currentYear,
		birthDate.getMonth(),
		birthDate.getDate(),
	);
	nextBirthday.setHours(0, 0, 0, 0);

	// 今年の誕生日が既に過ぎている場合は来年の誕生日を計算
	if (nextBirthday < today) {
		nextBirthday.setFullYear(currentYear + 1);
	}

	// 日数の差を計算
	const diffTime = nextBirthday.getTime() - today.getTime();
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	return diffDays;
}
