function sameFrequency(num1: number, num2: number): boolean {
	const num1Digits: Record<number, number> = {};
	const num2Digits: Record<number, number> = {};

	while (num1 > 0) {
		const digit = num1 % 10;

		if (num1Digits[digit]) {
			num1Digits[digit] = num1Digits[digit] + 1;
		} else {
			num1Digits[digit] = 1;
		}

		num1 = Math.trunc(num1 / 10);
	}

	while (num2 > 0) {
		const digit = num2 % 10;

		if (num2Digits[digit]) {
			num2Digits[digit] = num2Digits[digit] + 1;
		} else {
			num2Digits[digit] = 1;
		}

		num2 = Math.trunc(num2 / 10);
	}

	console.log(num1Digits, num2Digits);

	for (const digit in num1Digits) {
		if (!(digit in num2Digits)) {
			return false;
		}

		if (num1Digits[digit] !== num2Digits[digit]) {
			return false;
		}
	}

	return true;
}

console.log(sameFrequency(182, 281));

