function minimumSum(num: number): number {
	const digits = [];

	for (let i = 0; i < 4; i++) {
		const remainder = num % 10;
		digits.push(remainder)
		num = (num - remainder) / 10;
	}

	digits.sort();

	return [(digits[0] * 10) + digits[2], (digits[1] * 10) + digits[3]].reduce((a, b) => a + b)
};

console.log(minimumSum(4009))