function sumFibs(num: number) {

	let i = 1, arr = [1, 1];

	while (arr[arr.length - 1] <= num) {
		const nextFib = arr[i - 1] + arr[i];
		arr.push(nextFib)
		i++;
	}

	return arr.filter(fibNum => (fibNum % 2 !== 0 && fibNum <= num)).reduce((a, b) => a + b);
}

console.log(sumFibs(75025));