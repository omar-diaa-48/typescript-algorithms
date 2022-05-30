function numJewelsInStones(jewels: string, stones: string): number {
	let sum = 0;

	for (let i = 0; i < stones.length; i++) {
		if (jewels.includes(stones[i])) {
			sum++;
		}
	}

	return sum;
};