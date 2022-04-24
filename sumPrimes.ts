function sumPrimes(num: number) {
	if (num === 1) {
		return 1;
	}

	let arr = [2];

	for (let i = 2; i <= num; i++) {

		const isPrime = arr.reduce((a, b) => {
			return a && i % b !== 0;
		}, true)

		if (isPrime) {
			arr.push(i)
		}

	}

	return arr.reduce((a, b) => a + b);
}

console.log(sumPrimes(977));